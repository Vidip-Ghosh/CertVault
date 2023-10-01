import Register from './components/Register';
import Login from './components/Login';
import { NativeWindStyleSheet } from "nativewind";
import Dashboard from './components/Dashboard';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IssuerDashboard from './components/IssuerDashboard';

NativeWindStyleSheet.setOutput({
  default: "native",
});
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(128, 0, 128)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
        <Stack.Screen name='IssuerDashboard' component={IssuerDashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




