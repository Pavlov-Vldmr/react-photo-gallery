import React from "react";
import styles from "./PageGallery.module.scss";
import AlbumItem from "../../components/AlbumItem";

function PageGallery() {
  
  return (
     <>
     <div className={styles.album}>
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
     </div>
        


    </>
  ); 
}

export default PageGallery;