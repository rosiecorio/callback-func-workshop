console.log('Hello!')

function notifyUser() {
    console.log('This function has been called!')
}

function secondFunction(myCallbackFunction) {
    console.log('running secondFunction!')
    myCallbackFunction();
}

secondFunction(notifyUser)

/*the secondFunction uses myCallbackFunction as a variable,
so when we call the secondFunction with a value of 
notifyUser function, that function becomes the value of
myCallbackFunction. */