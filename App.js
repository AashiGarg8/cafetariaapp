import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import './components/UploadDummyData'; // This will automatically call uploadDummyData()



// Import your screen components
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import SignupScreen from './screens/SignupScreen';
import AdminProfile from './screens/adminprofile';
import SettingsScreen from './screens/SettingsScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import InsightsScreen from './screens/InsightsScreen';
import ProfileScreen from './screens/ProfileScreen';
import MealScreen from './screens/MealScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import 'react-native-gesture-handler';
import QRScannerScreen from './components/qrscanner';         // adjust the path
import QRGeneratorScreen from './components/qrcodegenerate';     // adjust the path


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer Navigator for main application screens
function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Leaderboard"
    /*screenOptions={{ headerShown: false }}*/>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Drawer.Screen name="Insights" component={InsightsScreen} />
      <Drawer.Screen name="Meals" component={MealScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Feedback" component={FeedbackScreen} />
    </Drawer.Navigator>
  );
}

// Stack Navigator for authentication-related screens
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}