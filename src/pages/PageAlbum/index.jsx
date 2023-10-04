import React, {useState} from "react";
import styles from "./PageAlbum.module.scss";
import ImageItem from "../../components/ImageItem";


function PageAlbum() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}


  return (
    <>
      <div className={styles.itemContainer.concat(' container')}>
       {/* data.map({
        < ImageItem img={daata.img} />
       })  */}
       <input type="file" onChange={handleChange}/>
       <img src={file} alt="" />
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