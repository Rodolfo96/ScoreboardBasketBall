import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function CountdownTimerBall({ballTimeIsActive}: {ballTimeIsActive: boolean}) {
  const [seconds, setSeconds] = useState(7);
  const [miliseconds, setMilliseconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  
  useEffect(() => {
    let interval;
    if (isActive || !!ballTimeIsActive ) {
      interval = setInterval(() => {
        if (miliseconds === 0) {
          if (seconds === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setSeconds(seconds - 1);
            setMilliseconds(10);
          }
        } else {
          setMilliseconds(miliseconds - 1);
        }
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, miliseconds, seconds,ballTimeIsActive]);
  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const stopTimer14 = () => {
    setSeconds(14);
    setIsActive(false);
  };

  const resetTimer = () => {
    setSeconds(24);
  };

  const handleTimer = () => {
    if (isActive) {
      stopTimer();
      return;
    }
    startTimer()
  }

  return (
    <View
      style={{justifyContent: "center", alignItems: "center", width: "100%",height:'45%' }}
    >
    <TouchableOpacity >
       <View style={{width:'100%',justifyContent: "center", alignItems: "center"}}>
       {seconds > 5 ? (<Text style={{ color: "green", fontSize:70}}>
              {`${seconds.toString().padStart(2, "0")}`}
            </Text>) : (<Text style={{ color: "green", fontSize:70}}>
              {`${seconds.toString().padStart(2, "0")}.${miliseconds.toString()}`}
            </Text>)}
        </View>
      </TouchableOpacity>

      <View style={styles.boxButtonFooterMiddle}>
        <TouchableOpacity
          style={styles.buttonFooterMiddle1}
          onPress={stopTimer14}
        >
          <Text style={{ color: "green",fontSize: 20, fontWeight: "bold" }}> 14</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFooterMiddle2}
          onPress={resetTimer}
        >
          <Text style={{ color: "green",fontSize: 20, fontWeight: "bold" }}> Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
