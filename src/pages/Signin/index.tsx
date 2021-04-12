import React from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'

import logo from '../../assets/logo.png'

import { Container, Form, FormTitle, ContainerInputs, SignUpLink } from './styles'

const Sigin: React.FC = () => {
    return (
        <Container>
            <Form onSubmit={() => {}}>
                <img src={logo} alt="Loja integrada"/>
                <FormTitle>Acessar conta</FormTitle>
                    <ContainerInputs>
                        <Input
                            type="email"
                            required
                            placeholder="E-mail"
                        />
                        <Input
                            type="password"
                            required
                            placeholder="Senha"
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

export default Sigin;