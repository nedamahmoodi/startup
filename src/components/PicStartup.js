import React  from "react";

//Styles
import styles from "../assets/css/PicStartup.module.css";

const PicStartup = ({image}) => {
  return (
    <div className={styles.pictop}>
      <img src={image} />
    </div>
  );
};
export default PicStartup;