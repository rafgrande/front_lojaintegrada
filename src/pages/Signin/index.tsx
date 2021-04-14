import React, {useState} from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

import logo from '../../assets/logo.png'
import { AiOutlineLoading } from 'react-icons/ai';

import { useAuth } from '../../context/auth';

import { Container, Form, FormTitle, ContainerInputs, SignUpLink, MensageError, Loading } from './styles'
import { useMutation , gql } from '@apollo/client';

const CREATE_SESSION = gql`
    mutation CreateSession($email: String!, $password: String! ) {
        createSession(data: {
            email: $email,
            password: $password
        }) {
            email
            name
            token
        }
    }
`;

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    let mensageError = '';
     
    const [createSession, {error, loading, data}] = useMutation(CREATE_SESSION, { errorPolicy: 'all' })
    if(!loading) {
        if(error && error?.graphQLErrors) {
            const [{message}] =  error?.graphQLErrors;
            mensageError = message;
        };
    };

    const {signIn} = useAuth();

    if(data?.createSession) signIn();

    return (
        <Container>
            <Form onSubmit={(e) => {
                    e.preventDefault();
                    createSession({variables: {email, password}});
                }
            }>

                <img src={logo} alt="Loja integrada"/>
                <FormTitle>Acessar conta</FormTitle>
                {!!mensageError && <MensageError>{mensageError}</MensageError>}
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
                <Button 
                    type="submit" 
                    disabled={loading}
                >
                    {loading ? (
                        <Loading>
                            <AiOutlineLoading />
                        </Loading>
                    ) : (
                        <>Acessar</>
                    )}
                </Button>
                <SignUpLink>
                    Ainda não é cadastrado? Cadastre aqui
                </SignUpLink>
            </Form>
        </Container>
    )
}

export default SignIn;