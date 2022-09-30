import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSigninMutation } from "./services/Api";
import { useNavigation } from "@react-navigation/native";
const Signin = () => {
  const [getData, { data: post, isLoading: loading, error: Error }] =
    useSigninMutation();
  console.log(post);
  const [name, setName] = useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

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

    console.log(post ? post._id : "no");
    // console.log(name, password);
    // } catch (err) {
    //   console.log(err);
    // }
  }
  console.log(post);
  console.log(Error?.data);

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
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
        title="Sign in"
        onPress={() => {
          // if (post?.email === email) {
          // navigation.navigate("Signup");
          handleAdd();
          // }
          // } else {
          //   Alert.alert("Your cridentials is wrong");
          // }
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={{ fontSize: 20, alignSelf: "flex-end", color: "blue" }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      {Error ? (
        <Text>Error</Text>
      ) : loading ? (
        <Text>Loading</Text>
      ) : post ? (
        <Text>{post._id}</Text>
      ) : (
        <Text>no data</Text>
      )}
    </View>
  );
};

export default Signin;
