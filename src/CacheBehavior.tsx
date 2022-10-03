import { View, Text, TextInput, Button } from "react-native";
import React, { useEffect } from "react";
import { useGetPokemonByNameQuery, useGetUserMutation } from "./services/Api";

const CacheBehavior = () => {
  const { data, isLoading, error } = useGetPokemonByNameQuery("bulbasaur");

  console.log("data1", data);
  const [getUser, { data: post1, isLoading: loading1, error: Error1 }] =
    useGetUserMutation();

  const {
    data: post,
    isLoading: loading,
    error: Error,
    refetch: refetch,
  } = useGetPokemonByNameQuery(
    "bulbasaur",
    { count: 5 },
    { refetchOnMountOrArgChange: true }
  );
  addPost({ id: 1, name: "Example" })
    .unwrap()
    .then((payload) => console.log("fulfilled", payload))
    .catch((error) => console.error("rejected", error));

  function handleRefetchOne() {
    // force re-fetches the data
    refetch();
  }

  useEffect(() => {
    getUser("62df857b2fcb39eab8d2c2dd");
  }, []);
  console.log("Data2", post?.post);

  console.log("error", post?.Error?.message);

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      {error ? (
        <Text>Error</Text>
      ) : isLoading ? (
        <Text>loading</Text>
      ) : data ? (
        <Text>{data.name}</Text>
      ) : (
        <Text>no data</Text>
      )}

      <Text></Text>
      {Error ? (
        <Text>Error</Text>
      ) : loading ? (
        <Text>loading</Text>
      ) : post ? (
        <Text>{post.name}</Text>
      ) : (
        <Text>no data</Text>
      )}

      <Button
        title="refetch"
        color="black"
        onPress={() => {
          handleRefetchOne();
        }}
      />
    </View>
  );
};

export default CacheBehavior;
