import React, { useEffect, useRef } from 'react'

function usePrevious(value) {
    // const { value } = props;
    const ref = useRef();

    useEffect(() => {

        ref.current = value;

    },[value])


  return ref.current
}

export default usePrevious