import React, { useState, useEffect } from "react";
import ChartRow from './ChartRow';

function Chart() {
    const [tableRowsData, setptableRowsData] = useState([]);

    useEffect(() => {   
		fetch("http://localhost:3001/api/products")
		.then(response => response.json())
		.then(data => {
			setptableRowsData(data.products)
		})
	},[])

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th>Origen</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th>Origen</th>
                                <th>Color</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>

                <button>previo</button>
                <button>siguiente</button>
                    
                </div>
            </div>
        </div>
        
    )
    
}

export default Chart;