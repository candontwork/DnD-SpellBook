import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function SpellSearch({setDisplayResult}) {
  const [spells, setSpells] = useState("");
  const [returnedSearch, setReturnedSearch] = useState("");
  let history = useHistory();

  useEffect(() => {
    const abortCont = new AbortController();
    // console.log(`rendering`);

    return () => {
      abortCont.abort();
    };
  }, []);

  const searchKeyword = async (val) => {
    console.log(`https://api.open5e.com/spells/?search=${val}`);
    console.log("call api for spells:", spells);

    try {
      const res = await axios(`https://api.open5e.com/spells/?search=${val}`);
      const data = await res.data.results;
      console.log("apidata:", data);
      setReturnedSearch(data);
     setDisplayResult(data) 
      history.push("/SpellResults");
    } catch (error) {
      console.log(error);
    }
  };

  console.log("spells:", spells);
  console.log("returnedSearch:", returnedSearch);

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="spell-name here"
          value={spells}
          onChange={(e) => {
            setSpells(e.target.value);
          }}
        />

        <button
          type="button"
          onClick={() => {
            searchKeyword(spells);
          }}
        >
          Search
        </button>
      </form>
    </>
  );
}

export default SpellSearch;
