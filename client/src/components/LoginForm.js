import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { GetUserInfo } from "../api/LoginInfoSlice";
import styles from './styles/LoginFrom.module.css'

function LoginForm({ username }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(GetUserInfo(data));
    localStorage.setItem("username", JSON.stringify(data.username));
    username(data.username);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input type="text" {...register("username", { required: true })} placeholder="Username"/>
        {errors.titel && <div style={{ color: "red" }}>Enter username</div>}
        <input type="password" {...register("password", { required: true })} placeholder="Password"/>
        {errors.titel && <div style={{ color: "red" }}>Enter password</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
