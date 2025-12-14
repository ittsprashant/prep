// 1
console.log("start")

const fn = () => {
  return new Promise((res, rej) => {
    console.log("1");
    res('success')
  })
};

console.log("middle");
fn().then(res => {
  console.log(res);
})

console.log("end")


// 2
function promiseTest(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve("resolved")
        }, 5000)
    })
}

async function result(){
    const log = await promiseTest();
    if(log === 'resolved'){
        console.log("4")
    }
    console.log("1")
    console.log("2")
    console.log("3")
}

result();

// 3
console.log("start");

new Promise((resolve, reject) => {
    console.log("1");
    resolve("2")
})

console.log("end");


// 4
function call(){

    return Promise.resolve()
}

call()
.then(()=>console.log("1"))
.then(()=>console.log("2"))
.then(()=>console.log("3"))


call()
.then(()=>console.log("4"))
.then(()=>console.log("5"))
.then(()=>console.log("6"))



// 5
function call1(){

    return new Promise((resolve)=>setTimeout(resolve,0))
}

call1()
.then(()=>console.log("1"))
.then(()=>console.log("2"))
.then(()=>console.log("3"))


call1()
.then(()=>console.log("4"))
.then(()=>console.log("5"))
.then(()=>console.log("6"))


// 6
function processing() {
    return Promise.reject("Something went wrong!");
  }
  
  function init() {
    try {
      return processing();
    } catch (err) {
      console.log("Error in processing.");
    }
  }
  
  init().then(() => {
    console.log("End");
  });