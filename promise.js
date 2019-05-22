// doing the same thing in callback.js
//handle async call in more synchroniness mannor
// promise are a promise for data at some point in the future

function apiPromiseAdd(num1, num2) {
  return new Promise((res, rej) => {    //res == resule, rej == reject
    setTimeout(function() {
      const result = num1 + num2
      res(result) //??
    }, 1000)
  })
}

apiPromiseAdd(5, 10)
.then((sum) => {
  console.log(sum)
  return apiPromiseAdd(sum, 20)
})
.then((sum2) => {
  console.log(sum2)
  return apiPromiseAdd(sum2, 30)
})
.then(function(sum3) {
  console.log(sum3)
})
