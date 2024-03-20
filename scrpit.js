


const req = new XMLHttpRequest();

req.open("get", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
    let data = JSON.parse(this.response)
    for (let ind = 0; ind < data.length; ind++){
        console.log(data[ind].flags.png)
        console.log(data[ind].population);
        console.log(data[ind].region);
        console.log(data[ind].subregion);
    }
}
