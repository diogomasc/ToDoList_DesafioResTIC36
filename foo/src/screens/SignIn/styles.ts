import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  headerBackButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#6B6572",
  },
  headerLogo: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  logoTextContainer: {
    alignItems: "center",
    marginLeft: 10,
  },
  icon: {
    alignSelf: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6F3CC3",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 32,
    color: "#6F3CC3",
    fontWeight: "semibold",
    textAlign: "center",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#6F3CC3",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#6B6572",
    fontSize: 14,
    textAlign: "center",
    marginTop: 15,
  },
  createAccount: {
    color: "#6F3CC3",
    fontSize: 14,
    textAlign: "center",
    marginTop: 15,
  },
  errorText: {
    fontSize: 11,
    color: "red",
    marginTop: 4,
    marginBottom: 4,
    alignSelf: "flex-start",
  },
});

export default styles;
