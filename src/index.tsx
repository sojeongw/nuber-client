import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./Components/App";
import client from "./apollo";

// 리액트에서 apollo를 쓰려면 apollo provider를 통해야 한다.
ReactDOM.render(<ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root") as HTMLElement);
