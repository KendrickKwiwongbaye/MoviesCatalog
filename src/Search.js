import React,{useState} from "react"
import axios from "axios"

const Search=()=>{
    const [inputText, setInputText] = useState("")
    const [movieStorage, setMovieStorage] = useState([])

    const validSearch= inputText.length > 0

    const handleChange=(event)=>{
        setInputText(event.target.value)
    }

    const searchClicked=(event)=>{
        event.preventDefault()
        setInputText("")
        apiSearch()
    }


    const apiSearch=()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=268ab19cc092a8ffa66ba7762a042ad4&query=` + inputText).then(res=>{
            console.log(res.data.results)
            setMovieStorage(res.data.results)
        })
    }
    const IMG_URL = "https://image.tmdb.org/t/p/w500"
    //img url from imdb database
    return(
        <div className="SeachSection">
            <input type="text" class="form-control" value={inputText} placeholder="Search Catalog " onChange={handleChange}/>
            
                {validSearch&& <button class="btn btn-primary" onClick={searchClicked}>SEARCH</button>}
                <div className="searchrows">
                {movieStorage.map(mov=>(
                    <div class="container1">
                        <div class="row">
                        <div class="col-sm-4 py-3 py-sm-0">
                            <div class="card box-shadow">
                            <img src={IMG_URL + mov.poster_path} class="card-img-top" alt="Movie Picture"/>
                            <div class="card-body">
                                <h5 class="card-title">{mov.title}</h5>
                                <p class="card-text">{mov.overview}</p>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search