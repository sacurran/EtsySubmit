// Stephanie Curran File

import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';


export default class Board extends Component{
	render(){
		const {board, onChange} = this.props;
		const onClick = (row, col)=>{
			onChange([col,row]);
		};

		return (
		    <div>
		    	{board.map(function(row, i) {
		          return (
		            <div key={i} style={{display:"flex"}}>
		              {row.map(function(col, j) {
		              	const c = css(styles.tile, col.on? styles.on: '');
		                return <div 
		                key={j} 
		                className={c} 
		                onClick={(e)=>onClick(i,j)}>
		                </div>;
		              })}
		            </div>
		          );
		        })}
		    </div>
		);
	}
}

const styles = StyleSheet.create({
	tile:{
		padding: '1em',
		border: '.5px solid black'
	},
	on: {
		background: "#ce6f2d"
	}
});