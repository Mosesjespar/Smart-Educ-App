import { base_url } from "../screens/Login";
export default function UserLogin(info, { navigation }) {
    let opts = {
        method: "POST",
        body: JSON.stringify(info),
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(base_url + '/login', opts
    ).then(response => {
        if (response.status === 200) {
            () => {
                console.log(response.json())
                navigation.navigate('Welcome')
            }
        }
        else {
            navigation.navigate('SignUp')
        }
    }
    ).then(info => console.log(info)).catch(e => console.log('error:', e))
}