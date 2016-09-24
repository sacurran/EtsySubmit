// Stephanie Curran File

import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';


export default class ConfigBoard extends Component{
	componentWillMount(){
		const { M, N, liveCells} = this.props;
  		this.setState({liveCells:liveCells, M:M, N:N });
	}

	submit(){
		const { onChange } = this.props;
		const { M, N, liveCells} = this.state;
		onChange({ M, N, liveCells});
	}
	reset(){
		const { onChange } = this.props;
		const M = 5;
  		const N = 5;
  		const liveCells = [[2,1],[2,2],[2,3]];
  		this.setState({M,N,liveCells});
		onChange({ M, N, liveCells});
	}

	changeSize(e, uid){
		const newState = this.state;
		newState[uid] = Number(e.target.value);
		this.setState(newState);
	}

	render(){
		const {M, N, liveCells} = this.state;
		return (
		    <div>
		    	<div style={{display: 'flex'}}>
		    		<div className={css(styles.label)}>M</div>
		    		<input type="text" value={M} onChange={(e)=>this.changeSize(e,"M")}/>
		    	</div>
		    	<div style={{display: 'flex'}}>
		    		<div className={css(styles.label)}>N</div>
		    		<input type="text" value={N} onChange={(e)=>this.changeSize(e,"N")}/>
		    	</div>
		    	<div style={{display: 'flex'}}>
		    		<div className={css(styles.button)} onClick={(e)=>this.submit()}>Resize Board</div>
		    		<div className={css(styles.button)} onClick={(e)=>this.reset()}>Reset Default</div>
		    	</div>
		    </div>
		);
	}
}

const styles = StyleSheet.create({
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
		padding: '.5em',
		margin: '.5em',
		border: '.5px solid #ce6f2d',
		borderRadius: '15px',
		cursor: "pointer",
		userSelect: "none" 
	},
	label:{
		minWidth: '2em',
		fontWeight: '600'
	}
});