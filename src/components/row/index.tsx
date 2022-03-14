import { Cell } from "../cell";
import { Div } from "../div";
import EditIcon from '../icons/edit'
import DeleteIcon from '../icons/delete'

interface RowProps {
  pokemon: Pokemon
  onEdit: (id: number) => void
  onDelete: (id: number) => Promise<void>
}

export const Row = ({onEdit: setId, onDelete: deleteItem, pokemon}: RowProps) => 
  <Div padding={0} flexDirection={'row'}>
    <Cell>
      {pokemon.name}
    </Cell>
    <Cell>
      <img src={pokemon.image} alt={`${pokemon.name}`} style={{width:"100px",height:"100px"}}/>
    </Cell>
    <Cell>
      {pokemon.attack}
    </Cell>
    <Cell>
      {pokemon.defense}
    </Cell>
    <Cell>
      <EditIcon width={20} height={20} color={"#6657f5"} onClick={()=>setId(pokemon.id)}/>
      <DeleteIcon width={16} height={20} color={"#6657f5"} onClick={()=>deleteItem(pokemon.id)}/>
    </Cell>
  </Div>