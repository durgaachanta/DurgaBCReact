import React, { Component } from 'react';
import Reset from './reset';
import Cell from './cell';
import './App.css';
import './tic.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCellArray: [null,null,null,null,null,null,null,null,null],
      clickCounter: 0,
      CurrentPlayer: '',
      CurrentPosition: '',
      winner: '',
      disabled: [false,false,false,false,false,false,false,false,false],
    };
    this.calculateWinner = this.calculateWinner.bind(this);
    this.fillcell = this.fillcell.bind(this);
    this.resetPlay = this.resetPlay.bind(this);

  };

  resetPlay() {
    let resetArray = [null,null,null,null,null,null,null,null,null];
    let resetGame = [false, false, false, false, false, false, false, false, false]
    this.setState({clickCounter: 0, winner: '',CurrentPlayer: '', CurrentPosition: '', playerCellArray: resetArray, disabled: resetGame})
  }

  calculateWinner() {

    let winnerArray = this.state.playerCellArray.slice();
    if(
        (winnerArray[0] === this.state.CurrentPlayer && winnerArray[1] === this.state.CurrentPlayer && winnerArray[2] === this.state.CurrentPlayer) ||
        (winnerArray[3] === this.state.CurrentPlayer && winnerArray[4] === this.state.CurrentPlayer && winnerArray[5] === this.state.CurrentPlayer) ||
        (winnerArray[6] === this.state.CurrentPlayer && winnerArray[7] === this.state.CurrentPlayer && winnerArray[8] === this.state.CurrentPlayer) ||
        (winnerArray[0] === this.state.CurrentPlayer && winnerArray[3] === this.state.CurrentPlayer && winnerArray[6] === this.state.CurrentPlayer) ||
        (winnerArray[1] === this.state.CurrentPlayer && winnerArray[4] === this.state.CurrentPlayer && winnerArray[7] === this.state.CurrentPlayer) ||
        (winnerArray[2] === this.state.CurrentPlayer && winnerArray[5] === this.state.CurrentPlayer && winnerArray[8] === this.state.CurrentPlayer) ||
        (winnerArray[0] === this.state.CurrentPlayer && winnerArray[4] === this.state.CurrentPlayer && winnerArray[8] === this.state.CurrentPlayer) ||
        (winnerArray[2] === this.state.CurrentPlayer && winnerArray[4] === this.state.CurrentPlayer && winnerArray[6] === this.state.CurrentPlayer) ) {
          let stopGame = [true, true, true, true, true, true, true, true, true]

          this.setState({winner: this.state.CurrentPlayer, disabled: stopGame});

    }

    {/* -When I tried to use the below logic winner did not get updated--Why do I have to create a slice of it -
    if(
        (this.state.playerCellArray[0] === this.state.playerCellArray[1] === this.state.playerCellArray[2] === this.state.CurrentPlayer) ||
        (this.state.playerCellArray[3] === this.state.playerCellArray[4] === this.state.playerCellArray[5] === this.state.CurrentPlayer) ||
        (this.state.playerCellArray[6] === this.state.playerCellArray[7] === this.state.playerCellArray[8] === this.state.CurrentPlayer) ||
        (this.state.playerCellArray[0] === this.state.playerCellArray[3] === this.state.playerCellArray[6] === this.state.CurrentPlayer) ||
        (this.state.playerCellArray[1] === this.state.playerCellArray[4] === this.state.playerCellArray[7] === this.state.CurrentPlayer) ||
        (this.state.playerCellArray[2] === this.state.playerCellArray[5] === this.state.playerCellArray[8] === this.state.CurrentPlayer) ||
        (this.state.playerCellArray[0] === this.state.playerCellArray[4] === this.state.playerCellArray[8] === this.state.CurrentPlayer) ||
        (this.state.playerCellArray[2] === this.state.playerCellArray[4] === this.state.playerCellArray[6] === this.state.CurrentPlayer) ) {
          console.log("some one can be a winner");
          this.setState({winner: this.state.CurrentPlayer});

    } */}
  }


  fillcell(e) {
    //any kind of direct mathematical operations on a state object is not allowed
    //State object can only be assigned a new value. I can only add/subtract from a state object
    //by passing in the prevState as a parameter to the fuction which updates the state in setState
    this.setState((prevState) =>({
      clickCounter: prevState.clickCounter + 1
    }));
    if(this.state.clickCounter % 2) {
      this.setState({ CurrentPlayer: 'Y', CurrentPosition: e.target.value}, () =>{
        let cellArray = this.state.playerCellArray.slice();
        cellArray[this.state.CurrentPosition] = this.state.CurrentPlayer;
        let cellDisable = this.state.disabled.slice();
        cellDisable[this.state.CurrentPosition] = true;
        this.setState({playerCellArray: cellArray, disabled: cellDisable}, () => {
          this.calculateWinner();
        });
      });
    }
    else {
      this.setState({ CurrentPlayer: 'X', CurrentPosition: e.target.value}, ()=>{
        let cellArray = this.state.playerCellArray.slice();
        cellArray[this.state.CurrentPosition] = this.state.CurrentPlayer;
        let cellDisable = this.state.disabled.slice();
        cellDisable[this.state.CurrentPosition] = true;
        this.setState({playerCellArray: cellArray, disabled: cellDisable}, () => {
          this.calculateWinner();
        });
      });

    }
  }



  render() {
    return (
      <div className="App">
        <p className="center">
          <p> Tic-Tac-Toe </p>
          <p> Player 1: X </p>
          <p> Player 2: Y </p>
          <div className="cellrow">
            <Cell id="0" playerCellData={this.state.playerCellArray[0]} fillcell={this.fillcell} disabled={this.state.disabled[0]}/>
            <Cell id="1" playerCellData={this.state.playerCellArray[1]} fillcell={this.fillcell} disabled={this.state.disabled[1]}/>
            <Cell id="2" playerCellData={this.state.playerCellArray[2]} fillcell={this.fillcell} disabled={this.state.disabled[2]}/>
          </div>
          <div className="cellrow">
            <Cell id="3" playerCellData={this.state.playerCellArray[3]} fillcell={this.fillcell} disabled={this.state.disabled[3]}/>
            <Cell id="4" playerCellData={this.state.playerCellArray[4]} fillcell={this.fillcell} disabled={this.state.disabled[4]}/>
            <Cell id="5" playerCellData={this.state.playerCellArray[5]} fillcell={this.fillcell} disabled={this.state.disabled[5]}/>
          </div>
          <div className="cellrow">
            <Cell id="6" playerCellData={this.state.playerCellArray[6]} fillcell={this.fillcell} disabled={this.state.disabled[6]}/>
            <Cell id="7" playerCellData={this.state.playerCellArray[7]} fillcell={this.fillcell} disabled={this.state.disabled[7]}/>
            <Cell id="8" playerCellData={this.state.playerCellArray[8]} fillcell={this.fillcell} disabled={this.state.disabled[8]}/>
          </div>
          <Reset display="RESET" resetPlay={this.resetPlay}/>
          <div>
            {this.state.winner === 'X' || this.state.winner === 'Y' ? <p>Winner is:{this.state.winner}</p> : ''}
            {this.state.clickCounter === 9 && this.state.winner === '' ? <p> It's a Tie</p> : ''}
          </div>
        </p>
      </div>
    );
  }
}

export default App;
