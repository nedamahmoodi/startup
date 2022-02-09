import React from "react";

//Styles
import styles from "../assets/css/Problematic.module.css"; 

const Problematic = () => {
  return (
    <div className={styles.list} dir="rtl">
      <h2>مواردی که برای استارتاپ ها مشکل ساز می شود</h2>
      <ul className={styles.listitem}>
        <div className={styles.leftitem}>
          <li>ضعف در توانایی تجاری سازی ایده</li>
          <li>عدم آگاهی از مسائل حقوقی</li>
          <li>نداشتن مارکتینگ صحیح و بازاریابی ایده</li>
        </div>
        <div className={styles.rightitem}>
          <li>عدم شناخت مخاطبین واقعی، نیاز و مشکلات آنها</li>
          <li>عدم توانایی تیم سازی و هدایت آن</li>
          <li>کمبود سرمایه و منابع لازم</li>
        </div>
      </ul>
      <p>
        در این شرایط مشاور استارتاپ به افراد تیم در دستیابی به بهترین راه حل کمک
        می کند.
      </p>
    </div>
  );
};
export default Problematic;
