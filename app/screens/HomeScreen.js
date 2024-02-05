import React from 'react';
import { KeyboardAvoidingView, Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { FIREBASE_AUTH } from '../../Firebase';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const HomeScreen = () => {
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      });
  };

  return (
    <ImageBackground
      style={styles.container}
      behavior='padding'
      source={require("../assets/background.jpg")}
    >
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          
          <Button color="rgb(153,252,255)" title="Sign Out" onPress={signOut} />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
