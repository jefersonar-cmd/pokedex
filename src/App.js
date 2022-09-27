import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Searchbar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemon, getPokemonData } from './Api'

function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const fetchPokeons = async () => {
    try {
      setLoading(true)
      const data = await getPokemon()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const result = await Promise.all(promises)
      setPokemons(result)
      setLoading(false)
    } catch (error) {
      console.log('Error:', error)
    }
  }
  useEffect(() => {
    console.log('Carregou')
    fetchPokeons()
  }, [])
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading}/>
    </div>
  );
}

export default App;
