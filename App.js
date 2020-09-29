import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import Header from './src/ortak/Header';
import LoginForm from './src/LoginForm';
import CardSection from './src/ortak/CardSection';
import Spinner from './src/ortak/Spinner';
import Button from './src/ortak/Button';




class App extends Component{
    state= { loggedIn: null };
    componentDidMount() // uygulama ilk açıldığında firebase servisine bağlanarak gerekli yapılandırma(bağlantı) işlemlerini yaptık
    {
    if(!firebase.apps.length){
    firebase.initializeApp({
    apiKey: "AIzaSyCsPO40ZcPy0sMWESHBxOqnUn60yhGzFco",
    authDomain: "authentication-6196b.firebaseapp.com",
    databaseURL: "https://authentication-6196b.firebaseio.com",
    projectId: "authentication-6196b",
    storageBucket: "authentication-6196b.appspot.com",
    messagingSenderId: "988915102203",
    appId: "1:988915102203:web:4650a25a175362ea659b5e",
    measurementId: "G-CZ9QS0R39D"
    });
}

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ loggedIn: true});
        } else {
            this.setState({ loggedIn: false});
        }
    });
    }
  }

clickLogout () {
    firebase.auth().signOut();

}

  renderContent() {
    switch(this.state.loggedIn){
        case true:
        return (
        <CardSection>
         <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
        </CardSection>
        );

        case false:
            return (
                <LoginForm />
            );
        default:
            return (
                <View>
                    <Spinner size="large" />
                </View>
            );
    }
  }

render() {
    return(
        <View>
        <Header headerText="Giriş Ekranı"/>
        {this.renderContent()}
        </View>
    );
}
}

export default App;
