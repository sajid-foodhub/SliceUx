import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { Dimensions } from 'react-native';
import { type SliceTheme } from '../theme/theme';
import { getDeviceBreakpoint, type Breakpoints } from '../responsive/helper';

// Extend context type to include breakpoint
interface ThemeContextType {
  theme: SliceTheme;
  deviceBreakpoint: keyof typeof Breakpoints;
}

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props for provider
interface SliceThemeProviderProps {
  children: ReactNode;
  theme: SliceTheme;
}

// Provider with breakpoint logic inside
export const SliceThemeProvider: React.FC<SliceThemeProviderProps> = ({
  children,
  theme,
}) => {
  const [deviceBreakpoint, setDeviceBreakpoint] = useState<
    keyof typeof Breakpoints
  >(getDeviceBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setDeviceBreakpoint(getDeviceBreakpoint());
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      if (subscription?.remove) subscription.remove();
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, deviceBreakpoint }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to access theme and breakpoint
export const useSliceTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useSliceTheme must be used within a SliceThemeProvider');
  }
  return context;
};
