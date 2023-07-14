import { useNavigate } from "react-router-dom";
import * as Styled from './Login.style';
import {useState} from "react";

export const FormLoginComponents = () => {
    const [data, setData] = useState ({
        email:'',
        password:'',
    });

    const navigate = useNavigate();

    const isDisable =() => {
        return !data.email || !data.password || !data.email.includes('@') || data.password.length <8;
    }

    const handleInput = (event) => {
        event.preventDefault();
        const {value, id} = event.target;
        setData({...data,[id]: value});
    }

    const redirectToLogin = () => {
        navigate('/home')
    }

    return (
        <Styled.Form ondSubmit = {redirectToLogin}>
            <Styled.Header className="Header">
                <Styled.Title>Login</Styled.Title>
                <Styled.SubTitle>Texto</Styled.SubTitle>
            </Styled.Header>
                <Styled.InputGroup className="input-group">
                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" onInput={handleInput} placeholder="Digite seu email"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" onInput={handleInput} placeholder="Digite sua senha."/>
                    </div>
                </Styled.InputGroup>
                <Styled.Button type='submit' disable={isDisable()}>Entrar</Styled.Button>
                <Styled.Action className="">
                    <Styled.EsqueciSenha href="">Esqueci minha senha</Styled.EsqueciSenha>
                    <Styled.Button $outLined={true}>Criar conta</Styled.Button>
                </Styled.Action>
        </Styled.Form>
    )
}