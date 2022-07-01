import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import SendIcon from "@material-ui/icons/Send";
import ClearIcon from "@material-ui/icons/Clear";

import OTPInput, { ResendOTP } from "otp-input-react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function EmailVerifyComponent({ otp_data ,handle_verify_otp}) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [fail, setFail] = React.useState(false);
  const [OTP, setOTP] = useState("");

  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    console.log("button clicked", OTP, otp_data);
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      setFail(false);
      timer.current = window.setTimeout(() => {
        if (OTP === otp_data) {
          console.log("otp true");
          setSuccess(true);
          setLoading(false);
          handle_verify_otp(true)
        } else {
          console.log("otp false");
          setLoading(false);
          setFail(true);
          handle_verify_otp(false)
        }
      }, 2000);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Fab
          aria-label="save"
          className={buttonClassname}
          onClick={handleButtonClick}
        >
          {success === false && fail === false ? <SendIcon /> : ""}
          {success === true && fail === false ? (
            <CheckIcon fontSize="small" />
          ) : (
            ""
          )}

          {fail === true && success === false ? (
            <ClearIcon fontSize="small" style={{ backgroundColor: "red" }} />
          ) : (
            ""
          )}
        </Fab>
        {loading && (
          <CircularProgress size={68} className={classes.fabProgress} />
        )}
      </div>
      <div>
        <OTPInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
        />
        <ResendOTP onResendClick={() => ResendOTP} />
      </div>
    </div>
  );
}
