import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
const {textStyle,viewStyle} = styles;
return(
    <View style={viewStyle}>
    <Text style={textStyle}>  {props.headerText} </Text>
    </View>
    );
};

const styles = {
  textStyle:{
      fontSize:30
  },
  viewStyle:{
  backgroundColor: '#809FFC',
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15
  }
};

export default Header;
