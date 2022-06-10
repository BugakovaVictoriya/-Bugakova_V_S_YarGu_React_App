import { useEffect, useState } from 'react';
import {CardFilm} from "../films/CardFilm"
import {CardLocations} from "../locations/CardLocations"
import {CardPeople} from "../people/CardPeople"
import {CardSpecies} from "../species/CardSpecies"
import {CarVehicles} from "../vehicles/CardVehicles"
import {ErrorMessage} from "./ErrorMessege"

  function CreateContent(props) {
    const url = 'https://ghibliapi.herokuapp.com/'+props.strName;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
              const response = await fetch(
                url
              );
              if (!response.ok) {
                throw new Error(
                  `This is an HTTP error: The status is ${response.status}`
                );
              }
              let actualData = await response.json();
              setData(actualData);
              setError(null);
            } catch(err) {
              setError(err.message);
              setData(null);
            } finally {
              setLoading(false);
            }  
          }
          getData()
        }, [])
  
        let content = (loading) ? (
          <div className="preloader" id="preloader">
            <img src="img/rings.svg"  width="100" alt=""/>
          </div>
        ) : (error) ? (
          <ErrorMessage error={error}/>
        ) : (data) ? ({
          films: data.map(({ title, original_title_romanised, original_title, description, release_date, id }) => (
            <CardFilm 
              key={id}
              title={title}
              original_title_romanised={original_title_romanised}
              original_title={original_title}
              description={description}
              release_date={release_date}
            />
          )),
          locations: data.map(({ name, climate, terrain, surface_water, id }) => (
            <CardLocations 
              key={id}
              name={name}
              climate={climate}
              terrain={terrain}
              surface_water={surface_water}
            />
          )),
          people: data.map(({ name, gender, age, eye_color, hair_color, id }) => (
            <CardPeople 
              key={id}
              name={name}
              gender={gender}
              age={age}
              eye_color={eye_color}
              hair_color={hair_color}
            />
          )),
          species: data.map(({ name, classification, eye_colors, hair_colors, id }) => (
            <CardSpecies 
              key={id}
              name={name}
              classification={classification}
              eye_colors={eye_colors}
              hair_colors={hair_colors}
            />
          )),
          vehicles: data.map(({ name, description, vehicle_class, length, id }) => (
            <CarVehicles 
              key={id}
              name={name}
              description={description}
              vehicle_class={vehicle_class}
              length={length}
            />
          ))
          }[props.strName]
        ) : null;

    return (
        
        <div className="card-list__container _container">
          {content}
        </div>
      );
}

export default CreateContent;