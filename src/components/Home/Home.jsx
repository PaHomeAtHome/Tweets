import css from "./Home.module.css";

export const Home = () => {
  return (
    <div className={css.home}>
      <a href={`/tweets`}>Tweets</a>
    </div>
  );
};
