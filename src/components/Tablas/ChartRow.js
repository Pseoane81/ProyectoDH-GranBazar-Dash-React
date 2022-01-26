import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>
                        <ul>
                            {props.categoria.map( (category,i) => 
                                <li key={`category ${i}`}>{category.category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.name}</td>
                    <td>
                        <ul>
                            {props.color.map( (category,i) => 
                                <li key={`category ${i}`}>{category.color}</li>
                            )}
                        </ul>
                    </td>

                    
                    
                    
                </tr>
            )
    }
    
        

export default ChartRow;