import { StyleSheet ,Dimensions} from "react-native";

export const styles = StyleSheet.create({
    dashboard_header: {
        height: '15vmin',
        padding: 20,
        backgroundColor: '#2196F3',

    },
    dashboard_title: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '4.6vmin',
    },
    dashboard_container: {
        flex: 1,
        height: '100%',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ddd',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 1.3 },
        shadowOpacity: 0.1,
        paddingBottom: '20vmin',
        backgroundColor: 'white'

    },
    dashboard_input: {
        fontSize: '4.6vmin',
        borderWidth: 1,
        borderColor: '#2196F3',
        width: '79vw',
        marginTop: 1,
        fontSize: '4vmin',
        outlineStyle: 'none',
        height: '7vmin',
        paddingLeft: 10,
        backgroundColor: '#ddd',
        marginRight: 10
    },
    dashboard_inputView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2196F3',
        paddingVertical: 5

    },
    dashboard_sub: {
        marginLeft: 22,
        color: '#fff',
        fontWeight: 500,
        fontSize: '4.3vmin',
    },
    dashboard_btn2: {
        textAlign: 'center',
        marginTop: 5,
        justifyContent: 'center',
        flex: 1

    },
    dashboard_btn2t: {
        fontWeight: 500,
        padding: 7,
        width: '100vw',
        fontSize: '4.6vmin',
        backgroundColor: 'white',
        color: '#2196F3',
        borderWidth: 1,
        borderColor: '#2196F3',
        letterSpacing: 3,
        alignSelf: 'center',

    },
    Card_containter:{
        backgroundColor:'green',
        width:'45vw',
        height:'40vmin',
        padding:40,
        borderRadius:5,
        margin:3
        
    },
    Card_text:{
        fontWeight:400,
        color:'white',
        textAlign:'center',
        justifyContent:'center',

    }
})