import { FunctionComponent } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  type?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  type = 'button',
  children,
}) => <ButtonContainer type={type}>{children}</ButtonContainer>;

export default Button;
