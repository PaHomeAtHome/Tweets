import css from "./LoadMoreButton.module.css";

export const LoadMoreButton = ({ children, onClick }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={onClick} className={css.button}>
        {children}
      </button>
    </div>
  );
};
