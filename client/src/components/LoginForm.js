import { useCallback} from 'react';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { GetUserInfo } from "../api/LoginInfoSlice";
import styles from './styles/LoginFrom.module.css';

import { string, object} from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = {
  username: string().trim().required().label("username"),
  password: string().trim().required().label("password"),
}

function LoginForm({ username }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(loginSchema)),
  });

  const onSubmit = useCallback((data) => {
    dispatch(GetUserInfo(data));
    localStorage.setItem("username", JSON.stringify(data.username));
    username(data.username);
    reset();
  },[]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input type="text" {...register("username", { required: true })} placeholder="Username"/>
        {errors.username && <div style={{ color: "red" }}>Enter username</div>}
        <input type="password" {...register("password", { required: true })} placeholder="Password"/>
        {errors.password && <div style={{ color: "red" }}>Enter password</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
