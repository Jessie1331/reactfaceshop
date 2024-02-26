import "./Loader.css"
import ReactDOM  from "react-dom";
import React from "react";


const Loaderr = () => {
    return ReactDOM.createPortal (
        <div className='wrapper'>
            <div className='loader'>
                <img src={URL('https://www.bing.com/th?id=OIP.Rs28iOxL2mhHWrvaDzQhTAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2')} alt=" Loading....."/>
            </div>
          </div>,
document.getElementById("Loader")
    ) 
};
export default Loaderr;