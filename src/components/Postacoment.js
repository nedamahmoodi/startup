import React from "react";

//Styles
import styles from "../assets/css/Postacoment.module.css";

const Postacoment = ({heading,btn}) => {
  return (
    <div className="Postacomment" dir="rtl">
      <h2>{heading}</h2>
      <form className={styles.lastform}>
        <label className={styles.message}>پیام</label>
        <textarea className={styles.textarea}></textarea>
        <div className={styles.nameemail}>
          <div className={styles.sectionname}>
            <label className={styles.name}>نام</label>
            <input type="text" className={styles.txtname}></input>
          </div>
          <div className={styles.sectionemail}>
            <label className={styles.name}>ایمیل</label>
            <input type="email" className={styles.email}></input>
          </div>
        </div>
        <div className={styles.formBtn}>
          <button className={styles.btnreservation1}>
          {btn}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Postacoment;
