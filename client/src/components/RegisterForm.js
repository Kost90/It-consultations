import { useForm } from "react-hook-form";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AddNewUser } from "../api/UsersSlicer";
import styles from './styles/RegisterForm.module.css';

import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema = {
  Firstname: string().trim().required().min(3).max(20).label("Your Firstname"),
  Lastname: string().trim().required().min(3).max(20).label("Your Lastname"),
  email: string()
    .email()
    .required()
    .matches(/@[^.]*\./),
  password: string().trim().required().label("password"),
  username: string().trim().required().min(3).max(20).label("Your username"),
  role: string().trim().required().min(3).max(20).label("Your role"),
};

const RegisterForm = memo(() => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(registerSchema)),
  });

  const onSubmit = useCallback((data) => {
    const newData = {
      ...data,
      role: 'user',
    };
    dispatch(AddNewUser(newData));
    localStorage.setItem("username", JSON.stringify(newData.username));
    reset();
  },[]);

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
