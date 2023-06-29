import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='tela'>
      <header>SUSHI MANIA</header>
      <div className='menubar'>
        <p>MENU</p>
        <p>COMPRAR</p>
        <p>ATUALIZAÇÕES</p>
        <span></span>
        <p>OPÇÕES</p>
      </div>
      <main>
        <div className='itens'>
          <h1>PESCAR PEIXE</h1>
          <span>
            <h2>CLIQUE</h2>
            <div className='iconItem' onClick={Pescar}></div>
            <p id='qtdPesca'>0</p>
            <p className='peixes'>PEIXES</p>
          </span>
          <div className='botoesIdle'>
            <button onClick={UpgradePx}>UPGRADE <p id='valUpPx'>1.000</p></button>
            <div></div>
            <button onClick={VenderPx}>VENDER <p id='valVenPx'>00</p></button>
          </div>
        </div>

        <div className='itens'>
          <h1>CORTAR PEIXE</h1>
          <span>
            <div className='iconItem'>a</div>
            <p>QUANTIDADE</p>
          </span>
          <p>aaaaaaaaaaaaa</p>
          <button>ATUALIZAR</button>
        </div>

        <div className='itens'>
          <h1>CORTAR PEIXE</h1>
          <span>
            <div className='iconItem'>a</div>
            <p>QUANTIDADE</p>
          </span>
          <p>aaaaaaaaaaaaa</p>
          <button>ATUALIZAR</button>
        </div>

        <div className='itens'>
          <h1>CORTAR PEIXE</h1>
          <span>
            <div className='iconItem'>a</div>
            <p>QUANTIDADE</p>
          </span>
          <p>aaaaaaaaaaaaa</p>
          <button>ATUALIZAR</button>
        </div>

        <div className='itens' id='ulI'>
          <h1>DINHEIRO</h1>
          <h2 id='atualDin'>0,00</h2>
          <div></div>
        </div>
      </main>
      <footer>DESENVOLVIDO POR <a href="#">Werickson de Souza Dauta</a></footer>
    </div>
  )
}

var totalDin = 0.00;
var valorPx = 12.00;
var totalPx = 0;
var upPxVal = 1000;
var qtdPx = 1;
var qtdPxTela= document.getElementById('qtdPesca');
var dinTela = document.getElementById('atualDin');
var totalVenPx = document.getElementById('valVenPx');
var totalValUp = document.getElementById('valUpPx');

function Pescar(){    
    totalPx += qtdPx;
    qtdPxTela.textContent = totalPx;    
    totalVenPx.textContent = valorPx * totalPx;
}

function UpgradePx(){
  if(totalDin >= upPxVal){
    qtdPx += 1;
    totalDin -= upPxVal;
    dinTela.textContent = totalDin;
    upPxVal = upPxVal * 2.5;        
    totalValUp.textContent = upPxVal;
  } else {
    return;
  }
}

/*function IconUnlock(){
  var btnUp = document.getElementsByClassName('iconItem');
  btnUp.set
}*/

function VenderPx(){
  totalDin += valorPx * totalPx;
  dinTela.textContent = totalDin;
  totalPx = 0;  
  qtdPxTela.textContent = totalPx;    
  totalVenPx.textContent = valorPx * totalPx;
}

export default App
