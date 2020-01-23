import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";


function MainCard(){

const [nasaPhoto, setNasaPhoto] = useState([]);

useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=HVSGkBGaZvgpB4cw9vbTmCHy1yBgcbWAV03fMkv5`)
    .then (response =>{
        console.log(response);
        setNasaPhoto(response.data);
    })
    .catch(err =>{
        console.log("fix now!");
    });
}, []);

    return(
        <div>
            <PhotoCard title = {nasaPhoto.title} imgurl = {nasaPhoto.hdurl} explanation ={nasaPhoto.explanation}
                date = {nasaPhoto.date}/>
        </div>
    );
}

export default MainCard; 