import React, { useEffect, useState, Component } from 'react';
import styles from "./PageGallery.module.scss";
import AlbumItem from "../../components/AlbumItem";
// import React, {useEffect, useState} from 'react';


class  PageGallery extends React.Component {
  constructor(props) {
    super(props); 
    
  }
  render() {

   console.log((this.props.data.files.name))
    return (
         <>
         <div className='album'>
         {this.props.data.files.map((item) => (     
            <AlbumItem key={item.id} title={item.name} src={item.src}/>
            // console.log(item.name)
          ))}
         </div>
          
         </>
    );
}}

export default PageGallery;
