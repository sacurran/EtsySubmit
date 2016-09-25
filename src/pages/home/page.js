//Stephanie Curran Code

import React from "react";
import Board from '../../common/components/board';
import ConfigBoard from '../../common/components/config';
import { dataToBoard } from '../../utils';
import { nextGen } from '../../service';

import {css, StyleSheet} from 'aphrodite';

export default class HomePage extends React.Component {
  
  componentWillMount(){
  	const M = 5;
  	const N = 5;
  	const liveCells = [[2,1],[2,2],[2,3]];
  	const board = dataToBoard({M:M, N:N, liveCells:liveCells});
  	this.setState({board: board, liveCells:liveCells, M:M, N:N });
  }

  addCoord(coord){
    let {board,liveCells, M, N } = this.state;
    if(liveCells.find(array => array[0]==coord[0] &&array[1]==coord[1])){
      liveCells = liveCells.filter(array => !(array[0]==coord[0] &&array[1]==coord[1]));
    }
    else{
      liveCells.push(coord);
    }
    board = dataToBoard({M:M, N:N, liveCells:liveCells});
    const newState = {board,liveCells, M, N};
    this.setState(newState);
  }


  nextGenClick(){
  	const { M, N, liveCells} = this.state;
  	const data = {M, N, liveCells};
  	nextGen(data, (res) =>{
  		const newState = this.state;
  		newState.board = res.board;
  		newState.liveCells = res.liveCells;
  		this.setState(newState);
  	});
  }
  onChange(data){
  	const { M, N, liveCells} = data;

  	const board = dataToBoard({M:M, N:N, liveCells:liveCells});
  	this.setState({board: board, liveCells:liveCells, M:M, N:N });
  }

  render() {
  	const { board, liveCells, M, N } = this.state;
    return (
      <div className={css(styles.base)}>
        <h2>{"Stephanie's Etsy Submission"}</h2>
        <ConfigBoard M={M} N={N} liveCells={liveCells} onChange={(e)=>this.onChange(e)}/>
        Click on a tile to toggle it.
        <Board board={board} onChange={(e)=>this.addCoord(e)}/> 
        <div role="button" className={css(styles.button)} onClick={x => this.nextGenClick()}>Next Generation {'>>'}</div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    padding: '1em',
    margin: "0 auto"
  },
  button:{
    ":focus":{
      outline: "none",
      background: "#dc9a6c"
    },
    ":hover":{
      background: "#f5e2d5"
    },
    ":active":{
      background: "#dc9a6c"
    },
    padding: '1em',
    marginTop: '1em',
    border: '.5px solid #ce6f2d',
    borderRadius: '15px',
    cursor: "pointer",
    maxWidth: '11em',
    userSelect: "none" 
  }
});

