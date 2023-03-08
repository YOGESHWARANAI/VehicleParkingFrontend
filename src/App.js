import logo from './logo.svg';
import './App.css';
import Popup from 'reactjs-popup';
import React, { Component } from 'react';
import { useEffect,useState } from 'react';
import { TextField } from '@material-ui/core';
import { Container, Paper, Button } from '@material-ui/core';
import axios from 'axios';

	// url1="https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678151168/freeslot_yokc44.png";
	// url2="https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678150170/car_availabe_sd4fnt.png";
const App = () => {
	const free="https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678151168/freeslot_yokc44.png";
	const car="https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678150170/car_availabe_sd4fnt.png"
	// const urls=[defurl,defurl];
	const [details, setDetails] = useState([]);
	const [slot, setSlot] = useState("");
	const [registration, setRegistration] = useState("");
	const [names,setName]=useState("");
	const [time_takens,setTimeTaken]=useState("");
	const [passcodes,setPasscode]=useState("");
	const [url1,setUrl1]=useState("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678151168/freeslot_yokc44.png");
	const [url2,setUrl2]=useState("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678151168/freeslot_yokc44.png");
	const [url3,setUrl3]=useState("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678151168/freeslot_yokc44.png");
	const [url4,setUrl4]=useState("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678151168/freeslot_yokc44.png");
	const [available1,setAvailable1]=useState("Book The Slot");
	const [available2,setAvailable2]=useState("Book The Slot");
	const [available3,setAvailable3]=useState("Book The Slot");
	const [available4,setAvailable4]=useState("Book The Slot");
	const [primary1,setPrimary1]=useState("secondary");
	const [primary2,setPrimary2]=useState("secondary");
	const [primary3,setPrimary3]=useState("secondary");
	const [primary4,setPrimary4]=useState("secondary");
	const [trigger,setTrigger]=useState(0);

	const Slot1=()=>{
		setAvailable1("Slot Booked")
		setUrl1("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678150170/car_availabe_sd4fnt.png")
		setPrimary1("primary")
	}
	const ChSlot1=()=>{
		setAvailable1("Book The Slot")
		setUrl1("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678151168/freeslot_yokc44.png")
		setPrimary1("secondary")
	}
	const handleSubmit1 = (event) => {
	event.preventDefault();
	console.log('Form submitted');
	const data = {
	slot_number:1 ,
	registration_plate_number: registration,
	name:names,
	time_taken:time_takens,
	passcode:passcodes
	};
	fetch('http://localhost:8080/post', {
	method: 'POST',
	headers: {
	'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(Slot1)
	.then(setTrigger(trigger+1))
	.catch(error => console.error(error));
	};
	const handleDelete1 = (slot) => {
		axios.delete(`http://localhost:8080/delete?slot_number=${slot}`)
		.then(ChSlot1)
		.then(response=>{
			console.log("deleted");
			setTrigger(trigger+1)
		})
	  };



	  const Slot2=()=>{
		setAvailable2("Slot Booked")
		setUrl2("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678150170/car_availabe_sd4fnt.png")
		setPrimary2("primary")
	}
	const ChSlot2=()=>{
		setAvailable2("Book The Slot")
		setUrl2("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678151168/freeslot_yokc44.png")
		setPrimary2("secondary")
	}
	const handleSubmit2 = (event) => {
	event.preventDefault();
	console.log('Form submitted');
	const data = {
	slot_number: 2,
	registration_plate_number: registration,
	name:names,
	time_taken:time_takens,
	passcode:passcodes
	};
	fetch('http://localhost:8080/post', {
	method: 'POST',
	headers: {
	'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(Slot2)
	.then(setTrigger(trigger+1))
	.catch(error => console.error(error));
	};
	const handleDelete2 = (slot) => {
		axios.delete(`http://localhost:8080/delete?slot_number=${slot}`)
		.then(ChSlot2)
		.then(response=>{
			console.log("deleted");
			setTrigger(trigger+1)
		})
	  };


	  const Slot3=()=>{
		setAvailable3("Slot Booked")
		setUrl3("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678150170/car_availabe_sd4fnt.png")
		setPrimary3("primary")
	}
	const ChSlot3=()=>{
		setAvailable3("Book The Slot")
		setUrl3("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678151168/freeslot_yokc44.png")
		setPrimary3("secondary")
	}
	const handleSubmit3 = (event) => {
	event.preventDefault();
	console.log('Form submitted');
	const data = {
	slot_number:3,
	registration_plate_number: registration,
	name:names,
	time_taken:time_takens,
	passcode:passcodes
	};
	fetch('http://localhost:8080/post', {
	method: 'POST',
	headers: {
	'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(Slot3)
	.then(setTrigger(trigger+1))
	.catch(error => console.error(error));
	};
	const handleDelete3 = (slot) => {
		axios.delete(`http://localhost:8080/delete?slot_number=${slot}`)
		.then(ChSlot3)
		.then(response=>{
			console.log("deleted");
			setTrigger(trigger+1)
		})
	  };



	  const Slot4=()=>{
		setAvailable4("Slot Booked")
		setUrl4("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678150170/car_availabe_sd4fnt.png")
		setPrimary4("primary")
	}
	const ChSlot4=()=>{
		setAvailable4("Book The Slot")
		setUrl4("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678151168/freeslot_yokc44.png")
		setPrimary4("secondary")
	}
	const handleSubmit4 = (event) => {
	event.preventDefault();
	console.log('Form submitted');
	const data = {
	slot_number: 4,
	registration_plate_number: registration,
	name:names,
	time_taken:time_takens,
	passcode:passcodes
	};
	fetch('http://localhost:8080/post', {
	method: 'POST',
	headers: {
	'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(Slot4)
	.then(setTrigger(trigger+1))
	.catch(error => console.error(error));
	};
	const handleDelete4 = (slot) => {
		axios.delete(`http://localhost:8080/delete?slot_number=${slot}`)
		.then(ChSlot4)
		.then(response=>{
			console.log("deleted");
			setTrigger(trigger+1)
		})
	  };





	const handlePut = (event) => {
		event.preventDefault();
		const data = {
		  slot_number: slot,
		  registration_plate_number: registration,
		  name: names,
		  time_taken: time_takens,
		  passcode: passcodes,
		};
		axios.put("http://localhost:8080/put", data)
		  .then((response) => {
			console.log(response.data);
			setTrigger(trigger+1)
		  })
		  .catch((error) => {
			console.error(error);
		  });
	  };

	
	const handleModalClose = () => {
	console.log('Modal closed');
	};


	
	
	  useEffect(() => {
		fetch('http://localhost:8080/get')
		  .then((res) => res.json())
		  .then((result) => {
			setDetails(result);
			console.log(details)
		  });
	  }, [trigger]);
	  
	return (
	<div style={myStyle}>
		<div>
		<div style={{display:"flex",width:100,marginTop:330,marginLeft:200}}>
			<div style={{marginRight:100,display:"grid"}}>

		<img src={url1} style={{width:100,paddingTop:10}}/>
		<br/>
	 <Popup
	trigger={<Button variant="contained" color={primary1} style={{width:100,height:30,fontSize:10,color:"black"}}>{available1}</Button>}
	modal
	nested
	>
	{(close) => (
	<div style={{ width: 600, backgroundColor: 'white' }}>
	<div>
	<h1>Form</h1>
	<form onSubmit={handleSubmit1}>
	<TextField style={{marginLeft:170}} label="Enter The Slot" value={slot} onChange={(e) => setSlot(e.target.value)} />
	<br />
	<TextField style={{marginLeft:170}} label="Registration Plate Number" value={registration} onChange={(e) => setRegistration(e.target.value)} />
	<br />
	<TextField style={{marginLeft:170}} label="Name" value={names} onChange={(e)=>setName(e.target.value)}/>
	<br />
	<TextField style={{marginLeft:170}} label="Time Taken" value={time_takens} onChange={(e)=>setTimeTaken(e.target.value)}/>
	<br />
	<TextField style={{marginLeft:170}} label="Pass Code" value={passcodes} onChange={(e)=>setPasscode(e.target.value)}/>
	<br />
	<br />
	<button type="submit" style={{marginLeft:200}}>Book the slot</button>
	</form>
	<button onClick={close} style={{marginLeft:200}}>Close modal</button>
	</div>
	</div>
	)}
	</Popup>
	<div>
	<button onClick={()=>{handleDelete1(1)}}>Delete</button>
	</div>
	</div>



	<div style={{marginTop:-20,marginLeft:-7}}>
		<img src={url2} style={{width:100,paddingTop:-9}}/>
		<br/>
		<br/>
		<br/>
	 <Popup
	trigger={<Button variant="contained" color={primary2} style={{width:100,height:30,fontSize:10,color:"black"}}>{available2}</Button>}
	modal
	nested
	>
	{(close) => (
	<div style={{ width: 600, backgroundColor: 'white' }}>
	<div>
	<h1>Form</h1>
	<form onSubmit={handleSubmit2}>
	<TextField style={{marginLeft:170}} label="Enter The Slot" value={slot} onChange={(e) => setSlot(e.target.value)} />
	<br />
	<TextField style={{marginLeft:170}} label="Registration Plate Number" value={registration} onChange={(e) => setRegistration(e.target.value)} />
	<br />
	<TextField style={{marginLeft:170}} label="Name" value={names} onChange={(e)=>setName(e.target.value)}/>
	<br />
	<TextField style={{marginLeft:170}} label="Time Taken" value={time_takens} onChange={(e)=>setTimeTaken(e.target.value)}/>
	<br />
	<TextField style={{marginLeft:170}} label="Pass Code" value={passcodes} onChange={(e)=>setPasscode(e.target.value)}/>
	<br />
	<br />
	<button type="submit" style={{marginLeft:200}}>Book the slot</button>
	</form>
	<button onClick={close} style={{marginLeft:200}}>Close modal</button>
	</div>
	</div>
	)}
	</Popup>
	<div>
	<button onClick={()=>{handleDelete2(2)}}>Delete</button>
	</div>
	</div> 





	<div style={{marginLeft:300,marginTop:-30}}>
		<img src={url3} style={{width:100,paddingTop:-9}}/>
		<br/>
		<br/>
		<br/>
	 <Popup
	trigger={<Button variant="contained" color={primary3} style={{width:100,height:30,fontSize:10,color:"black"}}>{available3}</Button>}
	modal
	nested
	>
	{(close) => (
	<div style={{ width: 600, backgroundColor: 'white' }}>
	<div>
	<h1>Form</h1>
	<form onSubmit={handleSubmit3}>
	<TextField style={{marginLeft:170}} label="Enter The Slot" value={slot} onChange={(e) => setSlot(e.target.value)} />
	<br />
	<TextField style={{marginLeft:170}} label="Registration Plate Number" value={registration} onChange={(e) => setRegistration(e.target.value)} />
	<br />
	<TextField style={{marginLeft:170}} label="Name" value={names} onChange={(e)=>setName(e.target.value)}/>
	<br />
	<TextField style={{marginLeft:170}} label="Time Taken" value={time_takens} onChange={(e)=>setTimeTaken(e.target.value)}/>
	<br />
	<TextField style={{marginLeft:170}} label="Pass Code" value={passcodes} onChange={(e)=>setPasscode(e.target.value)}/>
	<br />
	<br />
	<button type="submit" style={{marginLeft:200}}>Book the slot</button>
	</form>
	<button onClick={close} style={{marginLeft:200}}>Close modal</button>
	</div>
	</div>
	)}
	</Popup>
	<div>
	<button onClick={()=>{handleDelete3(3)}}>Delete</button>
	</div>
	</div> 




	<div style={{marginLeft:40,marginTop:-30}}>
		<img src={url4} style={{width:100,paddingTop:-9}}/>
		<br/>
		<br/>
		<br/>
	 <Popup
	trigger={<Button variant="contained" color={primary4} style={{width:100,height:30,fontSize:10,color:"black",marginLeft:40}}>{available4}</Button>}
	modal
	nested
	>
	{(close) => (
	<div style={{ width: 600, backgroundColor: 'white' }}>
	<div>
	<h1>Form</h1>
	<form onSubmit={handleSubmit4} style={{display:"grid",scrollPaddingLeft:30}}>
	<TextField style={{marginLeft:170,width:250,marginLeft:70}} label="Enter The Slot" value={slot} onChange={(e) => setSlot(e.target.value)} />
	<br />
	<TextField style={{marginLeft:170,width:250,marginLeft:70}} label="Registration Plate Number" value={registration} onChange={(e) => setRegistration(e.target.value)} />
	<br />
	<TextField style={{marginLeft:170,width:250,marginLeft:70}} label="Name" value={names} onChange={(e)=>setName(e.target.value)}/>
	<br />
	<TextField style={{marginLeft:170,width:250,marginLeft:70}} label="Time Taken" value={time_takens} onChange={(e)=>setTimeTaken(e.target.value)}/>
	<br />
	<TextField style={{marginLeft:170,width:250,marginLeft:70}} label="Pass Code" value={passcodes} onChange={(e)=>setPasscode(e.target.value)}/>
	<br />
	<br />
	<button type="submit" style={{marginLeft:200}}>Book the slot</button>
	</form>
	<button onClick={close} style={{marginLeft:200}}>Close modal</button>
	</div>
	</div>
	)}
	</Popup>
	<div>
	<button onClick={()=>{handleDelete4(4)}} style={{marginLeft:40}}>Delete</button>
	</div>
	</div> 


</div>
	<br/><br/>
	<div style={{display:"flex",marginLeft:500,marginTop:70}}>
	<div style={{marginRight:90}}>
	<Popup
	trigger={<button style={{height:50}}>Show the slots</button>}
	modal
	nested
	>
	{(close) => (
		
	<div style={{ width: 600,height:500, backgroundColor: 'white' }}>
	<div>
		<h1 style={{marginLeft:200,color:"red"}}>SLOT DETAILS</h1>
	 {details.map(slot=>(
				<div className='content'>
					<h2> SLOT ID : {slot.slot_number} IS BOOKED</h2>
                     </div>
				))}
	<button onClick={close} style={{marginLeft:210}}>Close modal</button>
	</div>
	</div>
	)}
	</Popup> 


	</div>


	<br/><br/>

	

	 <Popup
	trigger={<button >Update the Slot</button>}
	modal
	nested
	>
	{(close) => (
	<div style={{ width: 600, backgroundColor: 'white' }}>
	<div>
	<h1>Form</h1>
	<form onSubmit={handlePut}>
	<TextField style={{marginLeft:170}} label="Enter The Slot" value={slot} onChange={(e) => setSlot(e.target.value)} />
	<br />
	<TextField style={{marginLeft:170}} label="Registration Plate Number" value={registration} onChange={(e) => setRegistration(e.target.value)} />
	<br />
	<TextField style={{marginLeft:170}} label="Name" value={names} onChange={(e)=>setName(e.target.value)}/>
	<br />
	<TextField style={{marginLeft:170}} label="Time Taken" value={time_takens} onChange={(e)=>setTimeTaken(e.target.value)}/>
	<br />
	<TextField style={{marginLeft:170}} label="Pass Code" value={passcodes} onChange={(e)=>setPasscode(e.target.value)}/>
	<br />
	<br />
	<button type="submit" style={{marginLeft:200}}>Book the slot</button>
	</form>
	<button onClick={close} style={{marginLeft:200}}>Close modal</button>
	</div>
	</div>
	)}
	</Popup> 

</div>


</div>
{/* 	
	<div>
	<button onClick={handleGet}>Get</button>
	</div>
	<div>
	<button onClick={handleDelete}>Delete</button>
	</div> */}
	</div>
	);
	};
	
	const myStyle = {
	backgroundImage:"url('https://res.cloudinary.com/dxhmtgtpg/image/upload/v1678121973/Untitled_design_bruya4.png')",
	marginTop: 10,
	height: 700,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	padding:20
	};
	
	export default App;