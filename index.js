const searchbar = document.querySelector("#search-bar");
const searchbtn = document.querySelector("#search-btn");
const displaycity = document.querySelector("#display-city");

searchbtn.addEventListener("click", () => {
  console.log(searchbar.value);
  displaycity.innerHTML = searchbar.value;
});

const form = document.querySelector(".search");
form.onsubmit = async function getCityTemp(e) {
  e.preventDefault();
  const city = document.querySelector("input").value;
  const req = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=c1180c396dba4127a29182746220812&q=${city}&aqi=yes`
  );
  const res = await req.json();
  console.log({res});
  //   document.querySelector(".icon").src = res.current.condition.icon;
  document.querySelector(".humid").innerHTML = res.current.humidity;
  document.querySelector(".dandt").innerHTML = res.location.localtime;
  document.querySelector(".temp-screen").innerHTML = res.current.temp_c;
  document.querySelector(".wheather").innerHTML = res.current.condition.text;
  document.querySelector(".wind-speed").innerHTML = res.current.wind_kph;
  document.querySelector(".display-city").innerHTML = res.location.name;
  e.target.reset();
};

// response

const response = {
  res: {
    location: {
      name: "Washim",
      region: "Maharashtra",
      country: "India",
      lat: 20.1,
      lon: 77.15,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1670692295,
      localtime: "2022-12-10 22:41",
    },
    current: {
      last_updated_epoch: 1670691600,
      last_updated: "2022-12-10 22:30",
      temp_c: 20.6,
      temp_f: 69.1,
      is_day: 0,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        code: 1003,
      },
      wind_mph: 6.7,
      wind_kph: 10.8,
      wind_degree: 57,
      wind_dir: "ENE",
      pressure_mb: 1012,
      pressure_in: 29.9,
      precip_mm: 0,
      precip_in: 0,
      humidity: 46,
      cloud: 32,
      feelslike_c: 20.6,
      feelslike_f: 69.1,
      vis_km: 10,
      vis_miles: 6,
      uv: 1,
      gust_mph: 13.6,
      gust_kph: 22,
      air_quality: {
        co: 440.6000061035156,
        no2: 4.800000190734863,
        o3: 90.80000305175781,
        so2: 3.4000000953674316,
        pm2_5: 113.5,
        pm10: 119.69999694824219,
        "us-epa-index": 4,
        "gb-defra-index": 10,
      },
    },
  },
};
