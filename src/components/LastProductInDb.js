import React from "react";
import imagenFondo from '../assets/images/estanteriadecohierromadera4est_11.jpeg';

function LastProductInDb() {
    return (
       
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en la base de datos</h5>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                </div>
                <p>Estanteria de hierro y madera con 4 estantes. Se entrega armada</p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de producto</a>
            </div>
        </div>
        </div>

    )
}
export default LastProductInDb;