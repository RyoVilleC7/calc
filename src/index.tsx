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

//Outside Components
import Calculator from './component/basic/calculator';

/////////////////////////////////////////////////////////////////

ReactDOM.render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
    document.querySelector('#app')
);