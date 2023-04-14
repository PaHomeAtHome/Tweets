import css from "./UserListComponent.module.css";
import picture_1x from "../../images/picture_1x.png";
import { ReactComponent as ReactLogo } from "../../svg/logo.svg";

export const UserListComponent = ({ userInfo }) => {
  const { user, tweets, followers, avatar, id, following } = userInfo;
  return (
    <li key={id} className={css.card}>
      <ReactLogo className={css.logo} />
      <img src={picture_1x} alt="card background picture" />
      <div className={css.line}></div>
      <div className={css.ellipse}></div>
      <img src={avatar} alt={`${user} avatar`} className={css.avatar} />
      <div className={css.info}>
        <p>{tweets.toLocaleString()} TWEETS</p>
        <p> {followers.toLocaleString()} FOLLOWERS</p>
      </div>
      <button className={css.button}>
        {following ? "Following" : "Follow"}
      </button>
    </li>
  );
};
