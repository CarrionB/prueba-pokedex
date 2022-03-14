import Layout from './Layout';

interface ContainerProps {
  pokemon: Pokemon
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
  cancelEdit: () => void
  updateList: () => Promise<void>
}

const Container = ({pokemon, setPokemon, cancelEdit, updateList }: ContainerProps) => {
  
  const url = `https://pokemon-pichincha.herokuapp.com/pokemons/${pokemon.id}`
  
  const onSubmit = async (e: any, edittedData: Pokemon) => {
    e.preventDefault()
    console.log("data to send: ", edittedData)
    if(edittedData.name === '' || edittedData.image === '')
    {
      alert("No puede dejar campos vacios")
      return
    }
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(edittedData)
    });
    console.log("resp from adding pokeomn => ", response.status)
    if(response.status === 200){
      await updateList();
    }
  }
  return <Layout onCancelEdit={cancelEdit} pokemon={pokemon} setPokemon={setPokemon} onSubmit={onSubmit}/>
}

export default Container;