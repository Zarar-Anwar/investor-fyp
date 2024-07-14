import React, { useEffect } from 'react';
import Header from "./include/Header";
import Sidebar from "./include/Sidebar";
import Footer from "./include/Footer";
import { useLocation } from 'react-router-dom';

function Dashboard({ children }) {
    // const location = useLocation();

    // useEffect(() => {
    //     const links = [
    //         'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    //         `${process.env.PUBLIC_URL}/assets/core/css/app.min.css`,
    //         `${process.env.PUBLIC_URL}/assets/core/css/bootstrap.min.css`,
    //         'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css',
    //         `${process.env.PUBLIC_URL}/assets/core/css/icons.min.css`,
    //         '%PUBLIC_URL%assets/css/bootstrap.min.css',
    //         '%PUBLIC_URL%assets/css/icons.min.css',
    //         '%PUBLIC_URL%assets/css/app.min.css',
    //         'https://fonts.googleapis.com/css?family=PT+Sans:400,700&amp;subset=latin,latin-ext',
    //         'https://fonts.googleapis.com/css?family=Lato:400,100,300,700,900&amp;subset=latin,latin-ext',
    //         'css/bootstrap.min.css',
    //         'css/bootstrap-theme.min.css',
    //         'css/block_grid_bootstrap.css',
    //         'css/font-awesome.min.css',
    //         'css/typicons.min.css',
    //         'css/odometer-theme-default.css',
    //         'css/slider-pro.min.css',
    //         'css/animate-custom.css',
    //         'css/owl.carousel.css',
    //         'css/owl.theme.default.min.css',
    //         'css/slicknav.min.css',
    //         'style.css'
    //     ];

    //     const scripts = [
    //         'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    //         'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js',
    //         'https://code.jquery.com/jquery-3.4.1.min.js',
    //         `${process.env.PUBLIC_URL}/assets/libs/jquery/jquery.min.js`,
    //         `${process.env.PUBLIC_URL}/assets/libs/bootstrap/js/bootstrap.bundle.min.js`,
    //         `${process.env.PUBLIC_URL}/assets/libs/metismenu/metisMenu.min.js`,
    //         `${process.env.PUBLIC_URL}/assets/libs/simplebar/simplebar.min.js`,
    //         `${process.env.PUBLIC_URL}/assets/libs/node-waves/waves.min.js`,
    //         `${process.env.PUBLIC_URL}/assets/libs/apexcharts/apexcharts.min.js`,
    //         'assets/js/pages/dashboard.init.js',
    //         `${process.env.PUBLIC_URL}/assets/js/app.js`,
    //         `${process.env.PUBLIC_URL}/assets/core/libs/jquery/jquery.min.js`,
    //         `${process.env.PUBLIC_URL}/assets/core/libs/bootstrap/js/bootstrap.bundle.min.js`,
    //         `${process.env.PUBLIC_URL}/assets/core/libs/metismenu/metisMenu.min.js`,
    //         `${process.env.PUBLIC_URL}/assets/core/libs/simplebar/simplebar.min.js`,
    //         `${process.env.PUBLIC_URL}/assets/core/libs/node-waves/waves.min.js`,
    //         `${process.env.PUBLIC_URL}/assets/core/js/app.js`,
    //         './cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
    //         'js/jquery.min.js',
    //         'js/bootstrap.min.js',
    //         'js/jquery.hoverIntent.js',
    //         'js/superfish.min.js',
    //         'js/jquery.sliderPro.min.js',
    //         'js/owl.carousel.min.js',
    //         'js/odometer.min.js',
    //         'js/waypoints.min.js',
    //         'js/jquery.slicknav.min.js',
    //         'js/wow.min.js',
    //         'js/retina.min.js',
    //         'js/custom.js'
    //     ];

    //     // Function to create and append link elements
    //     links.forEach(href => {
    //         const link = document.createElement('link');
    //         link.rel = 'stylesheet';
    //         link.href = href.replace('%PUBLIC_URL%', process.env.PUBLIC_URL);
    //         document.head.appendChild(link);
    //     });

    //     // Function to create and append script elements
    //     scripts.forEach(src => {
    //         const script = document.createElement('script');
    //         script.src = src.replace('%PUBLIC_URL%', process.env.PUBLIC_URL);
    //         script.defer = true;
    //         document.body.appendChild(script);
    //     });

    //     // // Cleanup function to remove all added link and script elements
    //     return () => {
    //         links.forEach(href => {
    //             try {
    //                 const link = document.querySelector(`link[href="${href.replace('%PUBLIC_URL%', process.env.PUBLIC_URL)}"]`);
    //                 if (link && link.parentNode) {
    //                     link.parentNode.removeChild(link);
    //                 }
    //             } catch (error) {
    //                 console.error(`Failed to remove link: ${href}`, error);
    //             }
    //         });
    //         scripts.forEach(src => {
    //             try {
    //                 const script = document.querySelector(`script[src="${src.replace('%PUBLIC_URL%', process.env.PUBLIC_URL)}"]`);
    //                 if (script && script.parentNode) {
    //                     script.parentNode.removeChild(script);
    //                 }
    //             } catch (error) {
    //                 console.error(`Failed to remove script: ${src}`, error);
    //             }
    //         });
    //     };
    // }, [location.pathname]);
    return (
        <div id='layout-wrapper'>
            <Header />
            <Sidebar />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
