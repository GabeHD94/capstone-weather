import React from 'react'


export default function googleSearch() {


    return (
        <div className="google">
          <form action="https://www.google.com/search" method="GET">
            <input type="text" name="q" placeholder="Google Search"/>
            {/* <input type="submit" value="Google Search"/> */}
          </form>
      </div>
    )
}
