import React from 'react';
import Bar from './Bar';
import ContentMiddle from './ContentMiddle';

function Wrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                
                
                <div id="content">
                    <Bar />
                    <ContentMiddle />
                    
    </div>
            </div>    
        </React.Fragment>
    )
}
export default Wrapper;