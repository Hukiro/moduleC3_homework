function showOwnProp(obj) {
    for (let prop in obj)
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop])
        }
}

const test0 = {
    a : 12,
    b : 'str'
}

showOwnProp(test0)