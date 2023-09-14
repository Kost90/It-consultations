import { useForm } from "react-hook-form";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../api/AnswerSlicer";
import styles from './styles/AddAnswerForm.module.css';

import { string, object, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const addanswerSchema = {
  titel: string().trim().required().min(3).max(20).label("Titel"),
  content: string().trim().required().min(3).label("Your message"),
  to: string().trim().required().label("Name hos you write"),
  from: string().trim().required().label("Your name"),
  QuestionID: number().label("Users ID"),
};

export const AddAnswerForm = memo(({ to, from, id, Titel }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(addanswerSchema)),
  });

  const onSubmit = useCallback((data) => {
    const newData = {
      ...data,
      titel: Titel,
      to: to,
      from: from,
      QuestionID: id,
    };
    dispatch(addAnswer(newData));
    reset();
  },[]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.flex_container_addanswers}>
      <div>
        <label htmlFor="titel">Write answer:</label>
        <br />
        <textarea
          {...register("content", { required: true })}
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
});
