import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchUserAnswers } from "../api/AnswerSlicer";
import { FetchStaffAnswers } from "../api/AnswerSlicer";

function ViewAnswers({ username }) {
  const [answer, setAnswer] = useState([]);
  const dispatch = useDispatch();
  const { answers, statusAnswers, errorAnswers } = useSelector(
    (state) => state.answers
  );

  useEffect(() => {
    const FetchData = async (u) => {
      if (u.role === "user") {
        const data = await dispatch(FetchUserAnswers(u.username));
        setAnswer(data);
        return data;
      } else {
        const data = await dispatch(FetchStaffAnswers(u.username));
        setAnswer(data);
        return data;
      }
    };
    FetchData(username);
  }, [dispatch]);

  console.log(answers);

  return (
    <>
      {statusAnswers === "loading" && <h2>Answers Loading...</h2>}
      <div>
      <h2>Answers</h2>
      {answers.map((element) => (
        <>
          <li>Titel: {element.titel}</li>
          <li>To costumer: {element.to}</li>
          <li>Content: {element.content}</li>
        </>
      ))}
      </div>
    </>
  );
}

export default ViewAnswers;
