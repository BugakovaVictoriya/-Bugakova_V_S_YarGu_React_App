import CreateContent from "../api/CreateContent";
const Locations = () => {
    return (
        <>
            <div className="fullscreen fullscreen__loc">
                <h1>Locations</h1>
            </div>
            <CreateContent strName='locations'/>
        </>
    )
}

export {Locations}