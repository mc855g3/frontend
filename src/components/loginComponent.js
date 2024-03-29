import React, {useState, useContext} from 'react'
import styled from 'styled-components';
import icon from '../images/logo.png'
import {useNavigate} from 'react-router-dom'
import AuthContext from '../context/authContext';
import { API_BASE } from '../constants/constants';
import {Buffer} from 'buffer';
const LoginComponent = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const { setAuthString }=useContext(AuthContext)
    const history= useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const authString= Buffer.from(`${user}:${password}`).toString("base64")
        console.log(authString)
        const response = await fetch(`${API_BASE}`,{
            method: "GET",
            headers: {"Authorization": `Basic ${authString}`}
        } )
        if (response.status === 200){
            localStorage.setItem("mc855Auth", authString);
            setAuthString(authString)
            history("/back")
        }else{
            alert("Senha ou Usuario incorretos")
        }
    }

    return (
    <ContainerExterno>
        <ContainerLogin>
            <WrapLogin>
            <LoginForm onSubmit={handleSubmit}>
                <WrapImg>
                <LoginIcon src = {icon}/>
                </WrapImg>
                <WrapInput>
                <LoginInput
                    type="Usuario"
                    value={user}
                    onChange = {(e) => setUser(e.target.value)}
                    placeholder = "User"
                />
                </WrapInput>

                <WrapInput>
                <LoginInput
                    type="password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                    placeholder = "Senha"
                />
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #0000;
`
const WrapLogin = styled.div` 
    width: 35rem;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 77px 55px 33px 55px;
    box-shadow: 0 2px 10px 1px #000;
`
const LoginForm = styled.form` 

`

const LoginIcon = styled.img`
    width: 12rem;
    height: 12rem;
`
const WrapInput = styled.div` 
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
`
const LoginInput = styled.input` 
    font-size: 1.25rem;
    color: #000;
    line-height: 1.2;
    border: none;
    display: inline;
    width: 100%;
    height: 45px;
    background-color: transparent;
    padding: 0 5px;
`
const WrapImg = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 20px;
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
