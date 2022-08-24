import { base_url } from "./BASE_URL"

export default function register(info){
     fetch(base_url + '/register', {
        method: "POST",
        body: JSON.stringify(info),
        headers: { 'Content-Type': 'application/json' }
    }).then(data => 
        data.json()).then(info => console.log(info)).catch(e => console.log('error:', e))
}