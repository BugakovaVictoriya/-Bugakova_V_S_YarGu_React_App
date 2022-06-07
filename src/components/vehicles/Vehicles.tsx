import CreateContent from "../api/CreateContent";
const Vehicles = () => {
    return (
        <>
            <div className="fullscreen fullscreen__veh">
                <h1>Vehicles</h1>
            </div>
            <CreateContent strName={'vehicles'}/>
        </>
    )
}

export {Vehicles}