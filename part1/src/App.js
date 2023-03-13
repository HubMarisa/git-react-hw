///////////////// HW 1 /////////////////
///////////////////1///////////////////
// const Header = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }
// const Content = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>{props.part}{props.excercises}</p>
//     </div>
//   )
// }
// const Total = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>Number of excercises {props.number}</p>
//     </div>
//   )
// }
//  const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const excercises1 = 10
//   const part2 = 'Using props to pass data'
//   const excercises2 = 7
//   const part3 = 'State of a component'
//   const excercises3 = 14
//     return (
//      <div>
//         <Header course={course} />
//         <Content part={part1} excercises={excercises1} />
//         <Content part={part2} excercises={excercises2} />
//         <Content part={part3} excercises={excercises3} />
//         <Total number={excercises1 + excercises2 + excercises3} />
//      </div>
//     )
//   }
//   export default App;
///////////part 2/////////////////
// const Header = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }
// const Content = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>{props.part1}{props.excercises1}</p>
//       <p>{props.part2}{props.excercises2}</p>
//       <p>{props.part3}{props.excercises3}</p>
//     </div>
//   )
// }
// const Total = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>Number of excercises {props.number}</p>
//     </div>
//   )
// }
//  const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const excercises1 = 10
//   const part2 = 'Using props to pass data'
//   const excercises2 = 7
//   const part3 = 'State of a component'
//   const excercises3 = 14
//     return (
//      <div>
//         <Header course={course} />
//         <Content part1={part1} excercises1={excercises1} />
//         <Content part2={part2} excercises2={excercises2} />
//         <Content part3={part3} excercises3={excercises3} />
//         <Total number={excercises1 + excercises2 + excercises3} />
//      </div>
//     )
//   }
  //export default App;


/////////////////lesson 2///////////////////
//const App = () => {
 //Hello 
// const App = (props) => {

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>

//       <p>So you were probably born in {bornYear()}</p>
//     </div>  
//     )
// }

// export default App;

// const App = () => {
// const Hello = ({name, age}) => {

//   //const name = props.name
//   //const age = props.age
//   //const name = 'Joan'
//   //const age = '35'

//   const bornYear = () => new Date().getFullYear() - age

// const name = 'Joan'
// const age = '35'
//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>

//       <p>So you were probably born in {bornYear()}</p>
//     </div>  
//     )

// }
// }
// export default App;
//export default Hello;


/////////////////////l3////////////////////

// const App = (props) => {
//   const {counter} = props
//   //console.log(counter);
//   return (
//     <div>{counter}</div>
//   )
// }

// export default App

//////////////////// setTimeout start/////////////////

// import { useState } from "react"

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   setTimeout(
//     () => setCounter(counter + 1),
//   1000
//   )
  
//   console.log('rendering...', counter)
  
//   return (
//     <div>{counter}</div>
//   )
// }

//export default App

//////////////////// setTimeout  end/////////////////

/////////////////// Event Handling start //////////////////

/* <button onClick={() => setCounter(counter + 1)}>
  plus
</button> */

// import { useState } from "react"

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
  
//   const setToZero = () => setCounter(0)

//   return (
//     <div>

//       <div>
//         {counter}
//       </div>

//       <button onClick={increaseByOne}>
//         plus
//       </button>
      
//       <button
//         onClick={setToZero}>
//         zero
//       </button>


      
//     </div>
//   )
//   }

//   export default App
/////////////////// Event Handling end //////////////////

////////////////// Передача состояния дочерним компонентам // start //////////// 

// import { useState } from "react"

// const App = () => {

// //////////////////////////////////
// const Display = (props) => {
//   return (
//     <div>
//       {props.counter}
//     </div>
//   )
// }

// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>
//     {props.text}
//     </button>
//   )
// }
// //////////////////////////////////

//   const [counter, setCounter] = useState(0)

//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
  
//   const setToZero = () => setCounter(0)

//   return (
//     <div>

//       <Display counter = {counter} />

//       <Button handleClick={increaseByOne} 

//       text='plus' />

//       <Button handleClick={setToZero} 

//       text='zero' />
     
//      <Button handleClick={decreaseByOne} 

//      text='minus' />
      

      
//     </div>
//   )
//   }

//   export default App


////////////////// Передача состояния дочерним компонентам // end //////////// 

////////////////// rerendering //////////////////////


////////////////// реструктуризация ////////////////

////////////////// + HW 2 /////////////////////////

import { useState } from "react"

const App = () => {

//////////////////////////////////
const Display = ({counter}) => <div>{counter}</div>

/// рефакторизированный компонент //////////
const Button = ({ handleClick,text }) => <button onClick={handleClick}>{text}</button>



const [counter, setCounter] = useState(0)

console.log('rendering with counter value', counter)

const increaseByOne = () => setCounter(counter + 1)
const decreaseByOne = () => setCounter(counter - 1)

const setToZero = () => setCounter(0)

return (
  <div>

    <Display counter = {counter} />

    <Button handleClick={increaseByOne} 

    text='plus' />

    <Button handleClick={setToZero} 

    text='zero' />
   
   <Button handleClick={decreaseByOne} 

   text='minus' />
    

    
  </div>
)
}

export default App