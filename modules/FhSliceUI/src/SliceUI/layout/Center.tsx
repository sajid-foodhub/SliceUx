import React from 'react';
import { View, ViewStyle } from 'react-native';

// Example Usage:
// <Box bg="lightgray" padding={20}>
//   <Center> {/* Centers text both horizontally and vertically */}
//     <Text>Centered Text</Text>
//   </Center>
// </Box>
// <HStack>
//   <Text>Left</Text>
//   <Center horizontal={true} vertical={false}> {/* Centers horizontally only */}
//     <Text>Middle</Text>
//   </Center>
//   <Text>Right</Text>
// </HStack>

interface CenterProps {
  horizontal?: boolean; // Center horizontally
  vertical?: boolean; // Center vertically
  children: React.ReactNode;
}

const Center: React.FC<CenterProps> = ({
                                         horizontal = true,
                                         vertical = true,
                                         children,
                                       }) => {
  const style: ViewStyle = {
    ...(horizontal ? { alignItems: 'center' } : {}),
    ...(vertical ? { justifyContent: 'center' } : {}),
    flex: 1, // Ensures it takes available space
  };

  return <View style={style}>{children}</View>;
};

export default Center;
