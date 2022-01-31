import React from 'react';
import SideBar from './SideBar';
import Wrapper from './Wrapper';
import '../assets/css/app.css'
import LastProductInDb from './Cards/LastProductInDb';
import GeneralContent from './Data/GeneralContent';
import Footer from './Footer/Footer';
import CategoriesInDb from './Cards/CategoriesInDb';
import Chart from './Tablas/Chart';
import InDb from './Cards/InDb';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
   
     <React.Fragment>
      <div id="wrapper">
       
      <SideBar /> 
      <Routes >
      <Route exact path="/" element= {<Wrapper />}> </Route>
      <Route path="last" element= {<InDb />}> </Route>
      <Route path="resumen" element= {<GeneralContent />}> </Route>
      <Route path="categories" element= {<CategoriesInDb />}> </Route>
      <Route path="list" element= {<Chart />}> </Route>
    
      
     </Routes>
     
     </div>
     <Footer />
    </React.Fragment>
    
  );
}

export default App;
