import React from "react";
import d from "../assets/image/imgteam.png";

//Styles
import styles from "../assets/css/Startupsession.module.css";

const Startupsession = () => {
  return (
    <div className="row">
      <div className={styles.Reservation} dir="rtl">
        <div className={styles.rightimg}>
          <img className={styles.imgleft} src={d} />
        </div>
        <div className={styles.formleft}>
          <h2 style={{ fontFamily: "meshki" }}>
            {" "}
            رزرو جلسه اختصاصی مشاوره استارتاپ به ص ورت حضوری در مشهد
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
          <button className={styles.btnreservation}>تکمیل فرم رزرو جلسه</button>
        </div>
      </div>
    </div>
  );
};
export default Startupsession;
