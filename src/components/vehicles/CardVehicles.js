const CarVehicles = (props) => {
    return (
        <div className="card-list__card card">
            <div class="card__title">{props.name}</div>
                <div class="card__cont">
                <p>{props.description}</p>
                <p>Vehicle class: {props.vehicle_class}</p>
                <p>Length: {props.length}</p>
            </div>
        </div>
    );
}

export {CarVehicles}