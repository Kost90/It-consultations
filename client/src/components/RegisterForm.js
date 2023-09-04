import { useForm } from "react-hook-form";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { AddNewUser } from "../api/UsersSlicer";
import styles from './styles/RegisterForm.module.css'

const RegisterForm = memo(() => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Firstname: "",
      Lastname: "",
      password: "",
      email: "",
      username: "",
      role: "user",
    },
  });

  const onSubmit = (data) => {
    dispatch(AddNewUser(data));
    localStorage.setItem("username", JSON.stringify(data.username));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input type="text" {...register("Firstname", { required: true })} placeholder="Enter your Firstname"/>
        {errors.Firstname && (
          <div style={{ color: "red" }}>Enter your Firstname</div>
        )}
        <input type="text" {...register("Lastname", { required: true })} placeholder="Enter your Lastname"/>
        {errors.Lastname && (
          <div style={{ color: "red" }}>Enter your Lastname</div>
        )}
        <input type="email" {...register("email", { required: true })} placeholder="Enter your email"/>
        {errors.email && <div style={{ color: "red" }}>Enter your email</div>}
        <input type="password" {...register("password", { required: true })} placeholder="Enter your password" />
        {errors.password && (
          <div style={{ color: "red" }}>Enter your password</div>
        )}
        <input type="text" {...register("username", { required: true })} placeholder="Enter your username"/>
        {errors.username && (
          <div style={{ color: "red" }}>Enter your username</div>
        )}
      <button type="submit">Register</button>
    </form>
  );
});

export default RegisterForm;
