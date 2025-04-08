import React from 'react';
import {
  View,
  ViewStyle,
  ViewProps,
  StyleProp,
} from 'react-native';

interface StackProps extends ViewProps {
  gap?: number; // Spacing between children
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>; // Additional container styles
  alignItems?: ViewStyle['alignItems']; // Alignment along cross axis
  justifyContent?: ViewStyle['justifyContent']; // Alignment along main axis
  flexWrap?: ViewStyle['flexWrap']; // Wrap children if needed
}

/**
 * HStack arranges children in a horizontal row with optional spacing and alignment.
 *
 * Example usage:
 *
 * <HStack gap={10}>
 *   <Text>Left</Text>
 *   <Text>Right</Text>
 * </HStack>
 *
 * <HStack gap={12} alignItems="center" justifyContent="space-between" style={{ padding: 10 }}>
 *   <Text>Left</Text>
 *   <Text>Right</Text>
 * </HStack>
 */
export const HStack: React.FC<StackProps> = ({
                                               gap = 0,
                                               children,
                                               style,
                                               alignItems,
                                               justifyContent,
                                               flexWrap,
                                               ...rest
                                             }) => {
  const combinedStyle: ViewStyle = {
    flexDirection: 'row',
    gap,
    alignItems,
    justifyContent,
    flexWrap,
  };

  return (
    <View style={[combinedStyle, style]} {...rest}>
      {children}
    </View>
  );
};

/**
 * VStack arranges children in a vertical column with optional spacing and alignment.
 *
 * Example usage:
 *
 * <VStack gap={15}>
 *   <Text>Top</Text>
 *   <Text>Bottom</Text>
 * </VStack>
 *
 * <VStack gap={20} style={{ backgroundColor: '#f0f0f0' }} alignItems="center">
 *   <Text>Centered 1</Text>
 *   <Text>Centered 2</Text>
 * </VStack>
 */
export const VStack: React.FC<StackProps> = ({
                                               gap = 0,
                                               children,
                                               style,
                                               alignItems,
                                               justifyContent,
                                               flexWrap,
                                               ...rest
                                             }) => {
  const combinedStyle: ViewStyle = {
    flexDirection: 'column',
    gap,
    alignItems,
    justifyContent,
    flexWrap,
  };

  return (
    <View style={[combinedStyle, style]} {...rest}>
      {children}
    </View>
  );
};
