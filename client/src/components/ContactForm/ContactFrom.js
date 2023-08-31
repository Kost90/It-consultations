import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addContactUsMessage } from "../../api/ContactSlicer";
import styles from "./ContactForm.module.css";
import { memo } from "react";

const FormContact = memo(() => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addContactUsMessage(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.flex_container_form}
    >
      <input type="text" {...register("name", { required: true })} placeholder="Enter your full name"/>
      {errors.name && <div style={{ color: "red" }}>Enter your name</div>}
      <input type="email" {...register("email", { required: true })} placeholder="Enter your email"/>
      {errors.name && <div style={{ color: "red" }}>Enter your email</div>}
      <input
        type="number"
        {...register("phone", { minLength: 8, maxLength: 25 })} placeholder="Enter you phone number"
      />
      {errors.phone && <div style={{ color: "red" }}>Enter your number</div>}

      <textarea
        cols="30"
        rows="10"
        {...register("comment", { required: true })} placeholder="Leave your comment"
      ></textarea>
      <button type="submit">SEND</button>
    </form>
  );
});

export default FormContact;
