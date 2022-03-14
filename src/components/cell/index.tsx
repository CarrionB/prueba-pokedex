import React from 'react'
import { Div } from '../div';

interface CellProps {
  children:any
}

export const Cell = ({children}:CellProps) => 
  <Div height={100} width={200} flexDirection={"row"} borderRight="none" borderRadius={0}>
    {children}
  </Div>;