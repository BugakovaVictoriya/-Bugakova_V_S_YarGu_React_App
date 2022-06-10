import React from "react";
 function Chip({ chip, handleChoice, flip, disabled }) {
    const handleClick = () => {
        if (!disabled){
            handleChoice(chip)
        }
    }
    return (
        <div className="games-pole__chips chips" key={chip.id}>
            <div className={flip ? "flip" : "" || chip.selected ? "flip" : ""}>
                <img className="front" src={chip.imagePath} alt=""/>
                <img className="back" src="img/game_card_0.svg" onClick={handleClick} alt=""/>
            </div>
        </div>
    )
}

export default React.memo(Chip);