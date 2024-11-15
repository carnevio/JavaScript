async function holeWitz() {
    var response = await fetch("https://witzapi.de/api/joke/");
    var data = await response.json();
    console.log(data);  
 }