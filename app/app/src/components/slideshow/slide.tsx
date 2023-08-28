import React from 'react';

export interface Memorie {
    link: string
    desc: string
}

interface SlideProps {
    memorie: Memorie
    num: number
}

const Slide: React.FC<SlideProps> = function({memorie, num}: SlideProps) {
    return (
        <div>
            <img src={memorie.link} alt={`image ${num}`} />
            <div>
                <p>{memorie.desc}</p>
            </div>
        </div>
    )
}

export default Slide;