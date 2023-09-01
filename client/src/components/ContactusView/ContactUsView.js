import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchContactUsMessages } from "../../api/ContactSlicer";
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

  console.log(contactUsMessages);

  return (
    <>
      {statusContactUs === "loading" && <h1>Contact messages Loading...</h1>}
      <div className={styles.flex_container_answers}>
      <h2>Contact us messages:</h2>
      {contactUsMessages.map((element) => (
        <>
        <ul className={styles.flex_container_ul} key={element.id}>
        <li>From: {element.name}</li>
          <li>Costumer email: {element.email}</li>
          <li>phone: {element.phone}</li>
          <li>comment: {element.comment}</li>
        </ul>
        </>
      ))}
      </div>
    </>
  );
}

export default ViewContactUsInfo;