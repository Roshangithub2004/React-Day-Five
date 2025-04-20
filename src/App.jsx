import React, { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch';


const App = () => {  

 
    const [currPost, setcurrPost] = useState(1);
    const {finalData, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currPost, 10); 

    if(loading){
      return <div>
        Loading...
      </div>
    }

  return (
    <div>
      {/* <Counter/> */}
      <button onClick={() => setcurrPost(1)}>1</button>
      <button onClick={() => setcurrPost(2)}>2</button>
      <button onClick={() => setcurrPost(3)}>3</button>

      {JSON.stringify(finalData)}
    </div>
  )
}

// function useCounter(){
//   const [count, setCount] = useState(0);

//   function increaseCount(){
//     setCount(count +1);
//   }

//   return{
//     count: count,
//     increaseCount: increaseCount
//   }
  
// }

// function Counter(){
//   const {count, increaseCount} = useCounter();

//   return(
//     <div>
//       <button onClick={increaseCount}>Increase {count}</button>
//     </div>
//   )
// }

export default App
