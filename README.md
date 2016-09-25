Started from https://github.com/pheuter/essential-react, mainly for the base server/webpack components. No functionality for the assignment lies in this starter code.

## To Run
```
npm install
npm run server
```
Go to http://localhost:8080

## API

```
POST http://localhost:8080/api/nextGen

body {
M,
N, 
liveCells
}
```

## Client

I aligned the board and config right in order to allow for the expansion of the board.
Assumption: when board is sized smaller than existing highlights, those highlights disappear when re-expanded again.

Default Mode: What was included in the assignment as an example.

Click the Next Generation button to call the API and update the board.

## Used Libraries

*Client* React.js | Aphrodite | Bootstrap

*Server* Express | Axios

## Where is the assignment code?

Search for the string `//Stephanie Curran Code` to find all the files relevant to the assignment.

