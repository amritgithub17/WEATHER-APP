import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const  [data,setData]= useState({}); 
  const [inputCity,setInputCity]=useState("");
  //Function for API CALL
  const apikey= "1edb50c86721ee51304afec2c9771c96";
  const getWeatherDetails=(cityName)=>{
    if(!cityName)return;
    const apiURL= "https://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid=" + apikey;
    axios.get(apiURL).then((res)=>
    {
      console.log(res.data);
      setData(res.data);
    }).catch((err)=>
    {
      console.log("err",err);
    })
  }

  const Change =(e)=>
  {
    setInputCity(e.target.value);
  }
  const Reaction =() =>
  {
    // alert("ALl fields are mandatory");
    getWeatherDetails(inputCity);
  }
  // useEffect(()=>{
  //   getWeatherDetails("delhi")
  // },[]);
  return (
    <div className="col-md-12">
      <div className="wbg ">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control col-md-6" value={inputCity} onChange={Change}/>
          <button className="btn btn-primary" type="button" onClick={Reaction}>
            Search
          </button>
        </div>
        


        {Object.keys(data).length>0 && 
        <div className="col-md-12 text-center mt-5">
          <div className="shadow  rounded weatherResultBox">
            <img className="icon"src="https://tse2.mm.bing.net/th?id=OIP.S0UVTDlC2SKNjel2zYhaDgHaF7&pid=Api&P=0"></img>
            <h5 className="city">{data?.name}</h5>
            <h6 className="temp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
          </div>
        </div>}
        </div>
      
    </div>
  );
}

export default App;
