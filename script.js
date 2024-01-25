// Fetching Advice API
fetch('https://api.adviceslip.com/advice')
.then(response=> {return response.json()})
.then(data=>{
     let adviceID = data.slip.id
     ntimes.insertAdjacentHTML('afterbegin',`ADVICE #${adviceID}`)
     let adviceText = data.slip.advice
     adv.insertAdjacentHTML('afterbegin',`&#8220;${adviceText}&#8221;`)
})
// Adding event to the button to refresh page to get new Advice
let btn = document.getElementById('btn')
btn.addEventListener('click', ()=> window.location.reload())