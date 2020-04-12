import React, { Component } from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import styles from "./styles";

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">Sign in to continue</Typography>
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
                    className={classes.textfield}
                    fullWidth
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    type="submit"
                  >
                    Login
                  </Button>
                  <div className="pt-1 text-md-center">
                    <Link to="/signup">Sign Account</Link>
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
export default withStyles(styles)(LoginPage);
