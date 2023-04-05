function getViewCount() {
  const url = 'https://7ekl1v31ze.execute-api.us-east-1.amazonaws.com/default/view-counter'

  fetch(url)
  .then(data=>{return data.json()})
  .then(res=>{console.log(res)
  return res})
}

document.getElementById("app").innerHTML = `
<div>
 <p>Page Views: <span>0<span></p>
 <button id="mainButton">Increment!</button>
</div>
`

let counter = document.querySelector("span");
counter.innerHTML = String(getViewCount())

const increaseButton = document.getElementById("mainButton");

increaseButton.addEventListener("click", () => {
  counter.innerText = counterState += 1;
});




