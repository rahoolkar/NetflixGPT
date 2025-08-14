import { useState } from "react";
import { language } from "../utils/language";
import { useDispatch } from "react-redux";
//import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { clearSuggestedMovies } from "../utils/movieRecommendationSlice";
import { addToSuggestion } from "../utils/movieRecommendationSlice";

function GPTSeachBar() {
  const [inputSearch, setInputSearch] = useState("");
  const [lang, setLang] = useState("en");

  const dispatch = useDispatch();

  function handleLanguageChange(event) {
    setLang(event.target.value);
  }

  function handleSearchText(event) {
    setInputSearch(event.target.value);
  }

  async function searchMovieInTMDB(movieName) {
    let response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
      API_OPTIONS
    );
    let data = await response.json();
    return data.results[0];
  }

  async function searchForMovie() {
    dispatch(clearSuggestedMovies());
    try {
      // const response = await openai.responses.create({
      //   model: "gpt-3.5-turbo",
      //   input:
      //     "suggest me some movie names for ther query" +
      //     inputSearch +
      //     " and give me 10 movie name comma seperated. for example : Hero, Golmaal, Koi mil gaya",
      // });
      // console.log(response.output_text);
      //const allRecommendedMoviesListByOpenAI = response.output_text[0].message.content.split(",");
      const allRecommendedMoviesListByOpenAI = [
        "Andaz Apna Apna",
        "Gol Maal",
        "Padosan",
        "Chupke Chupke",
        "Sholay",
        "Lagaan",
        "Dilwale Dulhania Le Jayenge",
        "Zindagi Na Milegi Dobara",
        "3 Idiots",
        "Queen",
        "Barfi!",
        "Taare Zameen Par",
        "PK",
        "Munna Bhai M.B.B.S.",
        "Swades",
        "Gully Boy",
      ];
      const allPromiseArray = allRecommendedMoviesListByOpenAI.map((movie) => {
        return searchMovieInTMDB(movie);
      });
      const allRecommendedMoviesDetails = await Promise.all(allPromiseArray);
      dispatch(addToSuggestion(allRecommendedMoviesDetails));
    } catch (err) {
      console.log("error in chatgpt api", err);
    }
  }
  return (
    <div className="mt-[10%] flex items-center justify-center">
      <form
        className="w-1/2 z-20 grid grid-cols-12 bg-black"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={inputSearch}
          className="p-2 m-4 col-span-9 rounded-lg bg-white placeholder:text-gray-400"
          placeholder={language[lang].placeholder}
          onChange={handleSearchText}
        />

        <button
          className="col-span-3 bg-red-500 text-white m-4 px-4 py-2 rounded-lg"
          onClick={searchForMovie}
        >
          {language[lang].btnString}
        </button>
      </form>

      <div className="bg-black p-4">
        <label className="text-white" htmlFor="language">
          Language :
        </label>
        <select
          className="text-white mx-2 rounded-lg py-1 px-2"
          name="language"
          id="language"
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="bn">Bengali</option>
          <option value="kn">Kannada</option>
          <option value="hn">Hindi</option>
        </select>
      </div>
    </div>
  );
}

export default GPTSeachBar;
