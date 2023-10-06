// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';

import PageGallery from './pages/PageGallery';
// import PageAlbum from './pages/PageAlbum';
// import imageItem from "./components/image/imageItem.jsx";
import './App.scss';

function App() {
 
    const [data, setData] =  useState();
    useEffect(() =>{
     fetch("http://localhost:8000/")
     .then(res => res.json())
     .then(
       (result) => {
          setData(result);
       }, (error) => {}
     )
   }, []);
   


  console.log(data)
  return (

    <>

    { data ? ( 
    <PageGallery data={data} />
      
    ): console.log('error') }
    </>
    
  );
}

export default App;
