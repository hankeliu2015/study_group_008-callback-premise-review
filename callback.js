// building an API that other client can call

function apiAdd(num1, num2, cb) {
  setTimeout(function(){
    const result = num1 + num2
    cb(result)
  }, 2000)
}

//execute the fn

// apiAdd(5,10, function(sum) {
//   console.log(sum)
//   apiAdd(sum,20, function(sum2) {
//     console.log(sum2)
//     apiAdd(sum2,30, function(sum3) {
//       console.log(sum3)
//     })
//   })
// })

apiAdd(5,10,
  (sum) => {
    console.log(sum) //first callback
    apiAdd(sum, 20,
    (sum2) => {
      console.log(sum2)
    })
  }
)


// jQuery users cb a lot

// $.get('url', functin(data) {
// })
//
// // jQuery fn:
// function get(url, cb){
// }
