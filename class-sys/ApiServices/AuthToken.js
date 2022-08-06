import { base_url } from "../screens/Login";

export default function getToken(info){
    let opts= {
        method: "POST",
        body: JSON.stringify(info),
    
        headers: { 'Content-Type': 'application/json' }
    }

    fetch(base_url+'/token',opts).then(response=>
        response.status===200?response.json():console.log('Error: ',e)

    ).then(

    ).catch(e=>
        console.log('error: ',e)
    )
}