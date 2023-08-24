import { useSelector, useDispatch } from "react-redux";
import { AddAnswerForm } from "./AddAnswerFrom";
import { useEffect } from "react";
import { FetchUserQuestion, FetchStaffQuestions } from "../api/QuestionsSlicer";

function ViewQuestions({ user }) {
  const dispatch = useDispatch();
  const { question, statusQuestions, errorQuestions } = useSelector(
    (state) => state.questions
  );

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
  }, [dispatch]);

  return (
    <>
      {statusQuestions === "loading" && <h2>Questions Loading...</h2>}
      {errorQuestions && <h2>Error: Server error</h2>}
      <div>
      <h2>Users Questions:</h2>
      {user.role === "user"
        ? question.map((element) => (
            <>
              <li>Titel: {element.titel}</li>
              <li>From: {element.from} </li>
              <li>To: {element.to}</li>
              <li>Content: {element.content}</li>
            </>
          ))
        : question.map((element) => (
            <>
              <li>Titel: {element.titel}</li>
              <li>From: {element.from} </li>
              <li>To: {element.to}</li>
              <li>Content: {element.content}</li>
              <AddAnswerForm
                id={element.id}
                to={element.from}
                Titel={element.titel}
                from={user.username}
              />
            </>
          ))}
      </div>
    </>
  );
}

export default ViewQuestions;
