// selection value will get the value of selection cookies
let selection_value = Cookies.get(`selection`);
// box will be used to show content related to cookie selected
let box = document.getElementById(`box`);
// show potato function help show potato and text if potato is selected
function show_potato(details){
    box[`innerHTML`] = `<img src="images/potato.jpg" alt="potato"/>` + `<p>You have selected potato</p>`;
}
// show tomato function help show tomato and text if tomato is selected
function show_tomato(details){
    box[`innerHTML`] = `<img src="images/tomato.jpg" alt="tomato"/>` + `<p>You have selected tomato</p>`;
}
// show cucumber function will show cucmber and text if cucumbr is selected
function show_cucumber(details){
    box[`innerHTML`] = `<img src="images/cucumbers.jpg" alt="tomato"/>` + `<p>You have selected cucumber</p>`;
}
// conditions for every cookie
// if cookies value is potato then show potato function will get executed 
// else if cookies value is tomato then show tomato function will get executed
// else if cookies value is cucumber then show cucumber function will get executed
if(selection_value === `potato`){
    show_potato();
} else if(selection_value === `tomato`){
    show_tomato();
} else if (selection_value === `cucumber`){
    show_cucumber();
} else {
    box[`innerHTML`]=`<p>Something must be added to see something here visit the link below to see items</p>`
    location.href = `index.html`;
}
