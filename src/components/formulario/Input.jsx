import React,{useState} from "react";

export default props => {
    const [valor,setValor] = useState("Inicial");
    return(
        <div>
            <input value={valor} 
                onChange={(e)=>{
                    setValor(e.target.value);
                }
            }/>
        </div>
    )
} 