import ApolloClient, { Operation } from "apollo-boost";

const client = new ApolloClient({
    clientState: {
        defaults: {
            auth: {
                __typename: "Auth",
                isLoggedIn: Boolean(localStorage.getItem("jwt"))
            }
        },
        // 리덕스 없이 아폴로만으로 상태값을 변경할 수 있다.
        resolvers: {
            Mutation: {
                logUserIn: (_, { token }, { cache }) => {
                    localStorage.setItem("jwt", token);
                    // 여기서의 캐시는 상단에 있는 auth 내용을 뜻한다.
                    cache.writeData({
                        data: {
                            auth: {
                                __typename: "Auth",
                                isLoggedIn: true
                            }
                        }
                    });
                    return null;
                },
                logUserOut: (_, __, { cache }) => {
                    localStorage.removeItem("jwt");
                    cache.writeData({
                        data: {
                            __typename: "Auth",
                            isLoggedIn: false
                        }
                    });
                    return null;
                }
            }
        }
    },
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