import React, {useState} from 'react'
import {searchPokemon} from '../Api'


const Searchbar = () => {
    const [search, setSearch] = useState('dito')
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }
    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        setPokemon(result)
    }
    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }
    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input 
                    placeholder='Buscar Pokemon'
                    onChange={onChangeHandler}
                />
            </div>
            <div className='searchbar-btn'>
                <button 
                    onClick={onButtonClickHandler}
                >
                    Capturar
                </button>
            </div>
            {pokemon ? (
                <div>
                    <div>{pokemon.name}</div>
                    <div>{pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) : null}
        </div>
    )
}

export default Searchbar
