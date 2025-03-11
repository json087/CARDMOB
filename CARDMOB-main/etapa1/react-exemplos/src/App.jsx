import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Photo from "./components/photo";

function App() {
  const [count, setCount] = useState(0);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
      const response = await fetch(url); 
      if (response.status === 200) {
        const data = await response.json();
        const upDate = data.map((photo) => ({
          ...photo,
          thumbnailUrl: `https://picsum.photos/300?random=${photo.id}`
        }))
        setPhotos(upDate);
      }
    } catch (error) {
      console.error('Erro na busca', error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      {/* <Counter title="Contando..."/> */}
      {/* <Counter initial="100"/> */}
      <article>
        <h1>Meu álbum</h1>
        {photos.map((photo) => {
          return ( 
            // <article key={photo.id}>
            //   <h2> ID #{photo.id} {photo.title}</h2>
            //   <img src={photo.thumbnailUrl} alt={photo.title}></img>
            // </article>
            <Photo photo={photo}/>
          );
        })}
      </article>
    </>
  );
}

export default App;