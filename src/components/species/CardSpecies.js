const CardSpecies = (props) => {
    return (
        <div className="card-list__card card">
            <div className="card__title">{props.name}</div>
            <div className="card__cont">
                <p>Gender: {props.classification}</p>
                <p>Eye color: {props.eye_colors}</p>
                <p>Hair color: {props.hair_colors}</p>
            </div>
         </div>
    );
}

export {CardSpecies}