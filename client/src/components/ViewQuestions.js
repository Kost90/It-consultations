import { useSelector, useDispatch } from "react-redux";
import { AddAnswerForm } from "./AddAnswerFrom";
import { useEffect } from "react";
import styles from "./styles/ViewQuestions.module.css";
import {
  FetchUserQuestion,
  FetchStaffQuestions,
  DeleteQuestion,
} from "../api/QuestionsSlicer";

function ViewQuestions({ user }) {
  const dispatch = useDispatch();
  const { question, statusQuestions, errorQuestions } = useSelector(
    (state) => state.questions
  );
  const { showQuestion } = useSelector((state) => state.showQuestion);

  useEffect(() => {
    const FetchData = async (u) => {
      if (u.role === "user") {
        const data = await dispatch(FetchUserQuestion(user.username));
        return data;
      } else {
        const data = await dispatch(FetchStaffQuestions(user.Firstname));
        return data;
      }
    };
    FetchData(user);
  }, [showQuestion]);

  const HandelClick = (id) => {
    dispatch(DeleteQuestion(id));
  };

  return (
    <>
      {statusQuestions === "loading" && <h1>Questions Loading...</h1>}
      {errorQuestions && <h2>Error: Server error</h2>}
      <div className={styles.flex_container_questions}>
        <h2>Users Questions:</h2>
        {user.role === "user"
          ? question.map((element) => (
              <>
                <ul key={element.id} className={styles.flex_container_ul}>
                  <li>Titel: {element.titel}</li>
                  <li>From: {element.from} </li>
                  <li>To: {element.to}</li>
                  <li>Content: {element.content}</li>
                  <button
                    type="button"
                    onClick={() => {
                      HandelClick(element.id);
                    }}
                  >
                    delete question
                  </button>
                </ul>
              </>
            ))
          : question.map((element) => (
              <>
                <ul key={element.id} className={styles.flex_container_ul}>
                  <li>Titel: {element.titel}</li>
                  <li>From: {element.from} </li>
                  <li>To: {element.to}</li>
                  <li>Content: {element.content}</li>
                  <button
                    type="button"
                    onClick={() => {
                      HandelClick(element.id);
                    }}
                  >
                    delete question
                  </button>
                  <AddAnswerForm
                    id={element.id}
                    to={element.from}
                    Titel={element.titel}
                    from={user.username}
                  />
                </ul>
              </>
            ))}
      </div>
    </>
  );
}

export default ViewQuestions;
