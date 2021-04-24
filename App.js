import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RecentView from './src/views/RecentView';
import ContactView from './src/views/ContactView';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={{ backgroundColor: '#fff', }}>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Recent" component={RecentView} />
        <Stack.Screen name="Contact" component={ContactView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
