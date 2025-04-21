import React, { useRef } from 'react'


function useDebounce(originalfn) {
  const currentClock = useRef();

  const fn = () =>{
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalfn, 300)
  }

  return fn
}

export default useDebounce
