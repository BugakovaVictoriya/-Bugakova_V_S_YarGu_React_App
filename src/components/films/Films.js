import {GamePole} from "../game/GamePole";
import CreateContent from "../api/CreateContent";

const Films = () => {

    return (
        <>
        <div className="screen-wrapper">
            <div className="logo-screen">
                <div className="logo-screen__body"></div>
                <div className="logo-screen__footer">
                    <div className="logo-screen__title">Studio Ghibli</div>
                </div>
            </div>
            <div className="fullscreen fullscreen__film">
            <h1>Films</h1>
            </div>
        </div>
        <GamePole/>
        <CreateContent strName='films'/>
        </>
    )
}

export {Films}