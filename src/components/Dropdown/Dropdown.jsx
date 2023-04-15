import css from "./Dropdown.module.css";

export const Dropdown = ({ changeFilter }) => {
  return (
    <div className={css.dropdown}>
      <button className={css.dropbtn}>Dropdown</button>
      <div className={css.dropdown_content}>
        <button onClick={() => changeFilter()}>show all</button>
        <button onClick={() => changeFilter("follow")}>follow</button>
        <button onClick={() => changeFilter("followings")}>followings</button>
      </div>
    </div>
  );
};
