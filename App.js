import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import DashBoard from './src/screens/DashBoardScreen/DashBoard';
import HireFreelance from './src/screens/HireFreelance/HireFreelance';
import MyProfile from './src/screens/MyProfile/MyProfile';
import MyProjects from './src/screens/MyProjects/MyProjects';
import MyJobs from './src/screens/MyJobs/MyJobs';
import FindJobs from './src/screens/FindJobs/FindJobs';
import { useEffect } from 'react';
const Stack = createNativeStackNavigator();
export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "#fff"
    }}
      >
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }}>
        {(props) => (
            <SplashScreen
              {...props}
              options={{ headerTitle: (props) => <HeaderTitle {...props} />}} 
            
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="DashBoard" options={{ headerShown: true }}>
        {(props) => (
            <DashBoard
              {...props}
              options={{ headerTitle: (props) => <HeaderTitle {...props} /> }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="HireFreelance" options={{ headerShown: true }}>
        {(props) => (
            <HireFreelance
              {...props}
              options={{ headerTitle: (props) => <HeaderTitle {...props} /> }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="MyProjects" options={{ headerShown: true }}>
        {(props) => (
            <MyProjects
              {...props}
              options={{ headerTitle: (props) => <HeaderTitle {...props} /> }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="MyJobs" options={{ headerShown: true }}>
        {(props) => (
            <MyJobs
              {...props}
              options={{ headerTitle: (props) => <HeaderTitle {...props} /> }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="FindJobs" options={{ headerShown: true }}>
        {(props) => (
            <FindJobs
              {...props}
              options={{ headerTitle: (props) => <HeaderTitle {...props} /> }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="MyProfile" options={{ headerShown: true }}>
        {(props) => (
            <MyProfile
              {...props}
              options={{ headerTitle: (props) => <HeaderTitle {...props} /> }}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
