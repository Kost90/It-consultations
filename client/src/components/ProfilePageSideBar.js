import { useSelector} from "react-redux";
import styles from "./styles/ProfilePAgeSideBar.module.css";

let user = {};

function ProfilePageSideBar({ setContactUs, setShowQuestions, setShowAnswers, setShowAddQuestion }) {
  const { LoginUser } = useSelector((state) => state.logininfo);

  if (Array.isArray(LoginUser)) {
    user = LoginUser[0];
  } else {
    user = LoginUser;
  }

  const HandelClickQuestion = () => {
    setShowQuestions();
  };

  const HandelClickAnswers = () => {
    setShowAnswers();
  };

  const HandelClickAddQuestion = () => {
    setShowAddQuestion();
  };

  const HandelClickShowContactUs = () => {
    setContactUs();
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
        ) : (
          <button type="button" onClick={HandelClickShowContactUs}>
            Contact us info
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfilePageSideBar;
