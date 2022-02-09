import React from "react";

//Components
import BackgroundImg from "./BackgroundImg";

//Styles
import styles from "../assets/css/NamiraStartupServices.module.css";

const NamiraStartupServices = () => {
  return (
    <div className={styles.list3} dir="rtl">
      <BackgroundImg rightOleft="1" />
      <h2>خدمات مشاوره استارتاپی نامیرا</h2>
      <ul className={styles.listitem3}>
        <li>شناخت درست از اکوسیستم استارتاپی و آسیب و عارضه های موجود</li>
        <li>کمک به پیدا کردن مسئله اصلی مخاطبین شما و کمک به خلق ایده ناب</li>
        <li>شناخت درست مشتریان و بخش بندی آنها</li>
        <li>خلق ارزش پیشنهادی یکتایی که برای شما درآمد زا باشد</li>
        <li>راه های دسترسی به هر بخش از مشتریان</li>
        <li>ساختار درآمدی استارتاپ شما</li>
        <li>ساختار هزینه استارتاپ شما</li>
        <li>تعیین شاخص های موفقیت و راه های دستیابی به آنها</li>
        <li>شیوه های مارکتینگ و تدوین برنامه هک رشد</li>
        <li>استراتژی های توسعه یا خروج استارتاپ شما</li>
      </ul>
      <BackgroundImg rightOleft="" />
    </div>
  );
};
export default NamiraStartupServices;
