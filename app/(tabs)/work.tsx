import { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Alert,
  TouchableHighlight,
  StyleSheet,
  ToastAndroid,
  Button,
} from "react-native";
import { useRouter } from "expo-router";
import Toast from "react-native-root-toast";

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
  const onPressButton = () => {
    router.push("/");
  };
  const onPressToast = () => {
    Toast.show("Request failed to send.", {
      duration: Toast.durations.LONG,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={onPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text>out login</Text>
        </View>
      </TouchableHighlight>
      <Button onPress={onPressToast} title="toast" />
    </SafeAreaView>
  );
}
