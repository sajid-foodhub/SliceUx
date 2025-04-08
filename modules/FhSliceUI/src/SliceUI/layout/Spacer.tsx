import React from 'react';
import {
  DimensionValue,
  View,
  ViewStyle,
  ViewProps,
  StyleProp,
} from 'react-native';

interface SpacerProps extends ViewProps {
  width?: DimensionValue; // Fixed width or percentage
  height?: DimensionValue; // Fixed height or percentage
  flex?: number;           // Flex grow to fill space
  style?: StyleProp<ViewStyle>; // Additional styles
}

/**
 * Spacer is a utility component for adding space between elements.
 * You can control its size with `width`, `height`, or `flex`.
 *
 * Example usage:
 *
 * // Horizontal space between two items
 * <HStack>
 *   <Text>Left</Text>
 *   <Spacer width={20} />
 *   <Text>Right</Text>
 * </HStack>
 *
 * // Push content to the end using flex
 * <HStack>
 *   <Text>Left</Text>
 *   <Spacer flex={1} />
 *   <Text>Right</Text>
 * </HStack>
 *
 * // Vertical spacing
 * <VStack>
 *   <Text>Top</Text>
 *   <Spacer height={30} />
 *   <Text>Bottom</Text>
 * </VStack>
 */
const Spacer: React.FC<SpacerProps> = ({ width, height, flex, style, ...rest }) => {
  const spacerStyle: ViewStyle = {
    width,
    height,
    flex,
  };

  return <View style={[spacerStyle, style]} {...rest} />;
};

export default Spacer;
