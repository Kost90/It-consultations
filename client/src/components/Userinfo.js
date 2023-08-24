import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ViewQuestions from "../components/ViewQuestions";
import { AddQuestionForm } from "./AddQuestionForm";
import { DeleteLoginUser } from "../api/LoginInfoSlice";
import ViewAnswers from "./ViewAnswers";
import styles from './styles/UserInfo.module.css'

let user = {};

const UserInfoDisplay = () => {
  const dispatch = useDispatch();
  const { LoginUser } = useSelector((state) => state.logininfo);

  if (Array.isArray(LoginUser)) {
    user = LoginUser[0];
  } else {
    user = LoginUser;
  }

  const HandelClick = (id) => {
    dispatch(DeleteLoginUser(id));
    localStorage.clear();
    user = {};
  };

  return (
    <div className={styles.flex_container_userinfo}>
      <div>
      <h2>User information:</h2>
      <ul key={user.id}>
        <li>First name: {user.Firstname}</li>
        <li>Last name: {user.Lastname}</li>
        <li>Email: {user.email}</li>
        <li>User name: {user.username}</li>
        <button
          type="button"
          onClick={() => {
            HandelClick(user.id);
          }} className={styles.button_logout}
        >
          <Link to="/">Logout</Link>
        </button>
      </ul>
      </div>
      {user.role === "user" ? (
        <>
          <ViewQuestions user={user} />
          <ViewAnswers username={user} />
          <AddQuestionForm id={user.id} from={user.username} />
        </>
      ) : (
        <>
          <ViewQuestions user={user} />
          <ViewAnswers username={user} />
        </>
      )}
    </div>
  );
};

export default UserInfoDisplay;
