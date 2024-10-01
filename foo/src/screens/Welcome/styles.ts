import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  containerHeader: {
    alignItems: "center",
    marginBottom: 40,
  },
  containerActions: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "semibold",
    color: "#6F3CC3",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: "#6F3CC3",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "transparent",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6F3CC3",
  },
  registerButtonText: {
    color: "#6F3CC3",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
