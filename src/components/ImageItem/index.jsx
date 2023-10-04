import React from "react";
import styles from "./ImageItem.module.scss";


function ImageItem(props) {
  const { img } = props;

  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.__imageItem}>
          <img src="./images/1.jpg" alt="" />
          <img src={img != "" ? img : "./images/1.jpg"} alt="" />
        </div>
        {/* <h3>First image</h3> */}
        {/* <span>Lorem ipsum doller</span> */}
      </div>
    </>
  );
}

export default ImageItem;