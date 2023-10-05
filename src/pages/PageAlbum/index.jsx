import React, {useState} from "react";
import styles from "./PageAlbum.module.scss";
import ImageItem from "../../components/ImageItem";


function PageAlbum() {
  // const [file, setFile] = useState();
  


  return (
    <>
      <div className={styles.itemContainer.concat(' container')}>
       {/* data.map({
        < ImageItem img={daata.img} />
       })  */}
    
        < ImageItem />
        < ImageItem />
        < ImageItem />
        < ImageItem />
        < ImageItem />
        < ImageItem />
      </div>

      {/* <p>test <span>red</span></p> */}
    </>
  );
}

export default PageAlbum;