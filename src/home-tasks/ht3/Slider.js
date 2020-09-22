import React, { useState, useEffect } from 'react';
import GlideJs from './GlideJs';
import './Slider.css'
import { Container, Form, Input, Checkbox  } from "semantic-ui-react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function Slider(props) {
    const [type, setType] = useState( 'carousel');
    const [perView, setPerView] = useState(1);
    const [autoplay, setAutoplay] = useState(2000);
    const [hoverpause, setHoverpause] = useState(true);
    const [bullets, setBullets] = useState(false);
    const [controls, setControls] = useState(true);
    const [value, setValue] = useState('controls');

    const handleChange = (event) => {
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

    return (
        <Container className='slider'>
                <GlideJs options={{ type, perView, autoplay, hoverpause, bullets, controls }}>

                    <img className="full-with-img" src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg" alt=""/>
                    <img className="full-with-img" src="https://www.jssor.com/demos/img/gallery/980x380/001.jpg" alt=""/>
                    <img className="full-with-img" src="https://albailassan.com/jquery/img/landscape/01.jpg" alt=""/>
                    <img className="full-with-img" src="https://lh3.googleusercontent.com/proxy/lWAEcfX5KB-Th4JWQuJwe3rrPc37-nCpeRyCC7sH1P9Gqv7YCx8zI0xXvE0KDAJ_s75Pj30atwgZMKEiYhvJr1c" alt=""/>
                    <img className="full-with-img" src="https://www.wonderplugin.com/wp-content/uploads/2019/05/sydney-opera-house.jpg" alt=""/>
                </GlideJs>
            {/*<Form>*/}
            {/*<Form.Field>*/}
            {/*    <Input value={perView} type='numeric' onChange={(e) => this.setState({ perView: e.target.value })} />*/}
            {/*</Form.Field>*/}
            {/*<Form.Field>*/}
            {/*    <Checkbox label='Autoplay' checked={autoplay} onChange={() => this.setState({ autoplay: !autoplay })} />*/}
            {/*</Form.Field>*/}
            {/*    <Form.Field>*/}
            {/*        Select controls:*/}
            {/*    </Form.Field>*/}

            {/*    <Form.Field>*/}
            {/*    <Radio*/}
            {/*        label='Controls'*/}
            {/*        name='type'*/}
            {/*        value='controls'*/}
            {/*        checked={controls.value === 'controls'}*/}
            {/*        onChange={changeControls}*/}
            {/*    />*/}
            {/*    </Form.Field>*/}
            {/*    <Form.Field>*/}
            {/*    <Radio*/}
            {/*        label='Bullets'*/}
            {/*        name='type'*/}
            {/*        value='bullets'*/}
            {/*        checked={bullets.value === 'bullets'}*/}
            {/*        onChange={changeControls}*/}
            {/*    />*/}
            {/*    </Form.Field>*/}

                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose controls</FormLabel>
                    <RadioGroup aria-label="controls-aria" name="type" value={value} onChange={handleChange}>
                        <FormControlLabel value="controls" control={<Radio />} label="Controls" />
                        <FormControlLabel value="bullets" control={<Radio />} label="Bullets" />
                    </RadioGroup>
                </FormControl>

            {/*</Form>*/}

        </Container>
    );
}

export default Slider;