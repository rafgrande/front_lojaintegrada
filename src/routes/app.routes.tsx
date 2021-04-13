import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';

const AppRoutes: React.FC = () => (
    <Switch>
        <Route component={Home}/>
    </Switch>
);

export default AppRoutes;