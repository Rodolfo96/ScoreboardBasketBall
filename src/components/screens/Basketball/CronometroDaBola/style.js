import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  displaytimerTop: {
    color: "red",
    fontSize: 100,
    fontStyle: "normal",
  },
  displaytimerLeftBottom: {
    color: "red",
    fontSize: 100,
  },
  displaytimerRightBottom: {
    color: "red",
    fontSize: 100,
  },
  displaytimerFooterMiddleBottom: {
    color: "green",
    fontSize: 80,
  },
  header: {
    height: "46%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuAndEdit: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderWidth: 3,
    borderRadius: 90,
    borderColor: "white",
  },
  footer: {
    height: "46%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxButtonFooterMiddle: {
    width:'100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
  },
  buttonFooterLeftRightTop: {
    height: 50,
    width: 24,
    borderColor: "yellow",
    borderWidth: 1,
    marginBottom: 1,
  },
  buttonFooterLeftRightBottom: {
    height: 30,
    width: 25,
    borderColor: "yellow",
    borderWidth: 1,
    marginBottom: 1,
  },
  buttonFooterMiddle1: {
    height: 40,
    width: 40,
    alignItems:'center',
    justifyContent:'center',
    borderTopColor:'green',
    borderLeftColor:'green',
    borderBottomColor:'green',
    borderWidth: 3,
    marginBottom: 1,
  },
  buttonFooterMiddle2: {
    height: 40,
    width: 80,
    alignItems:'center',
    justifyContent:'center',
    borderColor: "green",
    borderWidth: 3,
    marginBottom: 1,
  },
});
