import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../config/config';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloudSun, faCloud, faCloudMeatball, faCloudSunRain, faCloudShowersHeavy, faPooStorm, faSnowflake, faSmog, faSearch } from "@fortawesome/free-solid-svg-icons";

interface WeatherInfo{
    location: string;
    temp: number;
    weather: string;
}

const WeatherWrapper = styled.div`
    overflow: hidden;
`

const SliderWrapper = styled(Slider)`
    div{
        width: 200px;
        margin-left: 0.1rem;

        span{
            margin-left: 0.3rem;
        }

        .icon{
            margin-left: 1rem;
        }
    }
    @media only screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`

const onIconChoose = (icon: string) =>{
    const symbol:string = icon.substr(0,2);
    switch(symbol){
        case "01":
            return <FontAwesomeIcon icon={faSun} />
        case "02":
            return <FontAwesomeIcon icon={faCloudSun} />
        case "03":
            return <FontAwesomeIcon icon={faCloud} />
        case "04":
            return <FontAwesomeIcon icon={faCloudMeatball} />
        case "09":
            return <FontAwesomeIcon icon={faCloudSunRain} />
        case "10":
            return <FontAwesomeIcon icon={faCloudShowersHeavy} />
        case "11":
            return <FontAwesomeIcon icon={faPooStorm} />
        case "13":
            return <FontAwesomeIcon icon={faSnowflake} />
        case "50":
            return <FontAwesomeIcon icon={faSmog} />
        default:
            return <FontAwesomeIcon icon={faSearch} />
    }
}

const onLocationKo = (location: string) =>{
    switch(location){
        case "Seoul":
            return "서울";
        case "Busan":
            return "부산";
        case "Wŏnju":
            return "원주";
        case "Jeju City":
            return "제주";
        case "Daegu":
            return "대구";
        case "Daejeon":
            return "대전";
        case "Incheon":
            return "인천";
        case "Ulsan":
            return "울산";
        case "Gongju":
            return "공주";
        case "Gangneung":
            return "강릉";
        default:
            return location;
    }
}

const TodoListWeather = () =>{

    const [loading, setLoading] = useState<boolean>(true);
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo[]>([]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
      };

    useEffect(()=>{
        setLoading(true);
        axios.get(`${url}/api/weather`)
        .then((e)=>{
            const data: WeatherInfo[]= [];
            e.data.result.map((v)=>{
                const location = onLocationKo(v.name);
                data.push({ location: location, temp: Math.round(v.main.temp- 273.15), weather: v.weather[0].icon});
            });
            setWeatherInfo([...data]);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    return(
        <WeatherWrapper>
            {loading 
                ? <div>로딩중</div> 
                : 
                <SliderWrapper {...settings}>
                    {
                        weatherInfo.map((weather, i)=>{
                            return(
                                <div key={i}>
                                    <span>{weather.location}</span>
                                    <span className="icon">{onIconChoose(weather.weather)}</span>
                                    <span>{weather.temp}</span>
                                </div>
                            )
                        })
                    }
                </SliderWrapper>
            }
        </WeatherWrapper>
    )
}

export default TodoListWeather;