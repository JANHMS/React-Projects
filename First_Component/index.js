function getNum() {
	return Math.floor(Math.random()*10)+1;
}
class Hello extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if(num === 7){
			msg =
				<div>
					<h2>Congrats!</h2>
					<img src="https://www.ecosia.org/images?q=win+gif#id=D18CF0C761671AA50A1912A10219A1B6A04283E7"/>
				</div>
		} else{
			msg = <p>Sorry you lose</p>
		}
		return (
			<div>
				<h1>Your number is {num}</h1>
				{msg}
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));
