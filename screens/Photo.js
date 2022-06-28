import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { ScrollView } from "react-native";
import { RefreshControl } from "react-native";
import PhotoComponent from "../components/PhotoComponent";
import ScreenLayout from "../components/ScreenLayout";
import { PHOTO_FRAGMENT } from "../fragments";

const SEE_PHOTO = gql`
  query seePhoto($id: Int!) {
    seePhoto(id: $id) {
      ...PhotoFragment
      user {
        id
        username
        avatar
      }
      caption
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
`;

export default function PhotoScreen({ route }) {
  const { data, loading, refetch } = useQuery(SEE_PHOTO, {
    variables: {
      id: route?.params?.photoId,
    },
  });
  const [refreshing, setRefreshing] = useState();
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <ScreenLayout loading={loading}>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
        style={{ backgroundColor: "black" }}
        contentContainerStyle={{
          backgroundColor: "black",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PhotoComponent {...data?.seePhoto} />
      </ScrollView>
    </ScreenLayout>
  );
}
