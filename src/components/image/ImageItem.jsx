import React from "react";
import styles from "./ImageItem.module.scss";


function ImageItem() {

  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.__imageItem}>
          <img src="./haski.jpg" alt="" />
        </div>
        <h3>First image</h3>
        <span>Lorem ipsum doller</span>
      </div>
    </>
  );
}

export default ImageItem;