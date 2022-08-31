import React, { useState } from "react";
import { Image, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { base_url } from "../ApiServices/BASE_URL";
import { HeaderOneBtn } from "./StudentOpts";
import { gstyles } from "../styleSheet/styles";
import { LightBlueBtn } from "./Welcome";
export function StudentLogin({ navigation }) {
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [fnborder, setfnborder] = useState('#03045e')
    const [lnborder, setlnborder] = useState('#03045e')
    const [fnBorderWidth, setfnBorderWidth] = useState(1)
    const [lnBorderWidth, setlnBorderWidth] = useState(1)
    const StudentLoginInfo = {
        first_name: FirstName,
        last_name: LastName
    }
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
            padding: 10,

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
        }
    })

    return (
        <>
            <HeaderOneBtn title='Login' navPress={() => navigation.navigate('studentopts')} bgColor='#023e8a' />
            <View style={gstyles.login}>
                <Image source={require('../images/student-logo.png')} style={{
                    width: 250,
                    height: 250,
                    alignSelf: 'center',
                    resizeMode: 'cover',
                    marginTop: -120
                }} />
                <TextInput style={styles.fn} placeholder='First Name'
                    value={FirstName}
                    onChangeText={(text) => setFirstName(text)}
                    placeholderTextColor={'white'}
                    onFocus={() => {
                        setfnBorderWidth(2)
                        fnborder === '#16db65' ? setfnborder('#16db65') : fnborder === '#ff0000' ? setfnborder('#ff0000') : setfnborder('yellow')

                    }}
                    onBlur={() => {
                        setfnBorderWidth(1)
                        fnborder === 'yellow' ? setfnborder('#2196F3') : setfnborder(fnborder)
                    }}
                />
                <TextInput style={styles.ln} placeholder='Last Name'
                    value={LastName}
                    placeholderTextColor={'white'}
                    onChangeText={(text) => setLastName(text)}
                    onFocus={() => {
                        setlnBorderWidth(2)
                        lnborder === 'green' ? setlnborder('green') : lnborder === '#ff0000' ? setlnborder('#ff0000') : setlnborder('yellow')

                    }}
                    onBlur={() => {
                        setlnBorderWidth(1)
                        lnborder === 'yellow' ? setlnborder('#2196F3') : setlnborder(lnborder)
                    }}
                />
               <LightBlueBtn title='LOGIN' navPress={() =>console.log(StudentLoginInfo)} />
            </View>
        </>

    )
}