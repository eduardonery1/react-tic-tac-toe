import { useState } from 'react';


function Square({ value, handleClick }){

	return <button className="square" onClick={handleClick} >{ value }</button>;
}

export default function Board() {
  	const [value, setValue] = useState(Array(9).fill(null));
	const [XisNext, setXisNext] = useState(true);

	function handleClick(i) {
		if (value[i]) return;
		let valueCopy = value.slice();
		valueCopy[i] = (XisNext)? 'X': 'O';
		setValue(valueCopy);	
		setXisNext(!XisNext);
	}

	return (
		<>
		  <div className="board-row">
			<Square value={ value[0] } handleClick = { () => handleClick(0) }/>
			<Square value={ value[1] } handleClick = { () => handleClick(1) }/>
			<Square value={ value[2] } handleClick = { () => handleClick(2) }/>
		  </div>	
		  <div className="board-row">
			<Square value={ value[3] } handleClick = { () => handleClick(3) }/>
			<Square value={ value[4] } handleClick = { () => handleClick(4) }/>
			<Square value={ value[5] } handleClick = { () => handleClick(5) }/>
		  </div>	
		  <div className="board-row">
			<Square value={ value[6] } handleClick = { () => handleClick(6) }/>
			<Square value={ value[7] } handleClick = { () => handleClick(7) }/>
			<Square value={ value[8] } handleClick = { () => handleClick(8) }/>
		  </div>	
		</>
    );
}
