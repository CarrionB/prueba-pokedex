import React from 'react'
import { Row } from '../row'
import { RowHeader } from '../rowHeader'

interface TableProps {
  pokemons: Array<Pokemon>
  setId: (id: number) => void
  deleteItem: (id: number) => Promise<void>
}

const Table = ({setId, deleteItem, pokemons}:TableProps) => 
  <div>
    <RowHeader/>
    {pokemons.map(pokemon => <Row key={pokemon.id} pokemon={pokemon} onEdit={setId} onDelete={deleteItem}/> )}
  </div>

export default Table