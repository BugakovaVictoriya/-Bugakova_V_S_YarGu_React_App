import CreateContent from "../api/CreateContent";
const People = () => {
    return (
        <>
        <div className="fullscreen fullscreen__people">
            <h1>People</h1>
        </div>
        <CreateContent strName={'people'}/>
        </>
    )
}

export {People}