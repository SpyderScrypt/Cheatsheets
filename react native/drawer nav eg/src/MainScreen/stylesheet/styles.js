import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#EEEEFF",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 15
  },
  tilesContainer: {
    flex: 1
  },
  areaContainer: {
    flex: 1,
    paddingTop: 15
  },
  rateContainer: {
    flex: 1,
    paddingTop: 15
  },
  hr: {
    // borderBottomColor: "#9370DB",
    // borderBottomWidth: 2,
    marginTop: 35,
    marginBottom: 0,
    backgroundColor: "#9370DB",
    height: 3,
    width: 300,
    alignSelf: "center"
  },
  mainLabel: { textAlign: "center" },
  resultContainer: {
    height: 200,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#9370DB",
    padding: 5,
    marginBottom: 5
  },
  resultTitleText: {
    color: "purple",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  resultText: {
    color: "purple",
    fontSize: 15,
    fontWeight: "bold"
  },
  button: {
    marginTop: 10,
    marginBottom: 10
  },
  input: { borderWidth: 1, borderRadius: 10, borderColor: "green" }
});

export default styles;
