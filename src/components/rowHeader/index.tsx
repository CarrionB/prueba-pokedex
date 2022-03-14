import { CellHeader } from "../cellHeader";
import { Div } from "../div";

export const RowHeader = () => 
  <Div padding={0} flexDirection={'row'}>
    <CellHeader>
      Nombre
    </CellHeader>
    <CellHeader>
      Imagen
    </CellHeader>
    <CellHeader>
      Ataque
    </CellHeader>
    <CellHeader>
      Defensa
    </CellHeader>
    <CellHeader>
      {"Acciones"}
    </CellHeader>
  </Div>