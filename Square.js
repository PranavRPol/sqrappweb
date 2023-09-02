import{useState} from "react";

function Square()

{
	const[num,setNum]=useState("");
	const[msg,setMsg]=useState("");

	const hNum = (event)=>{setNum(event.target.value);}

	const find = (event)=>{
		event.preventDefault();
		let n=parseFloat(num);
		let r=n*n;
		let ans="Square=" + r.toFixed(2);
		setMsg(ans);
	}

	return(
	<>
	<center>
		<h1>Square App by Pranav</h1>
		<form onSubmit={find}>
		<input type="number"step="any"placeholder="enter number"
		onChange={hNum}/>
		<br/><br/>
		<input type="submit"value="Find Square"/>
		</form>
		<h1>{msg}</h1>
	</center>
	</>
	);
	}

	export default Square;