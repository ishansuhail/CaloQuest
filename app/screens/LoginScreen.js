import { ActivityIndicator, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_AUTH } from '../../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if (user) {
                navigation.navigate("Home")
            }
        })

        return unsubscribe
    })

    const signIn = async() => {
        setLoading(true);
        try{
            await signInWithEmailAndPassword(auth, email, password)
        } catch(error){
            console.log(error)
            alert('Sign in failed: ' + error.message);
        }finally{
            setLoading(false);
        }
    }

    const signUp = async() => {
        setLoading(true);
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        } catch(error){
            console.log(error)
            alert('Sign in failed: ' + error.message);
        }finally{
            setLoading(false);
        }
    }

    
  return (
        <ImageBackground
        style={styles.container}
        behavior='padding'
        source={require("../assets/background.jpg")}
        >
        <KeyboardAvoidingView behavior='padding'>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>CaloQuest</Text>
                <TextInput
                    placeholder='Email'
                    value={email}
                    autoCapitalize='none'
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    autoCapitalize='none'
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#white" />
            ) : (
                <>
                    <Button color="white" title="Login" onPress={signIn} />
                    <Button color="white" title="Register" onPress={signUp} />
                </>
            )}
        </KeyboardAvoidingView>
    </ImageBackground>


  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    inputContainer:{
        width: '80%'
    },
    button:{
        backgroundColor: "rgb(153,252,255)",
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        

    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    buttonOutline:{
        marginTop: 5,
        borderWidth: 2,
        backgroundColor: 'white',
        borderColor: "rgb(153,252,255)"
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16
        
    },
    buttonOutlineText: {
        color: "rgb(153,252,255)",
        fontWeight: '700',
        fontSize: 16
    },
    
    text:{
        fontSize: 48,
        color: "rgb(153,252,255)",
        marginBottom: 150,
        marginTop: 150
    }

})