module.exports = function check(str, bracketsConfig) {

    const config = bracketsConfig.map(el => el.join(''))

    let i = 0
    while (i < config.length) {
        if (!str.includes(config[i])) i++
        else {
            str = str.replace(config[i], '')
            i = 0
        }
    }

    return !Boolean(str)
}
