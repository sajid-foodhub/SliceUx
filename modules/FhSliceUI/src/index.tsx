import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  View,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-fh-slice-ui' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type FhSliceUIProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'FhSliceUIView';

let FhSliceUIView: React.ComponentType<FhSliceUIProps>;

if (Platform.OS === 'web') {
  // Fallback for web: render an empty View with given color and style
  FhSliceUIView = ({ color, style }) => (
    <View style={[{ backgroundColor: color }, style]} />
  );
} else {
  // Native implementation
  FhSliceUIView =
    UIManager.getViewManagerConfig(ComponentName) != null
      ? requireNativeComponent<FhSliceUIProps>(ComponentName)
      : () => {
        throw new Error(LINKING_ERROR);
      };
}

export { FhSliceUIView };

export { default as Typography } from './SliceUI/typography/Typography';

export { default as Icon } from './SliceUI/icon/Icon';

export { default as Button } from './SliceUI/button/Button';

export {
  SliceThemeProvider,
  useSliceTheme,
} from './SliceUI/contextProvider/context';

export { colors } from './SliceUI/colors/Pallete';

export { DarkColorTokens, LightColorTokens } from './SliceUI/colors/Token';

export { theme } from './SliceUI/theme/theme';
