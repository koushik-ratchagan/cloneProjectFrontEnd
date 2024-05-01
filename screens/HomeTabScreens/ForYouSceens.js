import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useEffect, useMemo } from "react";
import { data } from "../../dummyJson";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/PostsRedux/PostAction";
import { isArrayNonEmpty } from "../../helpers/ProjectHelpers";

const ForYouSceens = () => {
  const dispatch = useDispatch();

  const { allPosts } = useSelector((state) => ({
    allPosts: state?.PostReducer?.allPosts,
  }));

  const memoizedStates = useMemo(() => allPosts, [allPosts]);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  const onRefresh = () => {
    dispatch(getPost());
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 18,
          flexWrap: "wrap",
          paddingVertical: 10,
        }}
      >
        <View style={{ width: 50, marginRight: 8 }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={{ uri: item?.userProfile }}
          ></Image>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text>{item?.user_Name}</Text>
            <Text>{item?.user_Tag}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text>{item?.post_description}</Text>
          </View>
          <View>
            <Image
              style={{ width: "100%", height: 180, borderRadius: 10 }}
              source={{
                uri: `https://storage.googleapis.com/twtcloneimages/${item?.post_Image}`,
              }}
            ></Image>
          </View>
        </View>
      </View>
    );
  };

  const renderList = () => {
    return (
      <FlatList
        refreshControl={<RefreshControl onRefresh={onRefresh} />}
        data={allPosts}
        key={(item) => item.id}
        renderItem={renderItem}
      />
    );
  };

  return <View>{renderList()}</View>;
};

export default ForYouSceens;
