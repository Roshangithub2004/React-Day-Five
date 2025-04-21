import React, { useEffect, useRef } from 'react'

const usePrev = (value) => {
    const ref = useRef();

    useEffect(() =>{
        ref.current = value
    }, [value])
  return  (<div>
    {ref.current}
  </div> )
}

export default usePrev
