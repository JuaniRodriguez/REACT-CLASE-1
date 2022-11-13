//import { Welcome } from './components/Welcome.js';
import {Tarjeta,BlogPost} from "./tarea/Tarea1.js"
import {MatchNombre,PasswordInput, ValidationInput} from "./tarea/Tarea2.js"
import { CheckboxList, UncontrolledCheckbox } from "./tarea/Tarea3.js";
import { CheckboxListWithState, ControlledCheckbox } from "./tarea/Tarea4.js";

ReactDOM.render(
  <> 
    
    <BlogPost 
        titulo="Ardillas" 
        parrafos={`Hoy vi una ardilla.\nLa ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.\nCreo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
        autor={ {nombre:"Juan Rodriguez", img:"https://ebac.mx/images/tild3131-3830-4134-b439-336463396166__photo_copy_1.jpg", titulo:"Desarrollador Front End"}}
     />
     <hr/>
     <MatchNombre nombre="juan"/>
     <br/>
     <br/>
     <PasswordInput minLength="8"/>
     <br/>
     <br/>
     <ValidationInput isPassword="password" validation={(event,value)=>((event.target.value.length>=8 && !event.target.value.match(" ")) ? true : false)} />
     <hr/>
     <UncontrolledCheckbox initialValue={false} name="Uncontrolled Checkbox"/>
     <br/>
     <CheckboxList items={{uno:false,dos:true,tres:false}}/>
     <hr/>
     <ControlledCheckbox name="Controlled Checkbox" value={true} onChange/>
     <CheckboxListWithState items={{uno:false,dos:true,tres:false}}/>
  </>



, document.getElementById('react-app'));

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));
