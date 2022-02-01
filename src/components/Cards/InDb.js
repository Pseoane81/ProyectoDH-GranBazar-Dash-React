import React from 'react';

import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';

 
function InDb(){
    return(
        <React.Fragment>
            <div >
                <ul className="ultimos">
                    <li className="list"><LastProductInDb /></li>
                    <li><LastUserInDb />  </li>
                    </ul>
                
            

        
            
        </div>
        </React.Fragment>
    )
}
export default InDb;
