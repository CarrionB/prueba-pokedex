import styled from 'styled-components'

interface SliderProps {
  value: number;
  color?: string;
}

export const Slider = styled.input.attrs({ type: 'range' })<SliderProps>`
  outline: 0;
  height: 8px;
  width: 220px;
  border-radius: 40px;
  background: ${({value}) =>
    `linear-gradient(to right, #6657f5 0%, #6657f5 ${value}%, #dbdfe2 ${value}%, #dbdfe2 100%);`};

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background-color: #6657f5;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;
