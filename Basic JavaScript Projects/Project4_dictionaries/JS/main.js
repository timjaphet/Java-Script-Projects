function mydictionary() {
    var vehcicle = {
        Make: "Jeep",
        Color: "black",
        Version:"Renegade",
        Year: 2015,
        Speed:180,
    };
    delete vehcicle.Make;
    document.getElementById("Dictionary").innerHTML = vehcicle.Make;
} //created dictionary using function with the document. get element by id to display the make of the var vehcicle//