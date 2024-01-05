import { useCities } from "../context/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export const CityItem = ({ city }) => {
  const { currentCity, deleteCity } = useCities();
  const {
    cityName,
    date,
    emoji,
    id,
    position: { lat, lng },
  } = city;
  const handleClick = (e) => {
    e.preventDefault();
    console.log("deleted");
    deleteCity(id);
  };
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currentCity.id === id && styles["cityItem--active"]
        } `}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
};
