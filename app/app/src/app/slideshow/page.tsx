import React from 'react';

import Slider from '../../components/slideshow/slider';
import Uploader from '../../components/upload/uploader';
import type { Memorie } from '../../components/slideshow/slide';

const memories: Memorie[] = [
    {
        link: "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg",
        desc: "Une super photo de paysage"
    },
    {
        link: "https://media.istockphoto.com/id/1324189687/fr/photo/arc-de-triomphe-du-ciel-paris.jpg?s=612x612&w=0&k=20&c=dV9mu_FSVtByHp995ogUpKX8YbZ8dyjawRzADSfOKVE=",
        desc: "Une super photo de paysage 2"
    },
    {
        link: "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg",
        desc: "Une super photo de paysage 3"
    }
];

const SlideShow: React.FC = () => {
  const handleUpload = (data: any) => {
    "use server"
    console.log("data");
    console.log(data);
  }

  return (
    <div>
      <h1>Slideshow</h1>
      <Slider memories={memories}/>

      <Uploader callback={handleUpload}/>
    </div>
  );
};

export default SlideShow;