import { useEffect } from "react";
import Footer from "./include/Footer"
import Header from "./include/Header"

const Main = ({ children, header }) => {
   
    return (
        <>
            <Header header={header} />
            {children}
            <Footer />
        </>
    )
}

export default Main