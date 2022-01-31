import React from 'react';

import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';

 
function InDb(){
    return(
        <React.Fragment>
            <div className="ultimos">
        <LastProductInDb />
        <LastUserInDb />      
        </div>
        </React.Fragment>
    )
}
export default InDb;
