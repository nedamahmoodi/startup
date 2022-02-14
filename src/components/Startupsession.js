import React from "react";
import d from "../assets/image/imgteam.png";

//Styles
import styles from "../assets/css/Startupsession.module.css";

const Startupsession = ({ heading, image, form, btn}) => {
  return (
    <div className="row">
      <div className={styles.Reservation} dir="rtl">
        <div className={styles.rightimg}>
          <img className={styles.imgleft} src={image} />
        </div>
        <div className={styles.formleft}>
          <h2 style={{ fontFamily: "meshki" }}>
            {" "}
           {heading}
          </h2>
          <form>
            <input
              className={styles.txtname}
              type="text"
              placeholder="نام خانوادگی"
            ></input>
            <input
              className={styles.phonenumber}
              type="number"
              placeholder="شماره همراه"
            ></input>
          </form>
          <button className={styles.btnreservation}>{btn}</button>
        </div>
      </div>
    </div>
  );
};
export default Startupsession;
