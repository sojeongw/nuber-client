import React from "react";
import {graphql} from "react-apollo";
import reset from "styled-reset";
import theme from "../../theme";
import {injectGlobal, ThemeProvider} from "../../typed-components";
import {IS_LOGGED_IN} from "./AppQueries";
import AppPresenter from "./AppPresenter";

injectGlobal`
  ${reset}
`;

// graphql(IS_LOGGED_IN)로 부터 받은 쿼리 데이터
const AppContainer = ({ data }) => (
    <ThemeProvider theme={theme}>
        <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);