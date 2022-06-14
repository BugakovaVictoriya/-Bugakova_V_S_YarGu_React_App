const CardFilm = (props) => { //наименование полей props... в соответствии с требованиями api
    return (
        <div className="card-list__card card">
            <div className="card__title">{props.title} ({props.original_title_romanised}, {props.original_title})</div>
            <div className="card__cont">
                <p>{props.description} </p> 
                <p>Release Date: {props.release_date}</p>
            </div>
        </div>
    );
}

export {CardFilm}