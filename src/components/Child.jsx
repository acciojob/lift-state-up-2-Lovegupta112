import React from 'react';


const Child=({setValue})=>{

 return(
    <>
    <div style={{backgroundColor:'coral',padding:'1rem'}}>
        <h2>Child Component</h2>
        <input type="text" onChange={(e)=>setValue(e.target.value)}/>
    </div>
    </>
 )
}

export default Child;