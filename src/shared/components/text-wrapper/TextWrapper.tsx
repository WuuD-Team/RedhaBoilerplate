import * as React from 'react';

import fonts from '@fonts';
import RNText, {IRNTextProps} from '@freakycoder/react-native-custom-text';

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.Product.regular,
  color = '#757575',
  children,
  ...rest
}) => (
  <RNText fontFamily={fontFamily} color={color} {...rest}>
    {children}
  </RNText>
);

export default TextWrapper;
