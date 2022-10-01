import { View, Text, Button } from "react-native";
import React from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import OTPTextInput from "react-native-otp-textinput";
import { useOtpGetMutation } from "./services/Api";
const Otp = ({ route }) => {
  const [otpGet, { data, isLoading, error }] = useOtpGetMutation();

  const { OtpId } = route.params;
  //   console.log("OTP ID ==>", OtpId);

  const OtpFun = () => {
    otpGet(OtpId);
    console.log(data ? data : "no data");
    console.log("error", error?.data);
  };

  const HandleNext = () => {};

  return (
    <View style={{ flex: 1, marginHorizontal: 20, justifyContent: "center" }}>
      <OTPTextInput />
      {/* <OTPInputView
        style={{ flex: 0.1 }}
        codeInputFieldStyle={{
          height: 60,
          width: 60,
          borderRadius: 1,
          borderColor: "black",
          color: "black",
        }}
        pinCount={4}
      /> */}
      <Button
        onPress={() => {
          OtpFun();
        }}
        title="Next"
      ></Button>
      {data ? <Text>{data?.data}</Text> : <Text>no OTP</Text>}
    </View>
  );
};

export default Otp;
