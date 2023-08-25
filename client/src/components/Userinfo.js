import { useSelector } from "react-redux";
import ViewQuestions from "../components/ViewQuestions";
import { AddQuestionForm } from "./AddQuestionForm";
import ViewAnswers from "./ViewAnswers";
import styles from "./styles/UserInfo.module.css";

let user = {};

const UserInfoDisplay = () => {
  const { LoginUser } = useSelector((state) => state.logininfo);
  const { showQuestion } = useSelector((state) => state.showQuestion);
  const { showAnswers } = useSelector((state) => state.showAns);
  const { showAddQuestion } = useSelector((state) => state.showAddQuestions);

  if (Array.isArray(LoginUser)) {
    user = LoginUser[0];
  } else {
    user = LoginUser;
  }

  return (
    <div className={styles.flex_container_userinfo}>
      {user.role === "user" ? (
        <>
          {showQuestion !== false ? <ViewQuestions user={user} /> : null}
          {showAnswers !== false ? <ViewAnswers username={user} /> : null}
          {showAddQuestion !== false ? (
            <AddQuestionForm id={user.id} from={user.username} />
          ) : null}
        </>
      ) : (
        <>
          {showQuestion !== false ? <ViewQuestions user={user} /> : null}
          {showAnswers !== false ? <ViewAnswers username={user} /> : null}
        </>
      )}
    </div>
  );
};

export default UserInfoDisplay;
