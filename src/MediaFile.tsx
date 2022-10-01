import { View, Text, Button } from "react-native";
import React from "react";
import { useMediaGetMutation } from "./services/Api";
import * as DocumentPicker from "expo-document-picker";

const MediaFile = () => {
  const [file, setFile] = React.useState({});

  const [mediaGet, { data, isLoading, error }] = useMediaGetMutation();
  var pickDocument = async () => {
    var result = await DocumentPicker.getDocumentAsync({});
    setFile(result);
    // console.log(result.uri);
    console.log(result);
  };
  const Image = {};

  const addFile = async () => {
    mediaGet(file.toString());
    console.log("File", file);
  };

  const sendPicture = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await mediaGet({ formData }).unwrap();
    console.log("formdata", data);
  };

  console.log("data", data ? data : "no");
  console.log("error", error?.error);

  return (
    <View style={{ marginTop: 50, padding: 20 }}>
      <Button title="upload your file" color="black" onPress={pickDocument} />
      <Text>{error?.data?.message}</Text>
      <Text></Text>

      <Button title="Send" color="black" onPress={addFile} />
      <Text></Text>

      <Button title="SendPic" color="black" onPress={sendPicture} />
    </View>
  );
};

export default MediaFile;
