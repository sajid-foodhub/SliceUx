import React from 'react';
import { Text, View, useColorScheme, Button } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  colors,
  DarkColorTokens,
  LightColorTokens,
  Button as SliceButton,
  SliceThemeProvider, theme, Icon, Typography,
} from 'react-native-fh-slice-ui';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...LightColorTokens(colors),
    background: '#f5f5f5',
    card: '#ffffff',
    text: '#000000',
    primary: '#1e90ff',
    border: '#ccc',
    notification: '#ff453a',
  },
};

const MyDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...DarkColorTokens(colors),
    background: '#121212',
    card: '#1f1f1f',
    text: '#ffffff',
    primary: '#bb86fc',
    border: '#333333',
    notification: '#ff453a',
  },
};

export default function App() {
  const colorScheme = useColorScheme(); // 'light' | 'dark' | null

  const colorTheme = colorScheme === 'dark' ? MyDarkTheme : LightTheme;

  const HomeScreen = ({ navigation }: any) => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorTheme.colors.background,
      }}
    >
      <Text style={{ fontSize: 24, color: colorTheme.colors.text, marginBottom: 10 }}>
        Home Screen
      </Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );

  const DetailsScreen = ({ navigation }: any) => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorTheme.colors.background,
      }}
    >
      <View style={{ padding: 16, gap: 12 }}>
        <Typography>sajid</Typography>
        <SliceButton variant="primary" size="small">sajid</SliceButton>
        <SliceButton variant="primary" size="medium">sajid</SliceButton>
        <SliceButton variant="primary" size="large">sajid</SliceButton>
      </View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );

  return (
    <SliceThemeProvider theme={theme}>
    <NavigationContainer theme={colorTheme}>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    </SliceThemeProvider>
  );
}
