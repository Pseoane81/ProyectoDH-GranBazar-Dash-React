import React from 'react'; 
import SmallCard from './SmallCard';


let productsInDb= {
	title: "",
	color:"",
	quantity:"",
	icon:"",
}
let totalProducts = {
	title:"",
	color:"",
	quantity:"",
	icon:"",
}
let totalUsers = {
	title: "Actors Quantity",
	color: "warning",
	quantity: '49',
	icon: "fa-user-check"
}

let cardProps = [productsInDb, totalProducts,totalUsers]

function GeneralContent () {
    return (
        <div className="row">

						{/*<!-- Movies in Data Base -->
						
						< SmallCard />*/}

						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Productos en la Base de Datos</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">21</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-film fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Total awards -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Productos Totales</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-award fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Actors quantity -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Usuarios Registrados
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					
                
    )
}

export default GeneralContent;