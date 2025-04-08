import React from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  ViewProps,
  StyleSheet,
} from 'react-native';

interface GridProps extends ViewProps {
  columns?: number; // Number of columns
  gap?: number; // Spacing between items
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>; // Container styles
  itemStyle?: StyleProp<ViewStyle>; // Item styles
}

/**
 * Grid is a flexible layout component for creating multi-column grids.
 * It supports adjustable columns, spacing (gap), and custom styles.
 *
 * Example usage:
 *
 * // 3-column grid with spacing
 * <Grid columns={3} gap={10}>
 *   <Box bg="lightblue" padding={10}><Text>Box 1</Text></Box>
 *   <Box bg="lightblue" padding={10}><Text>Box 2</Text></Box>
 *   <Box bg="lightblue" padding={10}><Text>Box 3</Text></Box>
 *   <Box bg="lightblue" padding={10}><Text>Box 4</Text></Box>
 * </Grid>
 *
 * // 2-column grid with smaller gap
 * <Grid columns={2} gap={5}>
 *   <Text>Item 1</Text>
 *   <Text>Item 2</Text>
 *   <Text>Item 3</Text>
 * </Grid>
 *
 * // Grid with custom container and item styles
 * <Grid columns={2} gap={8} style={{ padding: 10 }} itemStyle={{ backgroundColor: '#eee' }}>
 *   <Text>Styled 1</Text>
 *   <Text>Styled 2</Text>
 * </Grid>
 */
const Grid: React.FC<GridProps> = ({
                                     columns = 2,
                                     gap = 0,
                                     children,
                                     style,
                                     itemStyle,
                                     ...rest
                                   }) => {
  const gridStyle: ViewStyle = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap,
  };

  const calculatedItemStyle: ViewStyle = {
    width: `${100 / columns - (gap * (columns - 1)) / columns}%`,
    marginBottom: gap,
  };

  return (
    <View style={[gridStyle, style]} {...rest}>
      {React.Children.map(children, (child, index) => (
        <View key={index} style={[calculatedItemStyle, itemStyle]}>
          {child}
        </View>
      ))}
    </View>
  );
};

export default Grid;
