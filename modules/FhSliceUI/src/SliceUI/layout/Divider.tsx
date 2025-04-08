import React from 'react';
import { View, ViewStyle } from 'react-native';

// Example Usage:
// <VStack>
//   <Text>Item 1</Text>
//   <Divider color="gray" thickness={1} /> {/* Horizontal line between items */}
//   <Text>Item 2</Text>
// </VStack>
// <HStack>
//   <Text>Left</Text>
//   <Divider orientation="vertical" color="black" thickness={2} /> {/* Vertical separator */}
//   <Text>Right</Text>
// </HStack>

interface DividerProps {
  orientation?: 'horizontal' | 'vertical'; // Direction of the line
  color?: string; // Line color
  thickness?: number; // Line thickness
}

const Divider: React.FC<DividerProps> = ({
                                           orientation = 'horizontal',
                                           color = 'gray',
                                           thickness = 1,
                                         }) => {
  const style: ViewStyle = {
    backgroundColor: color,
    ...(orientation === 'horizontal'
      ? { height: thickness, width: '100%' }
      : { width: thickness, height: '100%' }),
  };

  return <View style={style} />;
};

export default Divider;
