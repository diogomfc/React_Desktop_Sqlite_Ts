/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {Home} from './src/pages/Home';
//import Teste from './src/pages/Home/teste';

AppRegistry.registerComponent(appName, () => Home);
