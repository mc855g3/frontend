import React, {useState} from 'react'
import styled from 'styled-components';
import icon from '../images/logo.png'

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", {email, password});
        
    }

    return (
    <ContainerExterno>
        <ContainerLogin>
            <WrapLogin>
            <LoginForm onSubmit={handleSubmit}>
                
                <ChatIcon src = {icon}/>

                <WrapInput>
                <LoginInput
                    type="email"
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <FocusInput data-placeholder="Email"></FocusInput>
                </WrapInput>

                <WrapInput>
                <LoginInput
                    type="password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <FocusInput data-placeholder="Password"></FocusInput>
                </WrapInput>

                <FormButton>
                <ButtonLogin>Login</ButtonLogin>
                </FormButton>

            </LoginForm>
            </WrapLogin>
        </ContainerLogin>
    </ContainerExterno>
    ) 
}
  
export default LoginComponent
 
const ContainerExterno = styled.div` #Container
    
`
const ContainerLogin = styled.div` 
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #0000;
`
const WrapLogin = styled.div` 
    width: 390px;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 77px 55px 33px 55px;
    box-shadow: 0 2px 10px 1px #000;
`
const LoginForm = styled.form` 

`

const ChatIcon = styled.img` 
    width: 10rem;
`
const WrapInput = styled.div` 
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
`
const LoginInput = styled.input` 
    font-size: 15px;
    color: #000;
    line-height: 1.2;
    border: none;
    display: block;
    width: 100%;
    height: 45px;
    background-color: transparent;
    padding: 0 5px;
`
const FocusInput = styled.span` 
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 10px;
    left: 0;
    pointer-events: none;
    color: #adadad;
    &:before {
        content: attr(data-placeholder);
        height: 2px;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
    }
`

const FormButton = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 13px;
`
const ButtonLogin = styled.button` 
    background: #0093dd;
    color: white;
    width : 50%;
    padding: 15px;
    font-size: 1.25rem;
    border-radius:60px;
    border-color: #1cb5ff;
    &: hover{
        cursor: pointer;
        background:#1cb5ff;
    }
`
