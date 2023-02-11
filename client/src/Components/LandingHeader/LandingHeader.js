import React from "react";
import styles from "./LandingHeader.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";

const LandingHeader = () => {
  const collections = [
    { id: 1, name: "Collection" },
    { id: 2, name: "Lorem Ipsum" },
    { id: 3, name: "Lorem Ipsum" },
    { id: 4, name: "Lorem Ipsum" },
  ];

  const cultures = [
    { id: 1, name: "Culture" },
    { id: 2, name: "Lorem Ipsum" },
    { id: 3, name: "Lorem Ipsum" },
  ];

  const materials = [
    { id: 1, name: "Material" },
    { id: 2, name: "Lorem Ipsum" },
    { id: 3, name: "Lorem Ipsum" },
    { id: 4, name: "Lorem Ipsum" },
  ];

  const designers = [
    { id: 1, name: "Designer" },
    { id: 2, name: "Lorem Ipsum" },
    { id: 3, name: "Lorem Ipsum" },
    { id: 4, name: "Lorem Ipsum" },
  ];

  const doners = [
    { id: 1, name: "Doner" },
    { id: 2, name: "Lorem Ipsum" },
    { id: 3, name: "Lorem Ipsum" },
    { id: 4, name: "Lorem Ipsum" },
  ];

  const date_era = [
    { id: 1, name: "Date/Era" },
    { id: 2, name: "Lorem Ipsum" },
    { id: 3, name: "Lorem Ipsum" },
  ];

  return (
    <header>
      <h1 className={`${styles.logo}`}>RTI Viewer</h1>
      <SearchBar />
      <div className={`${styles.filterContainer}`}>
        <Filter data={collections} />
        <Filter data={cultures} />
        <Filter data={materials} />
        <Filter data={designers} />
        <Filter data={doners} />
        <Filter data={date_era} />
      </div>
    </header>
  );
};

export default LandingHeader;
