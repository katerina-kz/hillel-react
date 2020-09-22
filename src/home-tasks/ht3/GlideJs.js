import React,  { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { usePrev } from './CustomHooks/usePrev';

import PropTypes from 'prop-types';

Glide.propTypes = {

};

function GlideJs(props) {
    const {children, options} = props;
    const slider = useRef(null);
    const glider = null;

    const prevOpt = usePrev({options});
    console.log(prevOpt);
    useEffect((slider, glider) => {
        glider = new Glide('.glide', options).mount()

        // if(options !==  prevOpt.options) {
        //     glider.update(options)
        // }

        return function clean() {
            glider.destroy()
        }
    });

    return (
        <div ref={slider} className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {children.map(img =>  <li className="glide__slide">{img}</li>)}
                </ul>
            </div>
            {options.controls &&
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
            }
            {options.bullets &&
            <div className="glide__bullets" data-glide-el="controls[nav]">
                {children.map((_, i) => <button key={i} className="glide__bullet" data-glide-dir={`=${i}`} /> )}
            </div>
            }
        </div>
    );
}

export default GlideJs;


