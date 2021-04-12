import React from 'react'
import { ThemeProvider } from 'styled-components';
import Sigin from './pages/Signin';
import GlobalStyles from './styles/GlobalStyles';

import Theme from './styles/Theme'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <Sigin />
        </ThemeProvider>
    )
}

export default App;