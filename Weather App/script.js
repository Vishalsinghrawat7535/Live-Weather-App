

function getData() {
    let city = document.getElementById("city").value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=92b3339f24f1753b5ae1971655c3b84f`

    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            append(res)
            console.log(res)
        })
        .catch(function (err) {
            console.log(err)
        })
}


function getDataLocation(lat, lon) {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=92b3339f24f1753b5ae1971655c3b84f`


    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            append(res)
            console.log(res)
        })
        .catch(function (err) {
            console.log(err)
        })
}



function append(data) {
    let conatiner = document.getElementById("conatiner");
    conatiner.innerHTML = null


    let city = document.createElement("h1")
    city.innerText = `CITY : ${data.name}`
    city.style = "color:red;font-size:45px"


    let min = document.createElement("p")
    min.innerText = `Min-temp : ${Math.floor(data.main.temp_min - 270)} \xB0C`
    min.style = "color:blue;font-size:25px"

    let max = document.createElement("p")
    max.innerText = `Max-temp : ${Math.ceil(data.main.temp_max - 270)} \xB0C`
    max.style = "color:blue;font-size:25px"

    let current = document.createElement("p")
    current.innerHTML = `Current-temp : ${Math.ceil(data.main.temp - 270)} \xB0C`
    current.style = "color:blue;font-size:25px"


    let humidity = document.createElement("p")
    humidity.innerHTML = `Humidity : ${data.main.humidity} %`
    humidity.style = "color:blue;font-size:25px"

    let wind = document.createElement("p")
    wind.innerText = `Wind Speed : ${data.wind.speed} km/h`;
    wind.style = "color:blue;font-size:25px"

    conatiner.append(city, min, max, current, humidity, wind)

    let map = document.getElementById("gmap_canvas")
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

function getWeather() {
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
        let crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        getDataLocation(crd.latitude, crd.longitude);
    }
}