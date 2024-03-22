import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boxLeft: {
    height: "100%",
    width: "30%",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  displaytimerLeftBottom: {
    color: "red",
    fontSize: 100,
  },
  boxRight: {
    height: "100%",
    width: "70%",
    alignItems: "center",
  },
  buttonFooterLeftRightBottom: {
    height: 40,
    width: 50,
    alignItems:'center',
    borderLeftColor:"yellow",
    borderRightColor:"yellow",
    borderBottomColor:"yellow",
    borderWidth: 4,
    marginBottom: 1,
  },
  buttonFooterLeftRightTop: {
    height: 70,
    width: 50,
    alignItems:'center',
    justifyContent:'center',
    borderColor: "yellow",
    borderWidth: 4,
    marginBottom: 1,
  },
});
