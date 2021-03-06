import React from "react"
import SpellSearch from "./SpellSearch"

function Home({setDisplayResult}) {
    return (
        <>
            <h1 className = 'title'>SpellBook</h1>
            <h4 className = 'tagline'>Your one stop source for spells</h4>
            <SpellSearch setDisplayResult={setDisplayResult} />
        </>
    )
}

export default Home