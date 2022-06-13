import React, { useState, useEffect }
  from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

  const [photoArray, setPhotoAray] = useState([]);

  //empty array makes it not call getPhotos every time the page renders
  useEffect(() => {
    getPhotos()
  }, [])

  const getPhotos = () => {
    axios.get('/gallery')
      .then((response) => {
        // .data is the information that you need and without it
        // response returns a bunch of extra information we don't need and this narrows it down
        // GETting the array from gallery.data
        setPhotoAray(response.data)
      })
      .catch((err) => {
        console.log('Err in the Get', err)
        alert('ERR IN THE GET')
      })
  }
  const plusOneLike = (id) => {
    axios.put(`/gallery/like/${id}`)
      .then(() => {
        console.log('This plussses it')
        getPhotos()
      })
      .catch((err) => {
        console.log(`Reset did not work`, err)
      })
  }
  //just showing the array after the stuff comes in
  console.log(photoArray);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList
        photoArray={photoArray}
        plusOneLike={plusOneLike} />
    </div>
  );
}

export default App;
