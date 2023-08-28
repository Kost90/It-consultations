import { useForm } from "react-hook-form";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../api/AnswerSlicer";
import styles from './styles/AddAnswerForm.module.css'

export const AddAnswerForm = memo(({ to, from, id, Titel }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      titel: Titel,
      content: "",
      to: to,
      from: from,
      QuestionID: id,
    },
  });

  const onSubmit = (data) => {
    dispatch(addAnswer(data));
    reset();
  };

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
