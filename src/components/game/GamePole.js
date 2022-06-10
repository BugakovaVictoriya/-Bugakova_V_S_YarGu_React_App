import { useEffect, useState } from 'react';
import Chip from './Chip';
const RESET_CHOICE_INTERVAL = 1500;
const gamechipArray = [
    {selected: false, imagePath: "../../img/game_card_1.svg", id: "img1"},
    {selected: false, imagePath: "../../img/game_card_1.svg", id: "img2"},
    {selected: false, imagePath: "../../img/game_card_2.svg", id: "img3"},
    {selected: false, imagePath: "../../img/game_card_2.svg", id: "img4"},
    {selected: false, imagePath: "../../img/game_card_3.svg", id: "img5"},
    {selected: false, imagePath: "../../img/game_card_3.svg", id: "img6"},
    {selected: false, imagePath: "../../img/game_card_4.svg", id: "img7"},
    {selected: false, imagePath: "../../img/game_card_4.svg", id: "img8"},
    {selected: false, imagePath: "../../img/game_card_5.svg", id: "img9"},
    {selected: false, imagePath: "../../img/game_card_5.svg", id: "img10"},
    {selected: false, imagePath: "../../img/game_card_6.svg", id: "img11"},
    {selected: false, imagePath: "../../img/game_card_6.svg", id: "img12"}
]
const GamePole = () => {
    const [cards, setChips] = useState([]);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [win, setWin] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const startGame = () => {//перед выводом перемешать все
        const shuffledChips = [...gamechipArray].sort(() => Math.random() - 0.5)
        setChips(shuffledChips);
        setChoiceOne(null);
        setChoiceTwo(null);
        setWin(0);
    }

    const handleChoice = (chip) => {//выбор карточек обновить состояние нажата 1 или 2
        choiceOne ? setChoiceTwo(chip) : setChoiceOne(chip);
    }

    useEffect(() => {// сравнение
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.imagePath === choiceTwo.imagePath) {
                setChips(prevChips => {
                    return prevChips.map(chip => {
                        if (chip.imagePath === choiceOne.imagePath) {
                            return {...chip, selected: true}
                        } else {
                            return chip
                        }
                    })
                })
                setWin(count => count + 1);
                resetChoice();
            } else {
                setTimeout(() => resetChoice(), RESET_CHOICE_INTERVAL)
            }
        }
    }, [choiceOne, choiceTwo])

    const resetChoice = () => {//снова нет нажатых
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false);
    }

    return (
        <div className="games-pole__container _container">
            <h2>Try to find picture pairs</h2>
            <div className="game" id="game">
                {cards.map(chip => (
                    <Chip 
                    key={chip.id} 
                    chip={chip} 
                    handleChoice={handleChoice} 
                    flip={chip === choiceOne || chip === choiceTwo || chip === chip.selected} 
                    disabled={disabled}
                    />
                ))}
            </div>
            {win === 6 && <h2>You Win!</h2>}
            <button onClick={startGame} className="games-pole__button button" id="btnGame">new game</button>
        </div>
    );
}

export {GamePole}