import React from 'react';
import {
  DimensionValue,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface ScrollContainerProps extends ScrollViewProps {
  direction?: 'horizontal' | 'vertical'; // Scroll direction
  showsIndicators?: boolean; // Toggle scroll indicators
  maxHeight?: DimensionValue; // Max height for vertical scroll
  style?: StyleProp<ViewStyle>; // Additional styles
}

/**
 * ScrollContainer provides a customizable scrollable wrapper.
 * Supports both vertical and horizontal scrolling, with optional indicators and max height.
 *
 * Example usage:
 *
 * // Vertical scrollable list with max height
 * <ScrollContainer direction="vertical" maxHeight={200} showsIndicators={false}>
 *   <VStack gap={10}>
 *     <Text>Item 1</Text>
 *     <Text>Item 2</Text>
 *     <Text>Item 3</Text>
 *     <Text>Item 4</Text>
 *   </VStack>
 * </ScrollContainer>
 *
 * // Horizontal scrollable row
 * <ScrollContainer direction="horizontal">
 *   <HStack gap={10}>
 *     <Box bg="lightblue" padding={10}><Text>Box 1</Text></Box>
 *     <Box bg="lightblue" padding={10}><Text>Box 2</Text></Box>
 *     <Box bg="lightblue" padding={10}><Text>Box 3</Text></Box>
 *   </HStack>
 * </ScrollContainer>
 */
const ScrollContainer: React.FC<ScrollContainerProps> = ({
                                                           direction = 'vertical',
                                                           showsIndicators = true,
                                                           maxHeight,
                                                           style,
                                                           children,
                                                           ...scrollViewProps
                                                         }) => {
  const isHorizontal = direction === 'horizontal';

  return (
    <ScrollView
      horizontal={isHorizontal}
      showsHorizontalScrollIndicator={isHorizontal ? showsIndicators : false}
      showsVerticalScrollIndicator={!isHorizontal ? showsIndicators : false}
      style={[styles.scroll, maxHeight ? { maxHeight } : {}, style]}
      {...scrollViewProps}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 0, // Prevents scroll from expanding unnecessarily
  },
});

export default ScrollContainer;
