function addPromise (a , b){
    return new Promise( function(resolve, reject){
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }
        else {
            reject('One or all of the variable is not a number!');
        }
    })
}

addPromise(2 , 8).then(function(result){
    console.log('Promise success |', result);
}, function(err) {
    console.log('Promise Error| ', err);
});

addPromise('shit' , 8).then(function(result){
    console.log('This shouldnt appear', result);
}, function(err) {
    console.log('Error! This should appear. | ', err);
});