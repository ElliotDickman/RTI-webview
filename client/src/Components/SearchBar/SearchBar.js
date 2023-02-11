import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Collection" },
    { id: 3, name: "Culture" },
    { id: 4, name: "Date/Era" },
    { id: 5, name: "Designer" },
    { id: 6, name: "Donor" },
    { id: 7, name: "Material" },
  ];

  const [selectedCategory, setselectedCategory] = useState(categories[0]);

  return (
    <div className={`${styles.searchContainer}`}>
      <div className={`${styles.search}`}>
        <div className={`${styles.dropdown}`}>
          <Listbox
            as="div"
            className={`${styles.dropdownMenu}`}
            value={selectedCategory}
            onChange={setselectedCategory}
          >
            <Listbox.Button
              type="button"
              className={`${styles.advancedSearchButton}`}
            >
              {selectedCategory.name}
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2458 1.1675C10.0584 0.981251 9.80498 0.876709 9.5408 0.876709C9.27661 0.876709 9.02316 0.981251 8.8358 1.1675L5.2458 4.7075L1.7058 1.1675C1.51844 0.981251 1.26498 0.876709 1.0008 0.876709C0.736612 0.876709 0.483161 0.981251 0.295798 1.1675C0.20207 1.26046 0.127675 1.37107 0.0769067 1.49292C0.026138 1.61478 0 1.74549 0 1.8775C0 2.00951 0.026138 2.14022 0.0769067 2.26208C0.127675 2.38394 0.20207 2.49454 0.295798 2.5875L4.5358 6.8275C4.62876 6.92123 4.73936 6.99562 4.86122 7.04639C4.98308 7.09716 5.11379 7.1233 5.2458 7.1233C5.37781 7.1233 5.50852 7.09716 5.63037 7.04639C5.75223 6.99562 5.86283 6.92123 5.9558 6.8275L10.2458 2.5875C10.3395 2.49454 10.4139 2.38394 10.4647 2.26208C10.5155 2.14022 10.5416 2.00951 10.5416 1.8775C10.5416 1.74549 10.5155 1.61478 10.4647 1.49292C10.4139 1.37107 10.3395 1.26046 10.2458 1.1675Z"
                  fill="white"
                />
              </svg>
            </Listbox.Button>
            <Listbox.Options className={`${styles.dropdownMenuItems}`}>
              {categories.map((category) => (
                <Listbox.Option
                  className={`${styles.dropdownMenuItem}`}
                  key={category.id}
                  value={category}
                >
                  {category.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className={`${styles.searchFieldContainer}`}>
          <input
            type="text"
            className={`${styles.inputField}`}
            placeholder="Search..."
          />
        </div>
        <button type="button" className={`${styles.magnifyingGlass}`}>
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9716 21.1714L12.2898 14.4801C11.6932 14.958 11.0071 15.3364 10.2315 15.6152C9.45597 15.894 8.63068 16.0334 7.75568 16.0334C5.58807 16.0334 3.75375 15.2818 2.25273 13.7787C0.750909 12.2747 0 10.4374 0 8.26671C0 6.09602 0.750909 4.25869 2.25273 2.75474C3.75375 1.25158 5.58807 0.5 7.75568 0.5C9.9233 0.5 11.758 1.25158 13.2598 2.75474C14.7609 4.25869 15.5114 6.09602 15.5114 8.26671C15.5114 9.14296 15.3722 9.96942 15.0938 10.7461C14.8153 11.5228 14.4375 12.2098 13.9602 12.8073L20.6719 19.5284C20.8906 19.7475 21 20.0164 21 20.335C21 20.6536 20.8807 20.9324 20.642 21.1714C20.4233 21.3905 20.1449 21.5 19.8068 21.5C19.4688 21.5 19.1903 21.3905 18.9716 21.1714ZM7.75568 13.6437C9.24716 13.6437 10.5151 13.1211 11.5595 12.076C12.6032 11.0301 13.125 9.76031 13.125 8.26671C13.125 6.77312 12.6032 5.50336 11.5595 4.45744C10.5151 3.41232 9.24716 2.88976 7.75568 2.88976C6.2642 2.88976 4.99625 3.41232 3.95182 4.45744C2.90818 5.50336 2.38636 6.77312 2.38636 8.26671C2.38636 9.76031 2.90818 11.0301 3.95182 12.076C4.99625 13.1211 6.2642 13.6437 7.75568 13.6437Z"
              fill="#353535"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
