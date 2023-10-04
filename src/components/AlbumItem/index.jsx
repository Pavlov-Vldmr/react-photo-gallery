import React from "react";
import styles from "./AlbumItem.module.scss";


function AlbumItem() {

  return (
    <>
      <div className={styles.albumContainer}>
        <div className={styles.__albumItem}>
          <img src="./images/1.jpg" alt="" />
        </div>
        <h3>Album name</h3>
        {/* <span>Lorem ipsum doller</span> */}
      </div>  
    </>
  );
}

export default AlbumItem;