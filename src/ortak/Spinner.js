import React from 'react';
import { ActivityIndicator, View } from "react-native";


const Spinner = () => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size='large' color="#00ff00"/>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Spinner;

