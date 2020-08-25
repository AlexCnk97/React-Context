import React, { useEffect } from 'react'

const ObjectSpreadOperator = (props) => {
    const obj = {
        a: 1,
        b: 2
    }

    const obj2 = {
        ...obj
    }


    useEffect(()=>{
        obj2['c'] = 3;
        console.log(obj2, obj)
      },[])

    const {change} = props;
    return (
        <div>
            <button onClick={()=>change("Otro texto")}>
                Click
            </button>
        </div>
    )
}

export default ObjectSpreadOperator;