function getCount() {
  const url = 'https://7ekl1v31ze.execute-api.us-east-1.amazonaws.com/default/view-counter'
  value = fetch(url)
  .then(function data() {
    return data.json()
  })
  .then(function res() {
    console.log(res)
    return res
  })
  return value
}

console.log(getCount())


document.getElementById("app").innerHTML = `
<div>
 <p>Page Views: <span>0<span></p>
 <button id="mainButton">Increment!</button>
</div>
`

let counter = document.querySelector("span");
counter.innerHTML = getCount()






