import React from 'react'

export default function input({param,changeData,err}) {
    return (
        <div>
            <input 
                  
                    id={param.id} 
                    name={param.name} 
                    className= {err ? 'inp-error' : 'input-st' }
                    type={param.type} 
                    placeholder={param.place}
                    onChange = {(e) => changeData(e.target.name,e.target.value)}
                   
            />
        </div>
    )
}
