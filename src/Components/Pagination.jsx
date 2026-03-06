import React from 'react';

const Pagination = ({totalPages, cardsPerPage, setCurrentPage}) => {
    let page = [];

    for(let i=1; i <= Math.ceil(totalPages / cardsPerPage); i++){
        page.push();
    }

    return(
        <>
        <div className='font-heading text-black'>
            {page.map((page, index)=>{
                return <button className='text-black font-heading text-lg' key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
            })}
        </div>
        </>
    )
}

export default Pagination