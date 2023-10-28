const input_box = document.querySelector(".p-top");
const search_button = document.querySelector("#btn");
const city_name_display = document.querySelector(".city-name-display");
const city_temp = document.querySelector(".get-temp");
const city_day = document.querySelector(".temp-day");
const center_text = document.querySelector(".center-text");
const bottom_text = document.querySelector(".bottom");
const b_temp_text = document.querySelector(".b-temp-text");
const air_text = document.querySelector(".air-text");
const it_w_ab = document.querySelector(".it-w-ab");

search_button.addEventListener('click', async function () {
    let key = "d46b203d03bea735d340b73f937b70e3";
    let city_name = input_box.value;
    if (input_box.value === "") {
        city_name_display.innerHTML = "Please enter a city name";
        city_temp.innerHTML = "";
        city_day.innerHTML = "";
        air_text.innerHTML = "";
        it_w_ab.innerHTML = "";
        center_text.classList.toggle("d-type");
        bottom_text.classList.toggle("d-type");
        b_temp_text.classList.toggle("d-type");

        setTimeout(()=>{
            center_text.classList.toggle("d-type");
            bottom_text.classList.toggle("d-type");
            b_temp_text.classList.toggle("d-type");
        },2000)
    } else {
        let url = (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}`)).json();
        let data = await url;
        if (data.cod === '404') {
            city_name_display.innerHTML = "City / Country not found";
            city_temp.innerHTML = "";
            city_day.innerHTML = "";
            air_text.innerHTML = "";
            it_w_ab.innerHTML = "";
            input_box.value = "";
            center_text.classList.toggle("d-type");
            bottom_text.classList.toggle("d-type");
            b_temp_text.classList.toggle("d-type");

            setTimeout(()=>{
                center_text.classList.toggle("d-type");
                bottom_text.classList.toggle("d-type");
                b_temp_text.classList.toggle("d-type");
            },2000)
        } else {
            city_name_display.innerHTML = data.name;
            input_box.value = "";
            city_temp.innerHTML = `${Math.round(data.main.temp - 273.15)}deg`;
            let t_date = new Date();
            let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let dayName = daysOfWeek[t_date.getDay()];
            city_day.innerHTML = dayName;
            air_text.innerHTML = `Air speed -> ${data.wind.speed}`;
            it_w_ab.innerHTML = `${data.weather[0].main}`;

            center_text.classList.toggle("d-type");
            bottom_text.classList.toggle("d-type");
            b_temp_text.classList.toggle("d-type");
            }
            
            setTimeout(() => {
                 center_text.classList.toggle("d-type");
                 bottom_text.classList.toggle("d-type");
                 b_temp_text.classList.toggle("d-type");
            }, 5000);
        }
    })
