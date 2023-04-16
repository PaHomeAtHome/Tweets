import css from "./Alert.module.css";

export const Alert = ({ children }) => {
  return <div class={css.alert}>{children}</div>;
};
