import React from "react";

//Styles
import styles from "../assets/css/Beststartupconsulting.module.css";

const Beststartupconsulting = () => {
  return (
    <div className={styles.list2} dir="rtl">
      <h2>خدماتی که بهترین مرکز مشاوره استارت آپ ارائه می کند</h2>
      <ul className={styles.listitem2}>
        <div className={styles.leftitem2}>
          <li>مشاوره راه اندازی استارت آپ</li>
          <li>مشاوره حقوقی استارت آپ</li>
          <li>مشاوره استراتژیک</li>
          <li>مشاوره مدیریت استارت آپ ها</li>
        </div>
        <div className={styles.rightitem2}>
          <li>مشاوره مالی ویژه کسب و کارهای استارتاپی</li>
          <li>مشاوره مارکتینگ استارتاپی</li>
          <li>مشاوره فروش کسب و کارهای نوپا</li>
        </div>
      </ul>
    </div>
  );
};
export default Beststartupconsulting;
