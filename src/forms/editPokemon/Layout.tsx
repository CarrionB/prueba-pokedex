import React, { FormEvent } from "react"
import { Div } from "../../components/div";
import { Input } from "../../components/input"
import { Slider } from "../../components/slider"
import CancelIcon from '../../components/icons/cancel'
import SaveIcon from '../../components/icons/save'


interface LayoutProps {
  pokemon: Pokemon
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
  onCancelEdit: () => void
  onSubmit: (e: any, pokemon: Pokemon) => void;
}

const Layout = ({pokemon, setPokemon, onSubmit, onCancelEdit}:LayoutProps) => {
  
  const {name, image, attack, defense} = pokemon

  const handleInputChange = ({target}:FormEvent<HTMLInputElement>) => {
    const targetAux = target as HTMLInputElement
    if(targetAux.name === "defense" || targetAux.name === "attack"){
      setPokemon(state => ({
        ...state,
        [targetAux.name]:parseInt(targetAux.value)
      }))
    }
    else {
      setPokemon(state => ({
        ...state,
        [targetAux.name]:targetAux.value
      }))
    }
  }

  return (
    <form onSubmit={(e)=>onSubmit(e,pokemon)}>
      <Div>
        <Div border="none">
          Editar pokemon
        </Div>
        <Div border="none" flexDirection="row">
          <Div border="none">
            <Div border="none" flexDirection="row">
              <Div border="none" width={100}>
                Nombre:
              </Div>
              <Input 
                size={40} 
                padding={8} 
                margin={25} 
                value={name} 
                name="name" 
                onChange={handleInputChange} 
              />
            </Div>
            <Div border="none" flexDirection="row">
            <Div border="none" width={100}>
              Imagen:
            </Div>
            <Input 
              size={40} 
              padding={8} 
              margin={25} 
              value={image} 
              name="image" 
              onChange={handleInputChange} 
            />
            </Div>
          </Div>
          <Div border="none" height={210} >
            <Div border="none" flexDirection="row">
              <Div border="none" width={100}>
                Ataque:
              </Div>
              <Div border="none" width={20}>
                0
              </Div>
              <Slider value={attack} name="attack" onChange={handleInputChange} />
              <Div border="none" width={30}>
                100
              </Div>
            </Div>
            <Div border="none" flexDirection="row">
              <Div border="none" width={100}>
                Defensa:
              </Div>
              <Div border="none" width={20}>
                0
              </Div>
              <Slider value={defense} name="defense" onChange={handleInputChange} />
              <Div border="none" width={30}>
                100
              </Div>
            </Div>
          </Div>
        </Div>
        <Div flexDirection="row" border="none">
          <button
            type='submit'
          >
            <SaveIcon/> Guardar
          </button>
          <button
            onClick={onCancelEdit}
          >
            <CancelIcon/> Cancelar
          </button>
        </Div>
      </Div>
    </form>)
}

export default Layout