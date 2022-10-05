const ipBtn = document.getElementById("ipBtn")
const ipDisplay = document.querySelector(".ip-display")
const ipv6Display = document.querySelector(".ipv6-display")
const locationDisplay = document.querySelector(".location-display")

import TOKEN from "./config.js" 



ipBtn.addEventListener("click", () => {
  
  axios.get("https://api4.my-ip.io/ip.json").then(response => {
    ipDisplay.textContent = `IPv4 Address: ${response.data.ip}`
    console.log(response)
  }) 
   
  axios.get(`http://api.ipapi.com/api/check?access_key=${TOKEN}`).then(ipv6 => {
    ipv6Display.textContent = `IPv6 Address : ${ipv6.data.ip}`   
    console.log(ipv6)
  })

  axios.get("http://api.ipapi.com/api/check?access_key=514f81dbe2d693bf586d2f5d9d119b24").then(locationIp => {
    locationDisplay.textContent = `Location: ${locationIp.data.country_name} ${locationIp.data.location.country_flag_emoji} | ${locationIp.data.region_name}`
    console.log.log(locationIp)
  })

  axios.get(`http://api.ipapi.com/api/check?access_key=${TOKEN}`).then(loglat => {
    logLat.push()
  }) 

})

 let logLat = [

 ]

let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
