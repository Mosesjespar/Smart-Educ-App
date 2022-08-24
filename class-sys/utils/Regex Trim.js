

function regex_trim() {
    let reg = /^\s+|\s+$/g

    let str = ' JavaScript Regex '
    console.log(str.replace(reg, ''));
}

regex_trim()