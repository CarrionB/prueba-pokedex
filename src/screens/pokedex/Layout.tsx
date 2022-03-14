import { FormEvent, useEffect, useState } from "react"
import Table from "../../components/table"
import EditPokemonForm from '../../forms/editPokemon'
import AddPokemonForm from '../../forms/addPokemon'
import { SearchInput } from "../../components/searchInput"
import { Div } from "../../components/div"
import PlusIcon from '../../components/icons/plus'


interface LayoutProps {
  pokemons: Array<Pokemon>
  updateListByName: (name: string) => Promise<void>
  updateList: () => Promise<void>
  deleteItem: (id: number) => Promise<void>
}

const Layout = ({pokemons, updateListByName, updateList, deleteItem}:LayoutProps) => {
  const InitialPokemon = {
    id: 0,
    name: "",
    image: "",
    type: "fire",
    hp: 50,
    attack: 50,
    defense: 50,
    idAuthor: 7,
  }
  const [editFormVisible, setEditFormVisible] = useState(false)
  const [addFormVisible, setAddFormVisible] = useState(false)
  const [pokemon, setPokemon] = useState(InitialPokemon)
  const [pokemonSelected, setPokemonSelected] = useState(0)

  useEffect(() => {
    const pokemonFilter = pokemons.filter(pokemon => pokemon.id === pokemonSelected)
    if(pokemonFilter.length > 0){
      const pokemonAux = Object.assign(pokemonFilter[0])
      setPokemon(pokemonAux)
      setEditFormVisible(true)
    }
  }, [pokemonSelected, pokemons]);

  const showEdit = (id:number) =>{
    setPokemonSelected(id)
  }

  const cancelEdit = () =>{
    setEditFormVisible(false)
    setPokemonSelected(0)
  }

  const cancelAdd = () =>{
    setAddFormVisible(false)
  }

  const handleInputChange = async ({target}:FormEvent<HTMLInputElement>) => {
    const targetAux = target as HTMLInputElement
    await updateListByName(targetAux.value)
  }

  return (
    <div>
      <Div fontweight="bold" border="none">
        Listado de pokemons
      </Div>
      <Div flexDirection="row">
        <SearchInput placeholder='Buscar' onChange={handleInputChange}/>
        <button onClick={()=>setAddFormVisible(!addFormVisible)}>
          <PlusIcon/> Nuevo
        </button>
      </Div>
      <Table pokemons={pokemons} setId={showEdit} deleteItem={deleteItem}/>
      {
        editFormVisible && 
        <EditPokemonForm 
          pokemon={pokemon}
          setPokemon={setPokemon}
          cancelEdit={cancelEdit}
          updateList={updateList}
        />
      }
      {addFormVisible && <AddPokemonForm updateList={updateList} cancelAdd={cancelAdd}/>}
    </div>)
}

export default Layout