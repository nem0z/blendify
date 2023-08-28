import React from 'react';

import Slider from '../../components/slideshow/slider';
import type { Memorie } from '../../components/slideshow/slide';

const memories: Memorie[] = [
    {
        link: "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg",
        desc: "Une super photo de paysage"
    },
    {
        link: "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg",
        desc: "Une super photo de paysage 2"
    },
    {
        link: "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg",
        desc: "Une super photo de paysage 3"
    }
];

const SlideShow: React.FC = () => {
  return (
    <div>
      <h1>Slideshow</h1>
      <Slider memories={memories}/>
    </div>
  );
};

export default SlideShow;