

document.getElementById("app").innerHTML = `
<div>
 <p>Page Views: <span>0<span></p>
</div>
`

fetch('https://7ekl1v31ze.execute-api.us-east-1.amazonaws.com/default/view-counter')
  .then(response => response.json())
  .then(json => {
    var radr = JSON.stringify(json)
    document.querySelector("span").innerHTML = radr;
});






