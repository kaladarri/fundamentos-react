import React,{useState} from "react";

export default props => {
    const [numeros,setNumeros] = useState("");
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    function gerarNumeros(qtd){
        let arrNum = [];
        function testaNumero(numTeste){
            for(let x in arrNum){
                if(numTeste == arrNum[x]){
                    return false;
                }
            }
            return true;
        }
        function criaNumero(){
            let novoNum = randomIntFromInterval(1,60);
            console.log(novoNum);
            if(testaNumero(novoNum)){
                return novoNum;
            }else{
                return criaNumero();
            }
        }
        let numAtual = 1;
        while(numAtual <= qtd){
            arrNum.push(criaNumero());
            numAtual++;
        }
        return arrNum.toString();       
    }


    return(
        <div>
            <h1>Números Gerados</h1><br/>
            <span id="resultado">{numeros}</span><br/>
            <button onClick={e=>{
                setNumeros(gerarNumeros(10));
            }}>Gerar Númeoros</button>
            
        </div>
    )
}