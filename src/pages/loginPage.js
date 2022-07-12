import React from 'react';
import styled from 'styled-components';
import LoginComponent from '../components/loginComponent.js';
import TopBar from '../components/topBar.js';
const LoginPage = () => {
    return (
        <LoginPageWrapper>
            <TopBar/>
            <LoginComponent/>
        </LoginPageWrapper>   
    )
}

export default LoginPage
const LoginPageWrapper = styled.div`

`


