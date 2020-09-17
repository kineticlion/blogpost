import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id + ""}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}>
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.id} - {item.title}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name='trash' style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Text>Content : {item.content}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather
          style={{ marginRight: 20 }}
          name='plus'
          size={30}
          color='black'
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderTopWidth: 1,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  content: {
    flexDirection: "column",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});

export default IndexScreen;
