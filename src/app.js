import { createStackNavigator } from 'react-navigation';
import HomePage from './HomePage';
import Livestream from './Livestream';
import Videos from './Videos';

const App = createStackNavigator({
    Home: { screen: HomePage },
    Livestream: { screen: Livestream },
    Videos: { screen: Videos },
    Notifications: { screen: Notifications }
});

export default App;