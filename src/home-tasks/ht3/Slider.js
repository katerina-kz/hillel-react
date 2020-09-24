import React, { useState } from 'react';
import GlideJs from './GlideJs';
import './Slider.css'
import { Container } from "semantic-ui-react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';


function Slider(props) {
    const [type, setType] = useState( 'carousel');
    const [perView, setPerView] = useState(1);
    const [autoplay, setAutoplay] = useState(2000);
    const [hoverpause, setHoverpause] = useState(true);
    const [bullets, setBullets] = useState(false);
    const [controls, setControls] = useState(true);
    const [value, setValue] = useState('controls');
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
        console.log(value);
        if (value === 'controls') {
            setControls(false);
            setBullets(true);
        } else if (value === 'bullets') {
            setControls(true);
            setBullets(false);
        }
    };

    const handleChangeSwitchers = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        state.checkedA ? setAutoplay(false) : setAutoplay(2000);
    };

    return (
        <Container className='slider'>
                <GlideJs options={{ type, perView, autoplay, hoverpause, bullets, controls }}>
                    <img className="full-with-img" src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg" alt=""/>
                    <img className="full-with-img" src="https://www.jssor.com/demos/img/gallery/980x380/001.jpg" alt=""/>
                    <img className="full-with-img" src="https://albailassan.com/jquery/img/landscape/01.jpg" alt=""/>
                    <img className="full-with-img" src="https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hnck0391.jpg" alt=""/>
                    <img className="full-with-img" src="https://www.wonderplugin.com/wp-content/uploads/2019/05/sydney-opera-house.jpg" alt=""/>
                </GlideJs>
                <FormControl component="fieldset" className='form-div'>
                    <div className='radio-controls'>
                        <FormLabel component="legend">Choose controls</FormLabel>
                        <RadioGroup aria-label="controls-aria" name="type" value={value} onChange={handleChangeRadio}>
                            <FormControlLabel value="controls" control={<Radio />} label="Controls" />
                            <FormControlLabel value="bullets" control={<Radio />} label="Bullets" />
                        </RadioGroup>
                    </div>
                    <div className='switcher-autoplay'>
                        <FormControlLabel
                            control={<Switch checked={state.checkedA} onChange={handleChangeSwitchers} name="checkedA" />}
                            label="Autoplay"
                        />
                    </div>
                </FormControl>
        </Container>
    );
}

export default Slider;