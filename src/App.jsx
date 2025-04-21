import React, { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch';
import usePrev from './hooks/usePrev';
import useDebounce from './hooks/useDebounce';


const App = () => {  

      {/*a. useFetch */}
 
    // const [currPost, setcurrPost] = useState(1);
    // const {finalData, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currPost, 10); 

    {/* b. useFetch with re-fetching */}

    // if(loading){
    //   return <div>
    //     Loading...
    //   </div>
    // }

      {/*c. usePrev */}

    // const [count, setCount] = useState(0);
    // const prev = usePrev(count);


    {/*d. useDebounce */}

    function sendDataToBackend(){
      fetch("api.amazon.com/search/");  
    }

    const debounced = useDebounce(sendDataToBackend);
  

  return (
    <div>
      {/*a. useFetch */}
      {/* <Counter/> */}

      {/* b. useFetch with re-fetching */}
      {/* <button onClick={() => setcurrPost(1)}>1</button>
      <button onClick={() => setcurrPost(2)}>2</button>
      <button onClick={() => setcurrPost(3)}>3</button>
      {JSON.stringify(finalData)} */}

      {/*c. usePrev */}

      {/* <button onClick={(() =>{
          setCount(count => count+1);
      })}
      >Clock Me {count}</button>

      <div>Privious value is {prev}</div> */}
      

        {/*d. useDebounce */}
      <input type="text" onChange={debounced}></input>

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
