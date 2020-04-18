import React from 'react';
import './App.css';
import Test from './Component/Test';
import GridComp from './Component/GridComp';
import Dropbox from './Component/Dropbox';

import Alert from './Component/Alert'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      p1Symbol: '',
      p2Symbol: '',
      gridActive: false,
      alert : false,
      isStart : false,
      p1Count : 0,
      p2Count : 0,
      endGame : false
    }
  }


  getSymbol = (symbol, playerId) => {
    console.log(symbol, playerId)
    if (playerId === '1') {//console.log(symbol)
      this.setState({ p1Symbol: symbol })
    }
    else { this.setState({ p2Symbol: symbol }) }
    console.log(this.state.p1Symbol, "         ", this.state.p2Symbol)
    if(this.state.isStart)
    {
      this.start()
    }
    else
    {
      this.state.isStart = true;
    }
  }

  start = () => {
    setTimeout(() => {
      console.log(this.state.p1Symbol, "    start     ", this.state.p2Symbol)
      
      if (this.state.p1Symbol !== this.state.p2Symbol) {
        this.setState({ gridActive: true })
        this.setState({ alert: false })
        
  
      }
      else
     {
       this.setState({ alert: true })
       
     }
     
    }, 100);

  }

  incCount = (pNo) =>
  {
   if(pNo==='Player 1 Wins')
   this.setState({p1Count : this.state.p1Count+1})
   else if(pNo==='Player 2 Wins')
   this.setState({p2Count : this.state.p2Count+1})
   else
   {
    this.setState({p2Count : this.state.p2Count+1})
    this.setState({p1Count : this.state.p1Count+1}) 
   }

  }

  gridFalse=()=>{
    this.setState({gridActive:false})
    this.setState({ isStart: false })
    this.setState({ p1Count: 0 })
    this.setState({ p2Count: 0 })
    this.setState({ endGame: true })
  }

  render() {
    const {p1Count,endGame,p2Count, alert,p1Symbol,p2Symbol,gridActive } = this.state
  
      return (
        < >
         {alert && <Alert /> }

          <div style={{width:"100%",height:"50px",textAlign:"center",alignSelf:'center',alignContent:'center'}} >
        
            <h1 style={{textAlign:"center",alignSelf:'center'}}>Tic Tac Toe</h1>
         
          </div>
           
          <div id="players">
            <Dropbox playerNo={'1'} getSymbol={this.getSymbol.bind(this)} endGame={endGame} gridActive = {gridActive} pSymbol = {p1Symbol} winScore={p1Count}/>
            <div id='gridDiv'>
              <GridComp gridActive={gridActive} gridFalse={this.gridFalse.bind(this)}  p1Symbol={p1Symbol} p2Symbol={p2Symbol} incCount = {this.incCount.bind(this)}/>
            </div>
            <Dropbox playerNo={'2'}  getSymbol={this.getSymbol.bind(this)} endGame={endGame} gridActive = {gridActive} pSymbol = {p2Symbol} winScore={p2Count}/>
          </div>
        
        </>
      );
   
  }

}

export default App;