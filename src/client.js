import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

export const AppContainer = () => {
    return <App/>
};

ReactDOM.render(<AppContainer />, document.getElementById('root'));
