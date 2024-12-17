import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Google from "expo-auth-session/providers/google";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();
  const [_, response, promptAsync] = Google.useAuthRequest({
    iosClientId: "YOUR_IOS_CLIENT_ID",
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
  });

  const handleGoogleSignIn = async () => {
    await promptAsync();
  };
  const handleTiktokSignIn = async () => {
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.subtitle}>See What's Next.</Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../assets/images/netflix-illustration.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Tagline */}
      <Text style={styles.tagline}>
        Explore the world of Netflix,{"\n"}dive in.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => {
            /* Handle email sign up */
            router.push("/emailSignup");
          }}
        >
          <Text style={styles.emailButtonText}>Sign up with email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
        >
          <Image
            source={require("../assets/images/google.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tiktokButton}
          onPress={handleTiktokSignIn}
        >
          <Image
            source={require("../assets/images/tiktok.png")}
            style={styles.tiktokIcon}
          />
          <Text style={styles.tiktokButtonText}>Sign up with Tiktok</Text>
        </TouchableOpacity>
      </View>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            /* Handle login */
          }}
        >
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  header: {
    marginTop: 80,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#634EFF",
    marginBottom: 4,
    fontFamily: "SpaceMono-Regular",
  },
  subtitle: {
    fontSize: 24,
    color: "#000",
    marginBottom: 20,
  },
  illustrationContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  illustration: {
    width: "100%",
    height: 200,
  },
  tagline: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    gap: 16,
  },
  emailButton: {
    backgroundColor: "#634EFF",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  emailButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  googleButton: {
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  googleButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  tiktokButton: {
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  tiktokIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  tiktokButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#666",
    fontSize: 14,
  },
  loginLink: {
    color: "#634EFF",
    fontSize: 14,
    fontWeight: "500",
  },
});
