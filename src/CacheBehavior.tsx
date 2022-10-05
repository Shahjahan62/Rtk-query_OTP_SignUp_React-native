import { View, Text, TextInput, Button, ScrollView } from "react-native";
import React, { useEffect } from "react";
import {
  useGetPokemonByNameQuery,
  useGetUserMutation,
  useGetallMutation,
} from "./services/Api";
//

const CacheBehavior = () => {
  // const { data, isLoading, error } = useGetPokemonByNameQuery("bulbasaur");

  const {
    data: post,
    isLoading: loading,
    error: Error,
    refetch: refetch,
  } = useGetPokemonByNameQuery<any>();
  var [getall, { data }] = useGetallMutation<any>();
  console.log("data1", post);
  useEffect(() => {
    getall({});
  }, []);
  // const [getUser, { data: post1, isLoading: loading1, error: Error1 }] =
  //   useGetUserMutation();

  // const {
  //   data: post,
  //   isLoading: loading,
  //   error: Error,
  //   refetch: refetch,
  // } = useGetPokemonByNameQuery(
  //   "bulbasaur",
  //   { count: 5 },
  //   { refetchOnMountOrArgChange: true }
  // );

  function handleRefetchOne() {
    // force re-fetches the data
    refetch();
  }

  // useEffect(() => {
  //   getUser("62df857b2fcb39eab8d2c2dd");
  // }, []);

  console.log("error", post?.Error?.message);

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      {Error ? (
        <Text>Error</Text>
      ) : loading ? (
        <Text>loading</Text>
      ) : post ? (
        <Text>{post.attendence}</Text>
      ) : (
        <Text>no data</Text>
      )}
      <ScrollView style={{ height: 200 }}>
        {post?.map((item: any, index: any) => (
          <Text>{item.attendence}</Text>
        ))}
      </ScrollView>

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
