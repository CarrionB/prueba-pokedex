import Layout from './Layout';

interface ContainerProps {
  cancelAdd: () => void;
  updateList: () => Promise<void>;
}

const Container = ({updateList, cancelAdd}:ContainerProps) => {
  const url = "https://pokemon-pichincha.herokuapp.com/pokemons/"
  
  const onSubmit = async (e: any, data: Pokemon) => {
    e.preventDefault()
    console.log("data to send: ", data)
    if(data.name === '' || data.image === "")
    {
      alert("No puede dejar campos vacios")
      return
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if(response.status === 200){
      await updateList()
      cancelAdd()
    }
  }
  return <Layout onPressSubmit={onSubmit} onCancel={cancelAdd}/>
}

export default Container;