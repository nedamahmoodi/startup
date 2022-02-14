import React from "react";

//styles
import styles from "../assets/css/Consultingservices.module.css";

const Consultingservices = ({ heading, paragraph,paragraph2 }) => {
  return (
    <div className={styles.consultingservices} dir="rtl">
      <h2>
       {heading}
      </h2>
      <p>
        {paragraph}
      </p>
      <p>
        {paragraph2}
      </p>
    </div>
  );
};
export default Consultingservices;
