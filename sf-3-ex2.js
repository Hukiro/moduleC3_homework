function checker (str, obj) {
    return (str in obj);
}

const test1 = {
    a : 12,
    b : 'str'
}

console.log(checker('a', test1))
console.log(checker('ads', test1))