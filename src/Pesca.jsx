import { useState } from 'react'
import './App.jsx';
import Dados from './Dados.jsx';

var totalDin = 0.00;
var valorPx = 50.00;
var totalPx = 0;
var qtdPx = 1;

/*function recDados(){
    return(        
            <div>
                {props.totalDin},
                {props.valorPx},
                {props.totalPx},
                {props.qtdPx};
            </div>        
    )
}*/

function Pescar(){
    var qtd = document.getElementById('qtdPesca');
    totalPx += qtdPx;
    qtd.textContent = totalPx;
}


export default Pescar