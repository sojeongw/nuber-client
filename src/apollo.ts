import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    // 서버가 ㅎraphql API를 가지고 있음을 알린다.
    uri: "http://localhost:4000/graphql"
});

export default client;