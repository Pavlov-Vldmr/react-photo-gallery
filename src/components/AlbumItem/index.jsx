import React from "react";
import styles from "./AlbumItem.module.scss";


function AlbumItem(props) {
const {key, title, src} = props
const lowpath = '../react-photo-gallery-background'
  return (
    <>
      <div id={key} className={styles.albumContainer}>
        <div className={styles.__albumItem}>
          {/* <img src="./images/1.jpg" alt="" /> */}
          <img src={lowpath+src} alt="" />

        </div>
        <h3>{title}</h3>
        

        {/* <span>Lorem ipsum doller</span> */}
      </div>  
    </>
  );
}

export default AlbumItem;