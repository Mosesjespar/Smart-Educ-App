import React, { useState } from "react";
import { Image, View, Text, TextInput, StyleSheet, ScrollView, Picker, } from "react-native";
import { Button } from "react-native-paper";
import { gstyles } from '../styleSheet/styles'
import validatePin from "../utils/Pin validator";
import { HeaderOneBtn } from "./StudentOpts";
import validateName from "../utils/Validate UserName";
import { base_url } from "../ApiServices/BASE_URL";


export default function TeacherSignUp({ navigation }) {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Class, setClass] = useState('')
    const [Pin, setPin] = useState('')
    const [gender, setGender] = useState('')
    const [genderBorder, setGenderBorder] = useState('#03045e')
    const [genderWidth, setGenderWidth] = useState(1)
    const [pinBorder, setpinBorder] = useState('#03045e')
    const [pin2Border, setpin2Border] = useState('#03045e')
    const [fnborder, setfnborder] = useState('#03045e')
    const [lnborder, setlnborder] = useState('#03045e')
    const [errormsg, setErrormsg] = useState('')
    const [fnBorderWidth, setfnBorderWidth] = useState(1)
    const [lnBorderWidth, setlnBorderWidth] = useState(1)
    const [pinBorderWidth, setpinBorderWidth] = useState(1)
    const [pin2BorderWidth, setpin2BorderWidth] = useState(1)
    const [pickerBorder, setPickerBorder] = useState('#03045e')
    const [pickerBorderWidth, setPickerBorderWidth] = useState(1)
    const [confirmedPin, setConfirmedPin] = useState('')
    const [msgColor, setMsgColor] = useState('#ff0000')


    const styles = StyleSheet.create({
        fn: {
            backgroundColor: 'transparent',
            borderColor: fnborder,
            borderWidth: fnBorderWidth,
            color: 'white',
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
            color: 'white',
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
            color: 'white',
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
            color: 'white',
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
            color: '#03045e',
            borderRadius: 3,
            fontSize: 16,
            letterSpacing: 1.1,
            fontWeight: 400,
            width: '80vw',
            margin: 5,
            outlineStyle: 'none',
            padding: 8,
        },
        genderPicker: {
            flex: 1,
            borderColor: genderBorder,
            borderWidth: genderWidth,
            backgroundColor: 'transparent',
            color: '#03045e',
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
            setpin2Border('#16db65')
            setErrormsg('')

        }
        else {
            setErrormsg('Pin codes do not match')
            setpin2Border('#ff0000')
        }
    }
    function validPin(vpin) {
        setPin(vpin)
        if (validatePin(vpin)) {
            setpinBorder('#16db65')
            setErrormsg('')
        }
        else {
            setpinBorder('#ff0000')
            setErrormsg('Pin Code should be 4 or 6 digits')
        }
    }
    function validateFirstName(text) {
        setFirstName(text)
        if (validateName(text)) {
            setfnborder('#16db65')
            setErrormsg('')
        }
        else if (text.length < 4) {
            setfnborder('#ff0000')
            setErrormsg('Too Short')
        }
        else {
            setfnborder('#ff0000')
            setErrormsg('First Name Should only have letters and no spaces')
        }
    }
    function validateLastName(text) {
        setLastName(text)
        if (validateName(text)) {
            setlnborder('#16db65')
            setErrormsg('')
        }
        else if (text.length < 4) {
            setlnborder('#ff0000')
            setErrormsg('Too Short')
        }
        else {
            setlnborder('#ff0000')
            setErrormsg('First Name Should only have letters and no spaces')
        }
    }




    return (
        <>
            <HeaderOneBtn title='New Teacher' bgColor='#023e8a' navPress={() => navigation.navigate('teacheropts')} />
            <ScrollView>
                <View style={gstyles.register_container} >
                    <Text style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#fff',
                        fontSize: 20,
                        letterSpacing: 1.4,
                        marginBottom: 10,
                        marginTop: -39
                    }}>Fill in the Form</Text>
                    <View>
                        <TextInput style={styles.fn} placeholder='First Name'
                            value={FirstName}
                            onChangeText={(text) => validateFirstName(text)}
                            placeholderTextColor={'white'}
                            onFocus={() => {
                                setfnBorderWidth(2)
                                fnborder === '#16db65' ? setfnborder('#16db65') : fnborder === '#ff0000' ? setfnborder('#ff0000') : setfnborder('yellow')

                            }}
                            onBlur={() => {
                                setfnBorderWidth(1)
                                fnborder === 'yellow' ? setfnborder('#03045e') : setfnborder(fnborder)
                            }}
                        />
                        <TextInput style={styles.ln} placeholder='Last Name'
                            value={LastName}
                            placeholderTextColor={'white'}
                            onChangeText={(text) => validateLastName(text)}
                            onFocus={() => {
                                setlnBorderWidth(2)
                                lnborder === '#16db65' ? setlnborder('#16db65') : lnborder === '#ff0000' ? setlnborder('#ff0000') : setlnborder('yellow')

                            }}
                            onBlur={() => {
                                setlnBorderWidth(1)
                                lnborder === 'yellow' ? setlnborder('#03045e') : setlnborder(lnborder)
                            }}
                        />
                        <Picker
                            selectedValue={Class}
                            style={styles.classpicker}
                            onValueChange={(itemValue) => {
                                setClass(itemValue)
                                setPickerBorder('#16db65')
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

                        <Picker
                            selectedValue={gender}
                            style={styles.genderPicker}
                            onValueChange={(itemValue) => {
                                setGender(itemValue)
                                setGenderBorder('#16db65')
                                console.log(itemValue)

                            }}
                            onFocus={() => {
                                setGenderWidth(2)
                                setGenderBorder('yellow')

                            }}
                            onBlur={() => {
                                setGenderWidth(1)
                                setGenderBorder(genderBorder)
                            }}>
                            <Picker.Item label="Gender" value="" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>
                        <TextInput style={styles.pininput} placeholder='Pin Code 4 or 6 digits' secureTextEntry
                            value={Pin}
                            onChangeText={(pin) => validPin(pin)}
                            placeholderTextColor={'white'}
                            onFocus={() => {
                                setpinBorderWidth(2)
                                pinBorder === 'green' ? setpinBorder('green') : pinBorder === '#ff0000' ? setpinBorder('#ff0000') : setpinBorder('yellow')

                            }}
                            onBlur={() => {
                                setpinBorderWidth(1)
                                pinBorder === 'yellow' ? setpinBorder('#03045e') : setpinBorder(lnborder)
                            }}
                        />
                        <TextInput style={styles.pin2input} placeholder='Confirm Pin Code' secureTextEntry
                            value={confirmedPin}
                            onChangeText={(pin) => confirmPin(pin)}
                            placeholderTextColor={'white'}
                            onFocus={() => {
                                setpin2BorderWidth(2)
                                pin2Border === 'green' ? setpin2Border('green') : pin2Border === '#ff0000' ? setpin2Border('#ff0000') : setpin2Border('yellow')

                            }}
                            onBlur={() => {
                                setpin2BorderWidth(1)
                                setpin2Border(pinBorder)
                            }}
                        />
                    </View>

                    <Button mode="contained" onPress={() => submit()}
                        color={'#03045e'}
                        labelStyle={{ color: "white", fontSize: 16, letterSpacing: 2, fontWeight: 500 }}
                        contentStyle={{ width: '80vw', paddingTop: 5 }}

                    >
                        SUBMIT
                    </Button>
                    <Text style={{
                        color: msgColor,
                        fontWeight: 400,
                        fontSize: '4.4vmin',
                        paddingTop: 5
                    }}>{errormsg}</Text>

                </View>
            </ScrollView>
        </>
    )
}