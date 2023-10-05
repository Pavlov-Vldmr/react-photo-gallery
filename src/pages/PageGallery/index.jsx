import React from "react";
import styles from "./PageGallery.module.scss";
import AlbumItem from "../../components/AlbumItem";
// import React, {useEffect, useState} from 'react';

function PageGallery({ data }) {
  // const {data} = props
  // console.log(typeof(data.files[0].src));
  // console.log(data.files[0].src);

  return (
    <>
      {/* <h1>{data.result}</h1> */}
      <div className={styles.album}>
        {data
          ? data.files.map((file) => {
              <AlbumItem />;
            })
          : console.log("Empty!")}
        {/* {data.files.map(item => { 
          <a href='' >
            <AlbumItem />
          </a>
        })}  */}
      </div>
    </>
  );
}

export default PageGallery;
