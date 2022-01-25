import React, { useState, useEffect, useRef } from "react";
import SmallCard from './SmallCard';

/*aca pasamos el fetch*/

const GeneralContent = () => {
	const [dato, setdato] = useState([]);
		
	
	useEffect(() => {   
		fetch("http://localhost:3001/api/products")
		.then(response => response.json())
		.then(data => {
			setdato(data)
		})
	},[])
	
	
				 
	console.log(dato)
	
	 
	
	return (
	   
			<div className="row">
				
			   
	
					 <SmallCard {...dato} />
				
			   
	
			</div>
		)
	}
	
	
	export default GeneralContent;