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
  SliceThemeProvider, theme, Icon, Typography, HStack,
} from 'react-native-fh-slice-ui';


type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const overRidedColors = {
  ...colors,
  Primary: {
    ...colors.Primary,
    // 100: '#D8EFDD',
    // 200: '#B1DFBC',
    // 300: '#88CF9B',
    // 400: '#5BBE7B',
    // 500: '#14AD5C', // ✅ Primary green
    // 600: '#1B8E4D',
    // 700: '#1D703E',
    // 800: '#1C5430',
    // 900: '#173922',
    // 1000: '#111F15',
    //
    // // Alpha (opacity) shades
    // a50: 'rgba(20, 173, 92, 0.05)', // very subtle background
    // a100: 'rgba(20, 173, 92, 0.10)', // light hover
    // a150: 'rgba(20, 173, 92, 0.20)', // active
    // a200: 'rgba(20, 173, 92, 0.40)' // pressed or selected
  }
};

const updatedTheme = {
    typographyStyles: {
        heading3Bold: {
            fontSize: 50 // Update the font size
        }
    }
};

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...LightColorTokens(overRidedColors),
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
    ...DarkColorTokens(overRidedColors),
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
        <Typography variant={'heading3Bold'}>sajid</Typography>
        <HStack gap={200}>
        <SliceButton variant="primary" size="small">sajid</SliceButton>
        <SliceButton variant="primary" size="medium">sajid</SliceButton>
        <SliceButton variant="primary" size="large">sajid</SliceButton>
        </HStack>
      </View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
  theme.updateNestedStyles(updatedTheme)

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
