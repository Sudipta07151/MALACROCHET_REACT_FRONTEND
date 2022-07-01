import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: "60vw",
  },
}));

function YourProfile({ user }) {
  const classes = useStyles();
  const userData =
    user && user.login === true ? JSON.parse(user.login_data) : "";
  const [userName, setuserName] = useState(
    user && user.login === true ? userData.name : ""
  );
  const [email, setEmail] = useState(
    user && user.login === true ? userData.email : ""
  );
  return (
    userData !== "" && (
      <div>
        <Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                User Name
              </InputLabel>
              <Input
                disabled={true}
                id="input-with-icon-adornment"
                value={userName}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
              <Input
                id="input-with-icon-adornment"
                value={email}
                startAdornment={
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                }
                disabled={true}
              />
            </FormControl>
          </Grid>
        </Grid>
        {/* <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl> */}
      </div>
    )
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.getLoginReducers,
  };
};

export default connect(mapStateToProps, {})(YourProfile);
