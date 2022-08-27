import React, { useState } from "react";
import { Image, View, Text, TextInput, StyleSheet, ScrollView, Picker } from "react-native";
import register from '../ApiServices/registerUser'
import { Button } from "react-native-paper";
import { gstyles } from '../styleSheet/styles'
import validatePin from "../utils/Pin validator";
import { HeaderOneBtn } from "./StudentOpts";
import validateName from "../utils/Validate UserName";


export default function StudentSignUp({ navigation }) {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Class, setClass] = useState('')
    const [Pin, setPin] = useState('')
    const [pinBorder, setpinBorder] = useState('#2196F3')
    const [pin2Border, setpin2Border] = useState('#2196F3')
    const [fnborder, setfnborder] = useState('#2196F3')
    const [lnborder, setlnborder] = useState('#2196F3')
    const [errormsg, setErrormsg] = useState('')
    const [fnBorderWidth, setfnBorderWidth] = useState(1)
    const [lnBorderWidth, setlnBorderWidth] = useState(1)
    const [pinBorderWidth, setpinBorderWidth] = useState(1)
    const [pin2BorderWidth, setpin2BorderWidth] = useState(1)
    const [pickerBorder, setPickerBorder] = useState('#2196F3')
    const [pickerBorderWidth, setPickerBorderWidth] = useState(1)
    const [confirmedPin, setConfirmedPin] = useState('')

    const studentData = {
        first_name: FirstName.toUpperCase().trim(),
        last_name: LastName.toUpperCase().trim(),
        pin: Pin,
        Class: Class,
    }
    const styles = StyleSheet.create({
        fn: {
            backgroundColor: 'transparent',
            borderColor: fnborder,
            borderWidth: fnBorderWidth,
            color: '#2196F3',
            borderRadius: 3,
            fontSize: 16,
            letterSpacing: 1.1,
            fontWeight: 400,
            width: '80vw',
            margin: 5,
            height: 40,
            outlineStyle: 'none',
            padding: 10
        },
        ln: {
            backgroundColor: 'transparent',
            borderColor: lnborder,
            borderWidth: lnBorderWidth,
            color: '#2196F3',
            borderRadius: 3,
            fontSize: 16,
            letterSpacing: 1.1,
            fontWeight: 400,
            width: '80vw',
            margin: 5,
            height: 40,
            outlineStyle: 'none',
            padding: 10
        },
        pininput: {
            backgroundColor: 'transparent',
            borderColor: pinBorder,
            borderWidth: pinBorderWidth,
            color: '#2196F3',
            borderRadius: 3,
            fontSize: 16,
            letterSpacing: 1.1,
            fontWeight: 400,
            width: '80vw',
            margin: 5,
            height: 40,
            outlineStyle: 'none',
            padding: 10
        },
        pin2input: {
            backgroundColor: 'transparent',
            borderColor: pin2Border,
            borderWidth: pin2BorderWidth,
            color: '#2196F3',
            borderRadius: 3,
            fontSize: 16,
            letterSpacing: 1.1,
            fontWeight: 400,
            width: '80vw',
            margin: 5,
            height: 40,
            outlineStyle: 'none',
            padding: 10
        },
        classpicker: {
            flex: 1,
            borderColor: pickerBorder,
            borderWidth: pickerBorderWidth,
            backgroundColor: 'transparent',
            color: '#2196F3',
            borderRadius: 3,
            fontSize: 16,
            letterSpacing: 1.1,
            fontWeight: 400,
            width: '80vw',
            margin: 5,
            outlineStyle: 'none',
            padding: 8,
        }

    })

    function confirmPin(pin1) {
        setConfirmedPin(pin1)
        if (pin1 === Pin && Pin !== '') {
            setpin2Border('green')
            setErrormsg('')

        }
        else {
            setErrormsg('Pin codes do not match')
            setpin2Border('red')
        }
    }
    function validPin(vpin) {
        setPin(vpin)
        if (validatePin(vpin)) {
            setpinBorder('green')
            setErrormsg('')
        }
        else {
            setpinBorder('red')
            setErrormsg('Pin Code should be 4 or 6 digits')
        }
    }
    function validateFirstName(text) {
        setFirstName(text)
        if (validateName(text)) {
            setfnborder('green')
            setErrormsg('')
        }
        else if (text.length < 4) {
            setfnborder('red')
            setErrormsg('Too Short')
        }
        else {
            setfnborder('red')
            setErrormsg('First Name Should only have letters and no spaces')
        }
    }
    function validateLastName(text) {
        setLastName(text)
        if (validateName(text)) {
            setlnborder('green')
            setErrormsg('')
        }
        else if (text.length < 4) {
            setlnborder('red')
            setErrormsg('Too Short')
        }
        else {
            setlnborder('red')
            setErrormsg('First Name Should only have letters and no spaces')
        }
    }
    function submit() {
        if (fnborder === 'green' && lnborder === 'green' && Class !== '') {
            if (Pin !== confirmedPin) {
                setErrormsg('Pin codes do not match')
            }
            else {
                setErrormsg('Valid Info')
                console.log(studentData)
            }
        }
        else {
            setErrormsg('Please fill in valid information to all fields')
        }
    }

    return (
        <>
            <HeaderOneBtn title='New Student' bgColor='#020742' navPress={() => navigation.navigate('studentopts')} />
            <ScrollView>
                <View style={gstyles.register_container}>
                    <Text style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#41aafa',
                        fontSize: 20,
                        letterSpacing: 1.4,
                        marginBottom:10
                    }}>Fill in the Form</Text>
                    <View>
                        <TextInput style={styles.fn} placeholder='First Name'
                            value={FirstName}
                            onChangeText={(text) => validateFirstName(text)}
                            placeholderTextColor={'#2196F3'}
                            onFocus={() => {
                                setfnBorderWidth(2)
                                fnborder === 'green' ? setfnborder('green') : fnborder === 'red' ? setfnborder('red') : setfnborder('yellow')

                            }}
                            onBlur={() => {
                                setfnBorderWidth(1)
                                fnborder === 'yellow' ? setfnborder('#2196F3') : setfnborder(fnborder)
                            }}
                        />
                        <TextInput style={styles.ln} placeholder='Last Name'
                            value={LastName}
                            placeholderTextColor={'#2196F3'}
                            onChangeText={(text) => validateLastName(text)}
                            onFocus={() => {
                                setlnBorderWidth(2)
                                lnborder === 'green' ? setlnborder('green') : lnborder === 'red' ? setlnborder('red') : setlnborder('yellow')

                            }}
                            onBlur={() => {
                                setlnBorderWidth(1)
                                lnborder === 'yellow' ? setlnborder('#2196F3') : setlnborder(lnborder)
                            }}
                        />
                        <Picker
                            selectedValue={Class}
                            style={styles.classpicker}
                            onValueChange={(itemValue) => {
                                setClass(itemValue)
                                setPickerBorder('green')
                                console.log(itemValue)

                            }}
                            onFocus={() => {
                                setPickerBorderWidth(2)
                                setPickerBorder('yellow')

                            }}
                            onBlur={() => {
                                setPickerBorderWidth(1)
                                setPickerBorder(pickerBorder)
                            }}
                        >
                            <Picker.Item label="Class" value="" />
                            <Picker.Item label="Senior One" value="S1" />
                            <Picker.Item label="Senior Two" value="S2" />
                            <Picker.Item label="Senior Three" value="S3" />
                            <Picker.Item label="Senior Four" value="S4" />
                            <Picker.Item label="Senior Five" value="S5" />
                            <Picker.Item label="Senior Six" value="S6" />

                        </Picker>


                        <TextInput style={styles.pininput} placeholder='Pin Code 4 or 6 digits' secureTextEntry
                            value={Pin}
                            onChangeText={(pin) => validPin(pin)}
                            placeholderTextColor={'#2196F3'}
                            onFocus={() => {
                                setpinBorderWidth(2)
                                pinBorder === 'green' ? setpinBorder('green') : pinBorder === 'red' ? setpinBorder('red') : setpinBorder('yellow')

                            }}
                            onBlur={() => {
                                setpinBorderWidth(1)
                                pinBorder === 'yellow' ? setpinBorder('#2196F3') : setpinBorder(lnborder)
                            }}
                        />
                        <TextInput style={styles.pin2input} placeholder='Confirm Pin Code' secureTextEntry
                            value={confirmedPin}
                            onChangeText={(pin) => confirmPin(pin)}
                            placeholderTextColor={'#2196F3'}
                            onFocus={() => {
                                setpin2BorderWidth(2)
                                pin2Border === 'green' ? setpin2Border('green') : pin2Border === 'red' ? setpin2Border('red') : setpin2Border('yellow')

                            }}
                            onBlur={() => {
                                setpin2BorderWidth(1)
                                setpin2Border(pinBorder)
                            }}
                        />
                    </View>

                    <Button mode="contained" onPress={() => submit()}
                        color={'#2196F3'}
                        labelStyle={{ color: "white", fontSize: 16, letterSpacing: 2, fontWeight: 500 }}
                        contentStyle={{ width: '80vw', paddingTop: 5 }}

                    >
                        SUBMIT
                    </Button>
                    <Text style={{
                        color: 'red',
                        fontWeight: 400,
                        fontSize: '4.4vmin',
                        paddingTop: 5
                    }}>{errormsg}</Text>
                </View>
                        
            </ScrollView>
        </>
    )
}

