import React from 'react'

function RandomFunction({number}) {

    const setNumber=(e)=>{
      console.log(e.target.value)
     number= e.target.value
    }
  return (
     <div></div>
      
  )
}

export default RandomFunction