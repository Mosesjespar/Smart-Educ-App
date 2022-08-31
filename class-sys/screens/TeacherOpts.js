import React from "react";
import { Image, View, ScrollView } from "react-native";
import { LightBlueBtn, DarkBlueBtn } from './Welcome'
import { gstyles } from "../styleSheet/styles";
import { HeaderOneBtn } from "./StudentOpts";


export default function TeacherOpts({ navigation }) {
    return (

        <ScrollView>
            <HeaderOneBtn title='Teacher' bgColor='#023e8a' navPress={() => navigation.navigate('Welcome')} />
            <View style={gstyles.teacherOpts_container}>
                <Image source={require('../images/logo.png')} style={{
                    width: 250,
                    height: 250,
                    alignSelf: 'center',
                    resizeMode: 'cover'
                }} />
                <LightBlueBtn title='Register' navPress={() => navigation.navigate('teacherSignUp')} />
                <DarkBlueBtn title='Login' navPress={() => console.log('yoo')} />

            </View>
        </ScrollView>

    )
}
