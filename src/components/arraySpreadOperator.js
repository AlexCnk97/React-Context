import React, { useEffect } from 'react'

const ArraySpreadOperator = () => {
    const arr = [1, 2];

    const suma = (a, b) => a + b;

    const result = suma(...arr);

    useEffect(()=>{
        const arr1 = [...arr];
        arr.push(3)
        console.log(arr1, arr)
      },[])
    return (
        <div>

        </div>
    )
}

export default ArraySpreadOperator;