import React from 'react';

const Paginations = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className='pagination-container'>
            <button onClick={onLeftClick}>◀️</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>▶️</button>
        </div>
    )
}

export default Paginations;