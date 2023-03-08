import React from "react";
import Display from "./Display";

export default class Contador extends React.Component{

    state = {
        numero:this.props.numeroInicial
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                <button 
                    onClick={
                        this.inc
                    }
                >+</button>
                <Display numero={this.state.numero}/>
                
            </div>
        )
    }    
}