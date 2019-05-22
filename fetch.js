
//fetch
// read this about fetch https://css-tricks.com/using-fetch/
//example siet: https://api.github.com/users/chriscoyier/repos


fetch('https://api.github.com/users/chriscoyier/repos')
.then(resp => resp.json())
.then(data => console.log(data))

//need to call .json to get data out.
