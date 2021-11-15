import React, { useState, useEffect } from "react";
import axios from "axios";

function SpellSearch() {
  const [spells, setSpells] = useState("");
  const [returnedSearch, setReturnedSearch] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();
    console.log(`rendering`);

    return () => {
      abortCont.abort();
    };
  }, []);

    const searchKeyword = async (val) => {
    //   console.log(`https://www.dnd5eapi.co/api/spells=${val}`)
    console.log("call api for spells:", spells);
    try {
      const res = await axios(`https://api.open5e.com/spells/?search=${val}`);
      const data = await res.data.results;
      console.log("apidata:", data);
      setReturnedSearch(data);
    } catch (error) {
      console.log(error);
    }
  };

  function onClickHandler() {}

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
        <button type="button" onClick={() => searchKeyword(spells)}>
          Search
        </button>
      </form>
    </>
  );
}

export default SpellSearch;

// const getSpell = () => {
//     Axios.get(`https://www.dnd5eapi.co/api/spells`).then(
//         (response)=> {
//             console.log(response)
//         }
//     );
// };

// const handleSubmit = () => {
//     const searchQuery = inputSearchRef.current.value
// }

// async function fetchData(searchQuery) {
//     try {
//         const response = await fetch (`https://www.dnd5eapi.co/api/`)
//     } catch(error) {
//         console.log(error)
//     }
// }

// const search = async val => {
//     const res = await axios(
//         `https://www.dnd5eapi.co/api/spells?query=${val}`)
//     const spells = await res.data.results;
//     setSpells(spells)
// }

// const onClickHandler = async e => {
//     search(e.target.value)
//     setSpells(e.target.valule)
// };
