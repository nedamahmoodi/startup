import React from "react";
import c from "../assets/image/imgteam.png";


//Styles
import styles from "../assets/css/Startupadvice.module.css";

const Startupadvice = () => {
  return (
    <div className={styles.startopadvice} dir="rtl">
      <div className={styles.captionright2}>
        <h2></h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>
      <div>
        <img className={styles.imgleft} src={c} />
      </div>
    </div>
  );
};
export default Startupadvice;
