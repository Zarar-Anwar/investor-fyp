import React from 'react';
import Header from "./include/Header";
import Sidebar from "./include/Sidebar";
import Footer from "./include/Footer";

function Dashboard({children}) {
    return (
        <div id='layout-wrapper'>
            <Header/>
            <Sidebar/>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;
