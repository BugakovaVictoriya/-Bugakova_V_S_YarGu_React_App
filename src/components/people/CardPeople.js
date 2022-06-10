const CardPeople = (props) => { //наименование полей props... в соответствии с требованиями api
    return (
        <div className="card-list__card card">
            <div className="card__title">{props.name}</div>
            <div className="card__cont">
                <p>Gender: {props.gender}</p>
                <p>Age: {props.age}</p>
                <p>Eye color: {props.eye_color}</p>
                <p>Hair color: {props.hair_color}</p>
            </div>
         </div>
    );
}

export {CardPeople}