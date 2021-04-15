import React, {useState} from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Label from '../../components/Label'

import logo from '../../assets/logo.png'
import { AiOutlineLoading } from 'react-icons/ai';

import { Container, Form, BoxWelcome, TitleBoxWelcome, FormTitle, ContainerInputs, SignUpLink, MensageError, Loading } from './styles'
import { useMutation , gql } from '@apollo/client';
import { Link } from 'react-router-dom'

const CREATE_USER = gql`
    mutation createUser($name: String!, $email: String!, $password: String! ) {
        createUser(data: {
            email: $email,
            password: $password
            name: $name
        }) {
            email
        }
    }
`;

const SignUp: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    let mensageError = '';
     
    const [createUser, {error, loading, data}] = useMutation(CREATE_USER, { errorPolicy: 'all' });

    if(!loading) {
        if(error && error?.graphQLErrors) {
            //const [{message}] =  error?.graphQLErrors;
            //mensageError = message;
        };
    };

    if(data?.createUser) {
        return (
            <Container>
                <BoxWelcome>
                    <TitleBoxWelcome>
                        Bem vindo
                    </TitleBoxWelcome>
                    <a href="/">Voltar</a>
                </BoxWelcome>
                     
            </Container>
        )
    }

    return (
        <Container>
            <Form onSubmit={(e) => {
                    e.preventDefault();
                    createUser({variables: { email, password, name}});
                }
            }>

                <img src={logo} alt="Loja integrada"/>
                <FormTitle>Acessar conta</FormTitle>
                {!!mensageError && <MensageError>{mensageError}</MensageError>}
                <ContainerInputs>
                    <Label htmlFor="name">Nome:</Label> 
                    <Input
                        id="name"
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Label htmlFor="email">Email:</Label>
                    <Input
                        id="email"
                        aria-required="true"
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Label htmlFor="password">Senha:</Label>
                    <Input
                        type="password"
                        id="password"
                        aria-required="true"
                        required
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
                        <>Cadastrar</>
                    )}
                </Button>
                <SignUpLink>
                    Já é cadastrado? <Link to="/">Login </Link>.
                </SignUpLink>
            </Form>
        </Container>
    )
}

export default SignUp;