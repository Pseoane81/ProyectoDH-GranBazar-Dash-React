import React from 'react';
import image from '../assets/images/logo-transparente.png';
import '../assets/css/colors.css';

function SideBar(){
    return(
        <React.Fragment>
            
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav color-sidebar sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="GranBazar"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>DASHBOARD</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className=" sidebar-action ">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className=" nav-items nav-item">
                    <a className="nav-links  nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className=" nav-items nav-item">
                    <a className="nav-links nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-items nav-item">
                    <a className="nav-links nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
        
        </React.Fragment>
    )
}
export default SideBar;
