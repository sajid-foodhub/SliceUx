import React from 'react';
import { View, ViewStyle } from 'react-native';

// Example Usage:
// <Box padding={10} bg="lightblue" margin={5}>
//   <Text>Content inside a styled box</Text> {/* Box with padding, margin, and background */}
// </Box>
// <VStack>
//   <Box flex={1} bg="gray">
//     <Text>Fills available space</Text>
//   </Box>
// </VStack>

interface BoxProps {
  padding?: number; // Padding inside the box
  margin?: number; // Margin outside the box
  bg?: string; // Background color
  flex?: number; // Flex value
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({
                                   padding = 0,
                                   margin = 0,
                                   bg,
                                   flex,
                                   children,
                                 }) => {
  const style: ViewStyle = {
    padding,
    margin,
    backgroundColor: bg,
    flex,
  };
  return <View style={style}>{children}</View>;
};

export default Box;
