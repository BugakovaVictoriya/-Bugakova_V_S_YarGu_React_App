import CreateContent from "../api/CreateContent";
const Species = () => {
    return (
        <>
            <div className="fullscreen fullscreen__spec">
                <h1>Species</h1>
            </div>
            <CreateContent strName={'species'}/>
        </>
    )
}

export {Species}