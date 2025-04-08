import React from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  ViewProps,
} from 'react-native';

interface PageContainerProps extends ViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  maxWidth?: number;

  // Padding options
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

const PageContainer: React.FC<PageContainerProps> = ({
                                                       children,
                                                       style,
                                                       maxWidth = 1024,
                                                       padding,
                                                       paddingTop,
                                                       paddingBottom,
                                                       paddingHorizontal,
                                                       paddingVertical,
                                                       paddingLeft,
                                                       paddingRight,
                                                       ...rest
                                                     }) => {
  const containerStyle: ViewStyle = {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    maxWidth,

    // Apply padding props if provided
    ...(padding !== undefined && { padding }),
    ...(paddingTop !== undefined && { paddingTop }),
    ...(paddingBottom !== undefined && { paddingBottom }),
    ...(paddingHorizontal !== undefined && { paddingHorizontal }),
    ...(paddingVertical !== undefined && { paddingVertical }),
    ...(paddingLeft !== undefined && { paddingLeft }),
    ...(paddingRight !== undefined && { paddingRight }),
  };

  return (
    <View style={[containerStyle, style]} {...rest}>
      {children}
    </View>
  );
};

export default PageContainer;
