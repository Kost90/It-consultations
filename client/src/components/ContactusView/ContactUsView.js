import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchContactUsMessages, DeleteContactMessage } from "../../api/ContactSlicer";
import Loader from '../Loader/Loader';
import styles from './ContactUsView.module.css';


function ViewContactUsInfo() {
  const dispatch = useDispatch();
  const { contactUsMessages, statusContactUs, errorContactUs } = useSelector(
    (state) => state.contactus
  );

  useEffect(() => {
    const FetchData = async () => {
        const data = await dispatch(FetchContactUsMessages());
        return data;
    }
    FetchData();
  }, [dispatch]);

  const HandelClick = (id) => {
    dispatch(DeleteContactMessage(id));
  };

  return (
    <>
      {statusContactUs === "loading" && <Loader/>}
      <div className={styles.flex_container_answers}>
      <h2>Contact us messages:</h2>
      {contactUsMessages.map((element) => (
        <>
        <ul className={styles.flex_container_ul} key={element.id}>
        <li>From: {element.name}</li>
          <li>Costumer email: {element.email}</li>
          <li>phone: {element.phone}</li>
          <li>comment: {element.comment}</li>
          <button type="button" onClick={() => {HandelClick(element.id)}}>delete</button>
        </ul>
        </>
      ))}
      </div>
    </>
  );
}

export default ViewContactUsInfo;