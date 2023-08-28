"use client"
import React, { useState } from 'react';

import Slide from './slide';
import SliderControl from './sliderControl';
import type { Memorie } from './slide';

interface SliderProps {
    memories: Memorie[]
}

const Slider: React.FC<SliderProps> = function({memories}: SliderProps) {
    const [num, setNum] = useState(0);

    return (
        <div>
            <Slide memorie={memories[num]} num={num}/>
            <span>{`${num+1} / ${memories.length}`}</span>
            <SliderControl 
                prev={() => setNum(n => n > 0 ? n-1 : n)}
                next={() => setNum(n => n+1 < memories.length ? n+1 : n)}
            />
        </div>
    )
}

export default Slider;