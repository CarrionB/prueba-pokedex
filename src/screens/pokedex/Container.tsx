import { useEffect, useState } from 'react';
import Layout from './Layout';

const Container = () => {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([])
  const url = "https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=7"
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemons(pokemon)
      });
  }, []);

  const updateListByName = async (name:string) => {
    const resp = await fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/?name=${name}`)
    const data = await resp.json();
    setPokemons(data)
  }

  const updateList = async () => {
    const resp = await fetch(url)
    const data = await resp.json();
    setPokemons(data)
  }

  const deleteItem = async (id:number) => {
    const resp = await fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/${id}`, 
      { method: 'DELETE' }
    )
    if(resp.status === 200){
      await updateList()
    }
  }

  return <Layout 
    pokemons={pokemons}
    updateListByName={updateListByName}
    deleteItem={deleteItem}
    updateList={updateList}
  />
}

export default Container;