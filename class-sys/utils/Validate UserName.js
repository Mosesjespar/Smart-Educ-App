// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).
export default function validateName(username) {
    username = username.trim()
    let regex = /^[a-zA-Z]+$/g
    let res = regex.test(username)
    let x = username.length

    return (x >= 4 && !username.includes(' ')) ? res : false
}
