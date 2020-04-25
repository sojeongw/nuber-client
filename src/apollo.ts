import ApolloClient, { Operation } from "apollo-boost";

const client = new ApolloClient({
    // 클라이언트에 request를 할 때마다 jwt를 사용한다.
    request: async (operation: Operation) => {
        // 쿼리나 뮤테이션을 보내면 여기서 채가서 context를 보낸다.
        operation.setContext({
            headers: {
                "X-JWT": localStorage.getItem("jwt") || ""
            }
        });
    },
    // 서버가 graphql API를 가지고 있음을 알린다.
    uri: "http://localhost:4000/graphql"
});

export default client;