import React from 'react'
import { Div } from '../div';

interface CellProps {
  children:any
}

export const CellHeader = ({children}:CellProps) => 
  <Div 
    height={50} 
    width={200} 
    flexDirection={"row"} 
    borderRight="none" 
    borderRadius={0} 
    fontweight="bold">
    {children}
  </Div>;