import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
export function PlacarGuest() {
  const [ponts2, setPonts2] = useState(0);
  const [change, setChange] = useState(false);

  const Decrementponts2 = () => {
    if (ponts2 == 0) {
      setPonts2(ponts2);
    } else {
      setPonts2(ponts2 - 1);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        height: "45%",
        width: "100%",
      }}
    >
      <View style={styles.boxLeft}>
        <Text style={{ color: "white", fontWeight:"bold", fontSize: 20 }}>
          GUEST
        </Text>

        <View>
          <Text style={styles.displaytimerLeftBottom}>{ponts2}</Text>
        </View>
      </View>
      <View
        style={styles.boxRight}
      >
        <View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            FO     TO
          </Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity
            style={styles.buttonFooterLeftRightTop}
            onPress={() => setPonts2(ponts2 + 1)}
          >
            <Text style={{ color: "yellow", fontSize: 20, fontWeight: "bold"  }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonFooterLeftRightBottom}
            onPress={Decrementponts2}
          >
            <Text style={{ color: "yellow", fontSize: 20, fontWeight: "bold" }}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      
    </View>
  );
}
