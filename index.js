/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import './mocks/server';

LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
