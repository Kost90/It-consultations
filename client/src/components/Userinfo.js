import { useSelector } from "react-redux";
import ViewQuestions from "../components/ViewQuestions";
import { AddQuestionForm } from "./AddQuestionForm";
import ViewAnswers from "./ViewAnswers";
import styles from "./styles/UserInfo.module.css";
import ViewContactUsInfo from "./ContactusView/ContactUsView";
let user = {};

const UserInfoDisplay = ({ contactUs, showQuestion, showAnswers, showAddQuestion }) => {
  const { LoginUser } = useSelector((state) => state.logininfo);

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
          {contactUs !== false ? <ViewContactUsInfo /> : null}
        </>
      )}
    </div>
  );
};

export default UserInfoDisplay;
