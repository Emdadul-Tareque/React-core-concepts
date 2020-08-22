import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {


  // const product= [
  //   {name: 'Photoshop', price: '$10.99'},
  //   {name: 'Zoom', price: '$9.99'},
  //   {name: 'skype', price: '$10.99'}
  // ]

  const person = [
    {name: 'Emdadul', age: '25'},
    {name: 'Hoque', age: '26'},
    {name: 'Tareque', age: '25'}
  ]
  return(
 
    <div className="App">
      <header className="App-header">

        <Counter></Counter>

        <Users></Users>
        <Todos></Todos>
        {
          person.map(person => <Person person = {person}></Person>)
        }

      
      </header>
    </div>
);

function Todos(){
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodos(data))
  }, [])

  return(
    <div>
      <ul>
        {
          todos.map(todo => <li>{todo.title}</li>)
        }
      </ul>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return(
    <div>
      <h1>Number of users:{users.length} </h1>
      <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount]   = useState(10);

  
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Person(props){
  const {name, age} = props.person;
  const personStyle = {
    backgroundColor: 'salmon',
    borderRadius: '5px',
    border: '2px solid black',
    height: '200px',
    width: '400px'
  }
  return(
    <div style = {personStyle}>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  )
}

  // function Product(props) {
  //   const productStyle={
  //     border:'2px solid gray',
  //     backgroundColor : 'gray',
  //     margin: '30px',
  //     height: '200px',
  //     width: '300px'
  //   }

  //   const {name, price} = props.product;
  //   return(
  //     <div style = {productStyle}>
  //       <h3>{name}</h3>
  //       <h2>{price}</h2>
  //       <button >buy now</button>
  //     </div> 
  //   )
  // }
}

export default App;
