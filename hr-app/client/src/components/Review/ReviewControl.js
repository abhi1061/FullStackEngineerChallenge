import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function ReviewControl(props) {
    const { name, value, handleChange } = props;
    return (
        <FormControl component="fieldset">
            <RadioGroup
                aria-label={name}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="1" control={<Radio />} label="Poor" />
                <FormControlLabel value="2" control={<Radio />} label="Fair" />
                <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Satisfactory"
                />
                <FormControlLabel value="4" control={<Radio />} label="Good" />
                <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="Excellent"
                />
            </RadioGroup>
        </FormControl>
    );
}
