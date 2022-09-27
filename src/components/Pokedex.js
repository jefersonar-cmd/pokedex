import React from 'react';
import Paginations from './Pagination';
import Pokemon from './Pokemon'

const Pokedex = (props) => {
    const {pokemons, loading} = props
    return (
        <div>
            <div className='pokedex-header'>
                <h1>Pokedex</h1>
                <Paginations/>
            </div>
            {loading ? (
                <div>Carregando, segura aí fera...</div>
            ) : (
                <div className='pokedex-grid'>
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon} />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Pokedex;
