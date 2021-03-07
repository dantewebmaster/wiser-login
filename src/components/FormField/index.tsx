import { useState, FunctionComponent, ChangeEvent } from 'react';
import { FieldContainer } from './styles';

interface FieldProps {
  type: string;
  label: string;
  inputValue: string;
  setValue: any;
  error?: string;
  placeholder?: string;
  id?: string;
}

const FormField: FunctionComponent<FieldProps> = ({
  type = 'text',
  label = '',
  error,
  placeholder,
  id,
  inputValue,
  setValue,
}) => {
  const [selfId] = useState(id ?? String(Math.random()));

  return (
    <FieldContainer>
      <label htmlFor={selfId}>{label}</label>
      <input
        id={selfId}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={({ target }: ChangeEvent<HTMLInputElement>): void =>
          setValue(target.value)
        }
      />
      {error && <span className="error-message">{error}</span>}
    </FieldContainer>
  );
};

export default FormField;
