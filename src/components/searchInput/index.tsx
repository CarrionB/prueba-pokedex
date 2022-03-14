import React, { FormEvent } from 'react'
import { Div } from '../div';
import SearchIcon from '../icons/search'
import { Input, InputProps } from '../input';

interface SearchInputProp extends InputProps {
  onChange: ({ target }: FormEvent<HTMLInputElement>) => void
}


export const SearchInput = ({ placeholder, onChange }: SearchInputProp) => 
  <Div flexDirection={"row"} borderRadius={5}>
    <SearchIcon color={"#dbdfe2"}/>
    <Input placeholder={placeholder} noBorder={true} onChange={onChange}/>
  </Div>;

