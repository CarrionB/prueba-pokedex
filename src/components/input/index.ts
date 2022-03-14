import styled from 'styled-components'

export interface InputProps {
  size?: number;
  type?: string;
  placeholder?: string;
  noBorder?: boolean;
}

export const Input = styled.input.attrs(({type, size, placeholder}) => ({
  type: type || "text",
  size: size || "1em",
  placeholder: placeholder || "",
}))<InputProps>`
  border: ${({noBorder}) => noBorder ? 'none' : "2px solid #dbdfe2"};
  border-radius: 5px;
  margin: ${({margin}) => margin}px;
  padding: ${({padding}) => padding}px;
  &:focus {
    outline: none;
    border: ${({noBorder}) => noBorder ? 'none' : "2px solid #c17380"};
    box-shadow: 0px 0px 2px red;
  }
`;