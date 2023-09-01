import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchUserAnswers } from "../api/AnswerSlicer";
import { FetchStaffAnswers } from "../api/AnswerSlicer";
import styles from "./styles/ViewAnswers.module.css";

function ViewAnswers({ username }) {
  const dispatch = useDispatch();
  const { answers, statusAnswers, errorAnswers } = useSelector(
    (state) => state.answers
  );

  useEffect(() => {
    const FetchData = async (u) => {
      if (u.role === "user") {
        const data = await dispatch(FetchUserAnswers(u.username));
        return data;
      } else {
        const data = await dispatch(FetchStaffAnswers(u.username));
        return data;
      }
    };
    FetchData(username);
  }, [dispatch]);

  return (
    <>
      {statusAnswers === "loading" && <h1>Answers Loading...</h1>}
      <div className={styles.flex_container_answers}>
        <h2>Answers:</h2>
        {answers.map((element) => (
          <>
            <ul className={styles.flex_container_ul}>
              <li>Titel: {element.titel}</li>
              <li>To costumer: {element.to}</li>
              <li>Content: {element.content}</li>
            </ul>
          </>
        ))}
      </div>
    </>
  );
}

export default ViewAnswers;
