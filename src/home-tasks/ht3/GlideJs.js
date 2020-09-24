import React,  { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import "@glidejs/glide/dist/css/glide.theme.min.css";

function GlideJs(props) {
    const {children, options} = props;
    const slider = useRef('');
    const glider = useRef('');

    useEffect(() => {
        glider.current = new Glide(slider.current, options).mount()
        return function clean() {
            glider.current.destroy()
        }
    });

    useEffect(() => {
        glider.current.update(options)
    }, [options]);

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


