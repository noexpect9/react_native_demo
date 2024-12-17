import { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Alert,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default function Work() {
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);
  const onPressButton = () => {
    router.push("/");
  };

  function getMoviesFromApiAsync() {
    return fetch("https://facebook.github.io/react-native/movies.json")
      .then((response) => response.json())
      .then((responseJson) => {
        setMovies(responseJson.movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={onPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text>out login</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
