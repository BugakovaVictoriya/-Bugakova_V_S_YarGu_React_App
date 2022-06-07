import { useEffect, useState } from 'react';
const PreloaderGrand = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    },[]);
    return (
        <>
        {loading && 
        <div className="preloader-grand" id="preloader-grand">
            <img className="logo" src={require("../../img/icototoro.svg").default} alt=""/>
        </div>}
        </>
    );
}

export default PreloaderGrand