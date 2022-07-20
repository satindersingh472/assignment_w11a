// alert_user function will alert user to buy something by clicking
function alert_user(){
    alert(`please press add if you like something to buy!`);
}
// set timeout will execute alert user function after 3seconds
setTimeout(alert_user, 3000);

// choose potato will set selection cookie value to potato and take user to selection page
function choose_potato(details){
    Cookies.set(`selection`, `potato`);
    location.href = `selection.html`;
}
// choose tomato will set selection cookie value to tomato and take user to selection page
function choose_tomato(details){
    Cookies.set(`selection`, `tomato`);
    location.href = `selection.html`;

}
// choose cucumber will set selection cookie value to cucumber and take user to selection page
function choose_cucumber(details){
    Cookies.set(`selection`, `cucumber`);
    location.href = `selection.html`;

}
// pot button will grab buy1 and give it to event listener
let pot_button = document.getElementById(`buy_1`);
pot_button.addEventListener(`click`,choose_potato);
// pot button will grab buy2 and give it to event listener
let tom_button = document.getElementById(`buy_2`);
tom_button.addEventListener(`click`,choose_tomato);
// pot button will grab buy3 and give it to event listener
let cuc_button = document.getElementById(`buy_3`);
cuc_button.addEventListener(`click`,choose_cucumber);
