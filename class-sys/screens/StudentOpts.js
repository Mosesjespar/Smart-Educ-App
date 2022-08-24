import React from "react";
import { Image, View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { LightBlueBtn, DarkBlueBtn } from './Welcome'
import { gstyles } from "../styleSheet/styles";

export default function StudentOpts({ navigation }) {
    return (

        <ScrollView>
            <HeaderOneBtn title='Student' bgColor='#020742' navPress={() => navigation.navigate('Welcome')} />
            <View style={gstyles.studentOpts_container}>
                <Image source={require('../images/logo.png')} style={{
                    width: 250,
                    height: 250,
                    alignSelf: 'center',
                    resizeMode: 'cover'
                }} />
                <LightBlueBtn title='Register' navPress={() => navigation.navigate('studentSignUp')} />
                <DarkBlueBtn title='Login' navPress={() => console.log('yoo')} />

            </View>
        </ScrollView>

    )
}



export function HeaderOneBtn(props, shadow = true) {
    return (
        <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: props.bgColor,
            elevation: shadow ? 3 : 0,
            shadowOffset: { width: 0, height: shadow ? 2 : 0 },
            shadowOpacity: shadow ? 0.3 : 0
        }}>
            <TouchableOpacity onPress={props.navPress} style={{ padding: 10 }}>
                <Image source={require('../assets/icons/ic_chevron_left.png')} style={{ height: 16, width: 18, resizeMode: 'contain' }} />
            </TouchableOpacity>
            <Text style={{ flex: 1, paddingHorizontal: 10, fontSize: 20, color: 'white' }}>{props.title}</Text>
        </View>

    )
}