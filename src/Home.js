import React,{useEffect, useState} from "react"
import axios from "axios"

const Home=()=>{

    const [items, setItems] = useState([])

    useEffect(()=>{
        getApi()
    },[])

    const getApi=()=>{
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=&language=en-US&page=1").then(res=>{
            console.log(res.data.results)
            setItems(res.data.results)
    })
    }
    
    const IMG_URL = "https://image.tmdb.org/t/p/w500"

    return(
        <div className="HomeSection">
            {items.map(item=>(
                 <div class="container">
                 <div class="row">
                   <div class="col-sm-4 py-3 py-sm-0">
                     <div class="card box-shadow">
                       <img src={IMG_URL + item.poster_path} class="card-img-top" alt="Movie Image"/>
                       <div class="card-body">
                         <h5 class="card-title">{item.title}</h5>
                         <p class="card-text">{item.overview}</p>
                         
                       </div>
                     </div>
                   </div>
                   </div>
                   </div>
            ))}
        </div>
    )
}

export default Home
