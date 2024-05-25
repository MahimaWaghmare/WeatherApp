import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
// material icons
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1527666466760-f6a7a2b31176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhemUlMjB3YXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://media.istockphoto.com/id/1011128754/photo/thermometer-in-the-sky-the-heat.webp?b=1&s=170667a&w=0&k=20&c=kKYCK4MuCkm5dV0isRuV0K5qjLmHEo8m0L8fbnd82KQ=";
    const COLD_URL = "https://images.unsplash.com/photo-1520889905494-a9ba556b0cf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";



    // let info = {
    //     city: "Delhi",
    //     feelsLike: 24.84,
    //     temp: 25.05,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather: "haze"
    // };

return (
  <div className="InfoBox">
    {/* <h1>WeatherInfo - {info.weather}</h1> */}

    <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Temp min = {info.tempMin}&deg;C</p>
          <p>Temp max = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  </div>
);
}