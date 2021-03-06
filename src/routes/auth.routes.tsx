import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';

const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path='/' exact  component={SignIn} />
        <Route path='/signup' exact  component={SignUp} />
    </Switch>
);

export default AuthRoutes;