import css from "./Dropdown.module.css";

export const Dropdown = ({ changeFilter, fetchUserData }) => {
  return (
    <div className={css.dropdown}>
      <button className={css.dropbtn}>Filter</button>
      <div className={css.dropdown_content}>
        <button onClick={() => changeFilter()}>show all</button>
        <button
          onClick={() => {
            changeFilter("follow");
            fetchUserData("follow");
          }}
        >
          follow
        </button>
        <button
          onClick={() => {
            changeFilter("following");
            fetchUserData("following");
          }}
        >
          followings
        </button>
      </div>
    </div>
  );
};
