import React from "react"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega"
import "./App.css"

export default () => (
    <div className="App">
        <div className="Cards">
            <Card titulo="Surpresinha">
                <Mega/>
            </Card>
            <Card titulo="Contador">
                <Contador numeroInicial={10}/>
            </Card>
            <Card titulo="Componente Controlado">
                <Input/>
            </Card>
            <Card titulo="Comunicação Indireta">
                <IndiretaPai/>
            </Card>
            <Card titulo="Comunicação Direta">
                <DiretaPai/>
            </Card>
            <Card titulo="Usuário Info">
                <UsuarioInfo usuario={{nome:'Fernando'}}></UsuarioInfo>
            </Card>
            <Card titulo="Par ou Ímpar">
                <ParOuImpar></ParOuImpar>
            </Card>
            <Card titulo="Produtos" color="#383">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="Familia" color="#303">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="Familia" color="#003">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="Aleatório" color="#090">
                <Aleatorio max={1000} min={0}></Aleatorio>
            </Card>
            <Card titulo="Fragmento">
                <Fragmento></Fragmento>
            </Card>
            <Card titulo="Segundo">
                <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!"></ComParametro>
            </Card>
            <Card titulo="Primeiro">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
    

)