import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React from "react";

const radioButton = ({ input,  meta: { touched, invalid, error }, ...rest}) => (
  <FormControl>
    <RadioGroup {...input} {...rest}  error={touched && invalid}>
      <FormControlLabel value="1" control={<Radio />} label="Ready"/>
      <FormControlLabel value="2" control={<Radio />} label="In Process" />
      <FormControlLabel value="3" control={<Radio />} label="Completed" />
    </RadioGroup>
  </FormControl>
);

export default radioButton;
