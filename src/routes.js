import 'react-native-gesture-handler';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './services/navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Timeline from '~/pages/Timeline';

export default function Routes() {
  const { signed } = useSelector(state => state.auth);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={signed ? 'Timeline' : 'SignIn'}
        headerMode="none"
      >
        <Stack.Screen name="Timeline" component={Timeline} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
