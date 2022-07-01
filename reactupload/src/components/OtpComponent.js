import OTPInput, { ResendOTP } from "otp-input-react";

import React, { useState } from "react";

export default function OtpComponent({ getDataFromOTPCOmponent }) {
  const [OTP, setOTP] = useState("");

  return (
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
  );
}
