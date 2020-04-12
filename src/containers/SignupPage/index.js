import React, { Component } from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import styles from "./styles";

class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">Signup Account</Typography>
                  <EmailIcon className={classes.Icon} />
                  <TextField
                    id="email"
                    label="Email"
                    className={classes.textfield}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    className={classes.textfield}
                    fullWidth
                    margin="normal"
                  />
                   <TextField
                    id="cpassword"
                    label="Confirm Password"
                    type="password"
                    className={classes.textfield}
                    fullWidth
                    margin="normal"
                  />
                  <FormControlLabel
                    control={<Checkbox value="agree"/>}
                    label="Agree terms"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    type="submit"
                  >
                    Signup
                  </Button>
                  <div className="pt-1 text-md-center">
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(SignupPage);
