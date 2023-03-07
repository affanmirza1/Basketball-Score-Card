let homeEl = document.getElementById("score")

let guestEl = document.getElementById("score1")


function incrementby1(){
   homeEl.textContent = Number(homeEl.textContent) + 1;
}

function incrementby2(){
    homeEl.textContent = Number(homeEl.textContent) + 2;
}

function incrementby3(){
    homeEl.textContent = Number(homeEl.textContent) + 3;
}

function reset(){
    homeEl.textContent = 0;
}

function guest_incrementby1(){
    guestEl.textContent = Number(guestEl.textContent) + 1;
}

function guest_incrementby2(){
    guestEl.textContent = Number(guestEl.textContent) + 2;
}

function guest_incrementby3(){
    guestEl.textContent = Number(guestEl.textContent) + 3;
}

function reset1(){
    guestEl.textContent = 0
}