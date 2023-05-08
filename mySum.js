const mySum = (...argArr) => {
    return argArr.reduce((pre, cur) => {
        return pre + cur;
    })
}

module.exports = mySum;