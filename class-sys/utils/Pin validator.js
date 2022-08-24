
export default function validatePIN(pin) {

  let reg = /^\d{4}$|^\d{6}$/g

  return reg.test(pin)
}