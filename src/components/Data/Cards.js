import React from 'react';
import SmallCard from './SmallCard';
import ExtraSmallCard from './ExtraSmallCard';

 
function Cards(){
    return(
        <React.Fragment>
            <div >
                <ul>
                    <li><SmallCard /></li>
                    <li><ExtraSmallCard />  </li>
                </ul>
                
            

        
            
        </div>
        </React.Fragment>
    )
}
export default Cards;
