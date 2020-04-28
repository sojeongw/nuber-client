import PropTypes from "prop-types";
import React from "react";

// 타입스크립트에서 컴포넌트에 대해 타입을 지정해주기 위해 인터페이스를 만든다.
interface IProps {
    isLoggedIn: boolean;
}

// 이제 AppPresenter는 React.SFC<IProps> 타입을 갖는다.
const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) =>
    isLoggedIn ? <span>you are in</span> : <span>your are out</span>;

AppPresenter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;