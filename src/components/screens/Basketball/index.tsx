import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, SafeAreaView, Image } from "react-native";
import { CountdownTimerBall } from "./CronometroDaBola/CronometroBola";
import { CountdownTimerQuarter } from "./CronometroDoQuarter/CronometroQuarter";
import { PlacarHome } from "./PlacarHome";
import { PlacarGuest } from "./PlacarGuest";
import { Menu } from "./Menu";
import { Edit } from "./Edit";
import { styles } from "./styles";

export default function ScoreBoardBasketball() {
  const [ponts1, setPonts1] = useState(10);
  const [ponts2, setPonts2] = useState(10);
  const [change, setChange] = useState(false);
  const [ballTimeActive, setBallTimeActive] = useState(false);

  const Decrementponts1 = () => {
    if (ponts1 == 0) {
      setPonts1(ponts2);
    } else {
      setPonts1(ponts1 - 1);
    }
  };
  const Decrementponts2 = () => {
    if (ponts2 == 0) {
      setPonts2(ponts2);
    } else {
      setPonts2(ponts2 - 1);
    }
  };

  const handleStopTime = () => {
    setBallTimeActive(!ballTimeActive);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" />
      <View style={{ height: "100%", width: "39%" }}>
        <View
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ height: "55%", width: "100%", flexDirection: "row" }}>
            <Menu />
            <View
              style={{
                height: "100%",
                width: "70%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../imgs/gdr.png")}
                style={{ width: 200, height: 200 }}
              />
            </View>
          </View>
          <PlacarHome />
        </View>
      </View>
      <View
        style={{
          height: "100%",
          width: "22%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CountdownTimerQuarter stopBallTime={handleStopTime} />
        <CountdownTimerBall ballTimeIsActive={ballTimeActive} />
      </View>

      <View style={{ height: "100%", width: "39%" }}>
        <View
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", height: "55%", width: "100%" }}>
            <View
              style={{
                height: "100%",
                width: "70%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../imgs/gdr.png")}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <Edit />
          </View>

          <PlacarGuest />
        </View>
      </View>
    </SafeAreaView>
  );
}
