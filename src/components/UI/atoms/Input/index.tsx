import React from 'react';
import { TextInput as DefaultTextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: #030303;
`;

const Input = React.forwardRef<DefaultTextInput, TextInputProps>(
  (props: TextInputProps, ref): React.ReactElement => {
    return <TextInput ref={ref} placeholderTextColor='#cccccc' {...props} />;
  }
);

export default Input;
