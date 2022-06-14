import React from "react";
 function Chip({ id, selected, imagePath, handleChoice, flip, disabled }) {
    const handleClick = () => {
        if (!disabled){
            handleChoice(id)
        }
    }
    return (
        <div className="games-pole__chips chips" key={id}>
            <div className={flip ? "flip" : "" || selected ? "flip" : ""}>
                <img className="front" src={imagePath} alt=""/>
                <img className="back" src="img/game_card_0.svg" onClick={handleClick} alt=""/>
            </div>
        </div>
    )
}

export default React.memo(Chip);