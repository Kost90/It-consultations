import { useForm } from "react-hook-form";
import { memo,useCallback } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../api/QuestionsSlicer";
import styles from "./styles/AddQuestionForm.module.css";

import { string, object, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const addQuestionSchema = {
  titel: string().trim().required().min(3).max(20).label("Titel"),
  content: string().trim().required().min(3).label("Your message"),
  to: string().trim().required().label("Name hos you write"),
  from: string().trim().required().label("Your name"),
  UsersID: number().label("Users ID"),
};

export const AddQuestionForm = memo(({ id, from }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(addQuestionSchema)),
  });

  const onSubmit = useCallback((data) => {
    const newData = {
      ...data,
      from: from,
      UsersID: id,
    };
    dispatch(addQuestion(newData));
    reset();
  },[]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.flex_container_addquestions}
    >
      <select {...register("to", { required: true })}>
        <option value="" disabled>
          Choose consultant
        </option>
        <option value="Konstantyn">Konstantyn</option>
        <option value="Manuel">Manuel</option>
        <option value="Prince">Prince</option>
      </select>
      {errors.to && <div style={{ color: "red" }}>Choose consultant</div>}
      <input
        type="text"
        {...register("titel", { required: true })}
        placeholder="Titel"
      />
      {errors.titel && <div style={{ color: "red" }}>Enter titel</div>}
      <textarea
        cols="30"
        rows="10"
        {...register("content", { required: true })}
        placeholder="write message"
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
});
