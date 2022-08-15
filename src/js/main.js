const ipBtn = document.querySelector(".get-btn")
const ipDisplay = document.querySelector(".ip-display")
const ipv6Display = document.querySelector(".ipv6-display")
const locationDisplay = document.querySelector(".location-display")




ipBtn.addEventListener("click", () => {
  
  axios.get("https://api4.my-ip.io/ip.json").then(response => {
    ipDisplay.textContent = `IPv4 Address: ${response.data.ip}`
    console.log(response)
  }) 
   
  axios.get("http://api.ipapi.com/api/check?access_key=514f81dbe2d693bf586d2f5d9d119b24").then(ipv6 => {
    ipv6Display.textContent = `IPv6 Address : ${ipv6.data.ip}`   
    console.log(ipv6)
  })

  axios.get("http://api.ipapi.com/api/check?access_key=514f81dbe2d693bf586d2f5d9d119b24").then(locationIp => {
    locationDisplay.textContent = `Location: ${locationIp.data.country_name} ${locationIp.data.location.country_flag_emoji} | ${locationIp.data.region_name}`
    console.log.log(locationIp)
  })

})
