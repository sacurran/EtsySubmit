// Stephanie Curran File

const makeBoard = (m,n)=>{
	const array = new Array(m);
	for(var i = 0 ; i < m ; i++){
		array[i] = new Array(n);
		for(var j = 0; j<n; j++){
			array[i][j]= {on:false};
		}
	}
	return array;
}

export const dataToBoard = (data) =>{
	const board = makeBoard(data.M, data.N);
	data.liveCells.forEach((x) =>{
		if(board[x[1]] && board[x[1]][x[0]])
			board[x[1]][x[0]].on = true;
	});
	return board;
}

const shouldBeOn = (sOns, existing) => {
	if (sOns < 2)
		return false;
	if (sOns == 2)
		return existing;
	if (sOns == 3)
		return true;
	else 
		return false;
}

export const dataToNewBoard = (data) => {
	const m = data.M;
	const n = data.N;
	const oldBoard = dataToBoard(data);
	const newBoard = makeBoard(m, n);

	const newLiveCells = [];

	for(var i =0 ; i< m; i++){
		for(var j=0; j <n ; j++){
			let totalOns = 0;
			if(i-1 >=0 && oldBoard[i-1][j].on)
				totalOns++;
			if(i-1 >=0 && j-1 >=0 && oldBoard[i-1][j-1].on)
				totalOns++;
			if(i-1 >=0 && j+1 < n && oldBoard[i-1][j+1].on)
				totalOns++;
			if(i+1 < m && oldBoard[i+1][j].on)
				totalOns++;
			if(i+1 < m && j-1 >=0 && oldBoard[i+1][j-1].on)
				totalOns++;
			if(i+1 < m && j+1 < n && oldBoard[i+1][j+1].on)
				totalOns++;
			if(j-1 >=0 && oldBoard[i][j-1].on)
				totalOns++;
			if(j+1 < n && oldBoard[i][j+1].on)
				totalOns++;
			newBoard[i][j].on = shouldBeOn(totalOns, oldBoard[i][j].on);
			if(newBoard[i][j].on){
				newLiveCells.push([j,i]); //Because display is opposite
			}
		}
	}
	return {board: newBoard, liveCells: newLiveCells};
}

