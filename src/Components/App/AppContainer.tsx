import React from "react";
import { graphql } from "react-apollo";
import { IS_LOGGED_IN } from "./AppQueries";
import AppPresenter from "./AppPresenter";

// graphql(IS_LOGGED_IN)로 부터 받은 쿼리 데이터
const AppContainer = ({ data }) => (
    <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
);

export default graphql(IS_LOGGED_IN)(AppContainer);