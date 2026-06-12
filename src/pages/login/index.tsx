import React from "react";

import {
  Text,
  View,
  Image
} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo.png';

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
          source={Logo}
        />
      </View>
      <View style={style.boxMid}>
        <Text>mid</Text>
      </View>
      <View style={style.boxBottom}>
        <Text>bottom</Text>
      </View>
    </View>
  );
}