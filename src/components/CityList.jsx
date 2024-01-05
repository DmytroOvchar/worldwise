import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import { CityItem } from "./CityItem";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

export const CityList = () => {
  const { cities, isLoading } = useCities();
  console.log(cities, isLoading);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      asas
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};
