import { Link } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",  
                position: "fixed",         
                top: 0,
                left: 0,
                height: "100vh",            
                padding: "1rem",
                backgroundColor: "#f0f0f0" 
            }}>
                <Link to="/home" style={{ margin: "1rem 0" }}>Home</Link>
                <Link to="/about" style={{ margin: "1rem 0" }}>About</Link>
                <Link to="/contact" style={{ margin: "1rem 0" }}>Contacto</Link>
            </nav>
        </>
    )
}
export default Layout;