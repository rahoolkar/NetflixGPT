import { useState } from "react";
import { language } from "../utils/language";

function GPTSeachBar() {
  const [lang, setLang] = useState("en");
  function handleLanguageChange(event) {
    setLang(event.target.value);
  }
  return (
    <div className="mt-[10%] flex items-center justify-center">
      <form className="w-1/2 z-20 grid grid-cols-12 bg-black">
        <input
          type="text"
          className="p-2 m-4 col-span-9 rounded-lg bg-white placeholder:text-gray-400"
          placeholder={language[lang].placeholder}
        />

        <button className="col-span-3 bg-red-500 text-white m-4 px-4 py-2 rounded-lg">
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
