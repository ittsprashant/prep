// MyPromise => polyfill of promise

function MyPromise(executor){

    let onResolve, onReject, isFulfilled = false, isRejected = false, isCalled = false, value ;

    function resolve(val){
        isFulfilled = true;
        value = val;
        if(typeof onResolve === 'function'){
            isCalled = true; // isCalled is used to check if onResolve function is called or not
            onResolve(val); //             queueMicrotask(() => onResolve(value));

        }
    };

    function reject(val){
        isRejected = true;
        value = val;

        if(typeof onReject === 'function'){
            isCalled = true;
            onReject(val);
        }
    };

    this.then = function(callback){

        onResolve = callback;
        if(isFulfilled && !isCalled){
            isCalled = true;
            onResolve(value); //             queueMicrotask(() => onResolve(value));

        }
        return this;

    };

    this.catch = function(callback){
        onReject = callback;
        if(isRejected && !isCalled){
            isCalled = true;
            onReject(value)
        }
        return this;
    };


    try{
        executor(resolve, reject);
    }
    catch(err){
        reject(err);
    }
}




const x = new MyPromise((resolve, reject) => {
    setTimeout(()=>{
        resolve('success')
    }, 3000)
})