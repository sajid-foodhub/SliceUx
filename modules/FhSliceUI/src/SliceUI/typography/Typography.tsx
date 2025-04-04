import React, { useMemo } from 'react';

import { useSliceTheme } from '../contextProvider/context';
import { resolveVariant, scaleFont } from '../responsive/helper';
import { setTestId } from '../automation/helper';
import type { TypographyViewProps } from './Type';
import { StyleSheet, Text, type TextStyle } from 'react-native';
import { TYPOGRAPHY_STYLES } from './Token';

const Typography: React.FC<TypographyViewProps> = ({
  screenName = 'default',
  id = 'default',
  children,
  variant = 'display1Black',
  style,
  align = 'left',
  spacing = 0,
  ...extraProps
}) => {
  const { theme, deviceBreakpoint } = useSliceTheme();

  const { isDebugBuildType, automationBaseid } = theme;

  // Memoize typography styles to avoid unnecessary recalculations
  const textStyles = useMemo(() => {
    const breakPointVariant = resolveVariant(
      variant,
      deviceBreakpoint
    ) as keyof typeof TYPOGRAPHY_STYLES;
    const themeTextStyles = theme.typographyStyles?.[breakPointVariant];
    const textStyle = {
      fontFamily: themeTextStyles?.fontFamily,
      fontWeight: themeTextStyles?.fontWeight,
      fontSize: scaleFont(themeTextStyles?.fontSize),
      lineHeight: scaleFont(themeTextStyles?.lineHeight),
      textAlign: align,
      marginBottom: spacing,
    };
    return style ? StyleSheet.flatten([textStyle, style]) : textStyle;
  }, [
    variant,
    deviceBreakpoint,
    theme.typographyStyles,
    align,
    spacing,
    style,
  ]);

  const styles = useMemo(() => {
    return StyleSheet.create({
      typography: textStyles as TextStyle,
    });
  }, [textStyles]);

  return (
    <Text
      style={styles.typography}
      {...extraProps}
      {...(isDebugBuildType ? setTestId(automationBaseid, screenName, id) : {})}
    >
      {children}
    </Text>
  );
};

export default React.memo(Typography);
