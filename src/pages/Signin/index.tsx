import React, {useState} from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

import { useAuth } from '../../context/auth';

import logo from '../../assets/logo.png'

import { Container, Form, FormTitle, ContainerInputs, SignUpLink } from './styles'

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    return (
        <Container>
            <Form onSubmit={() => signIn(email, password)}>
                <img src={logo} alt="Loja integrada"/>
                <FormTitle>Acessar conta</FormTitle>
                    <ContainerInputs>
                        <Input
                            type="email"
                            required
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            required
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </ContainerInputs>
                    <Button type="submit">Acessar</Button>
                    <SignUpLink>
                        Ainda não é cadastrado? Cadastre aqui
                    </SignUpLink>
            </Form>
        </Container>
    )
}

export default SignIn;