import React, { useState, useEffect } from "react";
import SmallCard from './SmallCard';


/*aca pasamos el fetch*/

const GeneralContent = () => {
	const [productos, setproductos] = useState([]);
	const [users, setusers] = useState([]);
		
	
	useEffect(() => {   
		fetch("http://localhost:3001/api/products")
		.then(response => response.json())
		.then(data => {
			setproductos(data)
		})
	},[])

	useEffect(() => {   
		fetch("http://localhost:3001/api/users")
		.then(response => response.json())
		.then(user => {
			setusers(user)
		})
	},[])
	
	
		 
	const datos = [productos,users,productos.CountByCategory]
	
	 
	
	return (
	   
			<div className="row">
				{datos.map((dato) => (
					 <SmallCard {...dato} />
				)
					)}
			   
	
			</div>
		)
	}
	
	
	export default GeneralContent;