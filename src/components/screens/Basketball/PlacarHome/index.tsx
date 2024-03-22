import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
export function PlacarHome() {
  const [ponts1, setPonts1] = useState(0);
  const [change, setChange] = useState(false);

  const Decrementponts1 = () => {
    if (ponts1 == 0) {
      setPonts1(ponts1);
    } else {
      setPonts1(ponts1 - 1);
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
        <View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            FO    TO
          </Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity
            style={styles.buttonFooterLeftRightTop}
            onPress={() => setPonts1(ponts1 + 1)}
          >
            <Text style={{color: "yellow", fontSize: 20, fontWeight: "bold"  }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonFooterLeftRightBottom}
            onPress={Decrementponts1}
          >
            <Text style={{ color: "yellow", fontSize: 20, fontWeight: "bold"  }}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boxRight}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          HOME
        </Text>

        <View>
          <Text style={styles.displaytimerLeftBottom}>{ponts1}</Text>
        </View>
      </View>
    </View>
  );
}
