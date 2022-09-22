import Todo from './components/Todo';
//Esto es solo una funcion de React, esto se llam componente
function App() {
  return (<div> 
    <h1>My Todos</h1>
    <Todo text='Isa card'/>
    <Todo text='Cecy card'/>
    <Todo text='Vane card'/>
  </div>);
}
//here the attribute of html class is called className
export default App;
