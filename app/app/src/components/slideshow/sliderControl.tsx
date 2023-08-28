import React from 'react';
import './style.css';

interface SliderControlProps {
    next: () => void
    prev: () => void
}

const SliderControl: React.FC<SliderControlProps> = function({prev, next}: SliderControlProps) {
    return (
        <div>
            <span 
                onClick={() => prev()}
                className="btn-ctrl"
            >Prev</span>
            <span 
                onClick={() => next()}
                className="btn-ctrl"
            >Next</span>
        </div>
    )
};

export default SliderControl;