import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()
const baseUrl = 'https://google-search72.p.rapidapi.com/'

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const getResults = async (type) => {
    setLoading(true)

    const res = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ad04f1c0e0msh5c9948853e98cb5p14553ejsnbcef61cecae',
    'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
      },
    })

    const data = await res.json();
    
    console.log({type, data})
    if(type.includes('/search')) {
        setResults(data.items);
    } else if(type.includes('/image')) {
        setResults(data.items);
    } else {
        setResults(data);
    }
    setLoading(false);
  }

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)