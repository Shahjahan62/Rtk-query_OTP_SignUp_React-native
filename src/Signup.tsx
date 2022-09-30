import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useOtpGetMutation, useSignupMutation } from "./services/Api";
import { useNavigation } from "@react-navigation/native";
const Signup = () => {
  const [ids, setId] = useState("");
  const [getData, { data: post, isLoading: loading, error: Error }] =
    useSignupMutation();

  const id: any = "62df857b2fcb39eab8d2c2dd";
  const [otpGet, { data: otpData, isLoading: loading2, error: Error2 }] =
    useOtpGetMutation(id);

  useEffect(() => {
    if (post) {
      setId(post._id);
    }
  }, [post]);
  console.log(ids);

  const [name, setName] = useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  const navigation = useNavigation();

  // const handleOTP = () => {
  //   otpGet(email2);
  // };

  const Data = {
    name: name,
    email: email,
    password: password,
  };
  const Data2 = {
    name: "shahjahan",
    email: "shah1@gmail.com",
    password: "1225534",
  };

  function handleAdd() {
    // try {
    getData(Data);
    if (post) {
      console.log("pos,", post);
    } else {
      console.log("no data");
    }
    // console.log(name, password);
    // } catch (err) {
    //   console.log(err);
    // }
  }
  // console.log(post);
  console.log(Error?.data);
  console.log(Error2?.otpData);

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={{
          borderWidth: 0.5,
          marginVertical: 10,
          height: 50,
          paddingLeft: 20,
        }}
        placeholder="name"
        keyboardType="default"
      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{
          borderWidth: 0.5,
          marginVertical: 10,
          height: 50,
          paddingLeft: 20,
        }}
        placeholder="email"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{
          borderWidth: 0.5,
          height: 50,
          marginVertical: 10,

          paddingLeft: 20,
        }}
        placeholder="password"
        keyboardType="default"
      />

      <Button
        title="Sign up"
        onPress={() => {
          handleAdd(),
            navigation.navigate("Otp", {
              OtpId: ids,
            });

          console.log("ID", post ? post._id : "no");
        }}
      />

      <TextInput
        value={email2}
        onChangeText={(text) => setEmail2(text)}
        style={{
          borderWidth: 0.5,
          marginVertical: 10,
          height: 50,
          paddingLeft: 20,
        }}
        placeholder="Enter email"
        keyboardType="email-address"
      />
      <TouchableOpacity onPress={() => {}}>
        <Text>Send OTP</Text>
      </TouchableOpacity>

      {Error ? (
        <Text>{Error?.otpData}</Text>
      ) : loading ? (
        <Text>Loading</Text>
      ) : post ? (
        <Text>{otpData}</Text>
      ) : (
        <Text>no data</Text>
      )}
    </View>
  );
};

export default Signup;
