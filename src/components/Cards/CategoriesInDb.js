import React from "react";

function CategoriesInDb () {
    return (
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Categorias en la base de datos</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Muebles
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Decoración
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Uso personal
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Viajes
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Destacados
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
    )
}

export default CategoriesInDb;