import { useSelector, useDispatch } from "react-redux";
import { ShowQ } from "../api/ShowQuestionSlicer";
import { ShowA } from "../api/ShowAnswersSlicer";
import { ShowAddQ } from "../api/ShowAddQuestionSlicer";
import styles from "./styles/ProfilePAgeSideBar.module.css";

let user = {};

function ProfilePageSideBar() {
  const dispatch = useDispatch();
  const { LoginUser } = useSelector((state) => state.logininfo);
  const { showQuestion } = useSelector((state) => state.showQuestion);
  const { showAnswers } = useSelector((state) => state.showAns);
  const { showAddQuestion } = useSelector((state) => state.showAddQuestions);

  if (Array.isArray(LoginUser)) {
    user = LoginUser[0];
  } else {
    user = LoginUser;
  }

  const HandelClickQuestion = () => {
    if (showQuestion === false) {
      dispatch(ShowQ(true));
    } else {
      dispatch(ShowQ(false));
    }
  };

  const HandelClickAnswers = () => {
    if (showAnswers === false) {
      dispatch(ShowA(true));
    } else {
      dispatch(ShowA(false));
    }
  };

  const HandelClickAddQuestion = () => {
    if (showAddQuestion === false) {
      dispatch(ShowAddQ(true));
    } else {
      dispatch(ShowAddQ(false));
    }
  };

  return (
    <div className={styles.flex_container_buttons_sidebar}>
      <h2>Login User information:</h2>
      <ul key={user.id} className={styles.flex_container_ul}>
        <li>First name: {user.Firstname}</li>
        <li>Last name: {user.Lastname}</li>
        <li>Email: {user.email}</li>
        <li>User name: {user.username}</li>
      </ul>
      <div className={styles.buttons_container}>
      <button type="button" onClick={HandelClickQuestion}>
        Questions
      </button>
      <button type="button" onClick={HandelClickAnswers}>
        Answers
      </button>
      {user.role === "user" ? (
        <button type="button" onClick={HandelClickAddQuestion}>
          Add question
        </button>
      ) : null}
      </div>
    </div>
  );
}

export default ProfilePageSideBar;
