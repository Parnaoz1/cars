var pasuxebi = []; 
pasuxebi[0] = "Chevrolet Camaro ZL1 Goat";
pasuxebi[1] = "Dodge Challenger Demon";
pasuxebi[2] = "Ford Mustang Shelby GT500";

function wkapi (I) {
    if (I>1) {
    document.getElementById("Note").innerHTML = pasuxebi[I-1];
}
else {
    document.getElementById("Note").innerHTML = pasuxebi[I-1];
    alert ("გესმის ძმაო დახვეწილობა, ბრუტალობა, სიჩქარე.");
}
}
