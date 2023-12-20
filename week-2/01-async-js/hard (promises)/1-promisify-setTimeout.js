/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise resolved after ${n} seconds`)
        }, n * 1000)
    })
    return promise
}

wait(2)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err)
    })

module.exports = wait;
