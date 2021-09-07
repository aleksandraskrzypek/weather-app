import React from 'react'
import "./weather.css"
import {useState} from 'react'
import axios from 'axios'
import "./owfont-master/css/owfont-regular.css"



function Weather() {
    const [cityName, setCityName] = useState('');
    const [temp1, setTemp1] = useState('')
    const [type1, setType1] = useState('')

    const [temp2, setTemp2] = useState('')

    const [temp3, setTemp3] = useState('')

    const [temp4, setTemp4] = useState('')

    const [temp5, setTemp5] = useState('')

    const [imgURL1, setImgURL1] = useState('')
    const [imgURL2, setImgURL2] = useState('')
    const [imgURL3, setImgURL3] = useState('')
    const [imgURL4, setImgURL4] = useState('')
    const [imgURL5, setImgURL5] = useState('')

    let today = new Date();
    let tomorrow = new Date();
    let dayaftertomorrow = new Date();
    let dayaftertomorrow2 = new Date();
    let dayaftertomorrow3 = new Date();

    tomorrow.setDate(today.getDate() + 1)
    dayaftertomorrow.setDate(tomorrow.getDate() + 1)
    dayaftertomorrow2.setDate(tomorrow.getDate() + 2)
    dayaftertomorrow3.setDate(tomorrow.getDate() + 3)
    

  const handleSubmit = () => {

          axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+`${cityName}`+'&units=metric&APPID=af8caf69fddab502ce9c5b842dd05b56')
  
            .then(function (response) {

            console.log(response)

            setTemp1(response.data.list[0].main.temp)
            setType1(response.data.list[0].weather[0].main)

            setTemp2(response.data.list[1].main.temp)

            setTemp3(response.data.list[2].main.temp)

            setTemp4(response.data.list[3].main.temp)

            setTemp5(response.data.list[4].main.temp)
    

            setImgURL1(`owf owf-${response.data.list[0].weather[0].id} owf-myx`)
            setImgURL2(`owf owf-${response.data.list[1].weather[0].id} owf-5x`)
            setImgURL3(`owf owf-${response.data.list[2].weather[0].id} owf-5x`)
            setImgURL4(`owf owf-${response.data.list[3].weather[0].id} owf-5x`)
            setImgURL5(`owf owf-${response.data.list[4].weather[0].id} owf-5x`)

          })
          .catch(function (error) {
            console.log(error);
          });
        }

        

      const dateBuilder = (d) => {
        let days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
        
        let day = days[d.getDay()]

        return `${day}`
      }



    


    


    return (
        <div className="weather-head">
            <div className="weather-body">
                <div className="search-item">
                    <input 
                        className="input-search-name"
                        value={cityName}
                        onChange={e => setCityName(e.target.value)}
                        placeholder="Enter City.." 
                    />
                    <button onClick={handleSubmit} className="button-search">SEARCH</button>
                </div>

                <div className="theday">
                    <div className="iconoftheday">
                        <i className={imgURL1}></i>
                    </div>
                    <div className='restoftheday'>
                        <p className="day">{dateBuilder(today)}</p>
                        <h1>{cityName}</h1>
                        <p className="temp">{Math.round(temp1)} °C</p>
                        <p className="type">{type1}</p>
                    </div>

                   




                </div>


                <div className="day-elements">
                    <div className="element">
                        <p className="day">{dateBuilder(tomorrow)}</p>
                        <i className={imgURL2}></i>
                        <p className="temp">{Math.round(temp2)} °C</p>
                    </div>
                    <div className="element">
                        <p className="day">{dateBuilder(dayaftertomorrow)}</p>
                        <i className={imgURL3}></i>
                        <p className="temp">{Math.round(temp3)} °C</p>
                    </div>
                    <div className="element">
                        <p className="day">{dateBuilder(dayaftertomorrow2)}</p>
                        <i className={imgURL4}></i>
                        <p className="temp">{Math.round(temp4)} °C</p>
                    </div>
                    <div className="element">
                        <p className="day">{dateBuilder(dayaftertomorrow3)}</p>
                        <i className={imgURL5}></i>
                        <p className="temp">{Math.round(temp5)} °C</p>
                    </div>
                </div>
        

            </div>
        </div>
    )
}

export default Weather
