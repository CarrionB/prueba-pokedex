import styled from 'styled-components'

interface DivProps {
  fontWeight?: 'bold' | 'normal'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  padding?: number
  border?: string
  borderLeft?: string
  borderRight?: string
  borderRadius?: number
  height?: number
  width?: number
  overflowY: 'visible' | 'scroll' | 'hidden' | 'none'
}

export const Div = styled.div.attrs(()=>{})<DivProps>`
  display: flex;
  flex-direction: ${({flexDirection})=>flexDirection?flexDirection:'column'};
  align-items: center;
  justify-content: space-evenly;
  text-align: left;
  font-size: medium;
  font-weight: ${({fontweight})=>fontweight?fontweight:'normal'};
  background-color: white;
  height: ${({height})=>height}px;
  width: ${({width})=>width}px;
  border: ${({border})=>border?'none':'2px solid #dbdfe2'};
  border-left: ${({borderLeft})=>borderLeft};
  border-right: ${({borderRight})=>borderRight};
  border-radius: ${({borderRadius})=>borderRadius}px;
  padding: ${({padding})=>padding===0?'0px':'8px'};
  color: black;
  overflow-y: auto;
`