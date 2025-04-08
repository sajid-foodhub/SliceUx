import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

// Example Usage:
// <StickyHeader
//   bg="#f0f0f0"
//   position="top" {/* Default top positioning */}
//   offset={10} {/* Adds 10 units from the top */}
//   shadow={true} {/* Adds a subtle shadow */}
//   opacity={0.9} {/* Slightly transparent */}
//   style={{ borderBottomWidth: 1, borderColor: 'gray' }} {/* Custom styles */}
// >
//   <HStack gap={10} style={{ padding: 10 }}>
//     <Text style={{ fontSize: 20 }}>John Doe</Text>
//     <Spacer flex={1} />
//     <Text>Settings</Text>
//   </HStack>
// </StickyHeader>
// <StickyHeader
//   bg="white"
//   position="bottom" {/* Sticks to bottom */}
//   shadow={false}
//   zIndex={5}
// >
//   <HStack gap={5} style={{ padding: 5 }}>
//     <Text>Footer Item</Text>
//   </HStack>
// </StickyHeader>

interface StickyHeaderProps {
  bg?: string; // Background color of the header
  position?: 'top' | 'bottom'; // Where the header sticks (top or bottom)
  offset?: number; // Distance from the edge (top or bottom)
  shadow?: boolean; // Toggle shadow effect
  opacity?: number; // Transparency level (0 to 1)
  zIndex?: number; // Stacking order
  style?: StyleProp<ViewStyle>; // Additional custom styles
  children: React.ReactNode; // Content inside the header
}

const StickyHeader: React.FC<StickyHeaderProps> = ({
                                                     bg = '#f0f0f0',
                                                     position = 'top',
                                                     offset = 0,
                                                     shadow = false,
                                                     opacity = 1,
                                                     zIndex = 10,
                                                     style,
                                                     children,
                                                   }) => {
  const baseStyle: ViewStyle = {
    position: 'absolute',
    [position]: offset, // Dynamically set top or bottom based on position prop
    left: 0,
    right: 0,
    backgroundColor: bg,
    opacity,
    zIndex,
    ...(shadow && {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5, // For Android shadow
    }),
  };

  return <View style={[baseStyle, style]}>{children}</View>;
};

export default StickyHeader;
