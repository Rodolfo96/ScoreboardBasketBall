import { TouchableOpacity, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./style";
export function Edit() {
  return (
    <View
      style={{
        height: "100%",
        width: "30%",
        paddingVertical: 15,
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
        
      }}
    >
      <Entypo name="arrow-bold-right" size={45} color="gray" />

      <TouchableOpacity style={styles.menuAndEdit}>
        <Text style={{ color: "white" }}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}
