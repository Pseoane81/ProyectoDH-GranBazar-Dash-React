import React from 'react';
import ContentTopBar from './ContentTopBar';
//import ContentRowCenter from './ContentRowCenter';
//import ContentRowMovies from './ContentRowMovies';
//import Chart from './Chart';

function ContentTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
                            <ContentTopBar />
					{/*<!-- Content Row Movies-->
					<ContentRowMovies />
					<ContentRowCenter />
					<Chart />*/}
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentTop;