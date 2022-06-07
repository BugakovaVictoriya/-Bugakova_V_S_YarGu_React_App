const CardLocations = (props) => {
    let climate = props.climate;
    let terrain = props.terrain;
    if(climate === 'TODO'){
        climate = "-";
    };
    if(terrain === 'TODO'){
        terrain = "-";
    };

    return (
        <div className="card-list__card card">
            <div className="card__title">{props.name}</div>
            <div className="card__cont">
                <p>Climate: {climate}</p>
                <p>Terrain: {terrain}</p>
                <p>Surface Water: {props.surface_water}%</p>
            </div>
        </div>
    );
}

export {CardLocations}