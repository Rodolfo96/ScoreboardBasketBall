import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CountdownTimerQuarterProps {
  stopBallTime: () => void;
}

export function CountdownTimerQuarter({stopBallTime}: CountdownTimerQuarterProps) {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };



  const handleTimer = () => {
    setIsActive((oldstate) => !oldstate)
    stopBallTime();
  }

  return (
    <View style={{width:'100%', height: "55%",alignItems: "center",justifyContent:"center" }}>
      
    <TouchableOpacity onPress={handleTimer}>
      <Text
        style={{ color: "red", fontSize: 60 }}
      >
        {`${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}
      </Text>
      </TouchableOpacity>
      <Text style={{color:'red',fontSize:30}}>
        PERIODO
      </Text>
    </View>
  );
}
