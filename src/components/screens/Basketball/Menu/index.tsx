import { TouchableOpacity, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./style";
export function Menu() {
  return (
    <View
      style={{
        height: "100%",
        width: "30%",
        paddingVertical: 15,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        
      }}
    >
      <Entypo name="arrow-bold-left" size={45} color="gray" />

      <TouchableOpacity style={styles.menuAndEdit}>
        <Text style={{ color: "white" }}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
