import { AppRegistry } from 'react-native';
import App from '../App';

AppRegistry.registerComponent('SliceUi', () => App);
AppRegistry.runApplication('SliceUi', {
    rootTag: document.getElementById('root'),
});
