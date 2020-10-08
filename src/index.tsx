//React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//IE11-polyfill
import 'react-app-polyfill/ie11';

//Style
import './style/style.scss';

//Redux
import store from './store/store';
import { Provider } from 'react-redux';

//Component
import Calculater from './component/calculater';

/////////////////////////////////////////////////////////////////

const App: React.FC = () => {
    return <Calculater />;
};

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#app')
);