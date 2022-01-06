import './Paginado.css';

export default function Pagination({videogamePerPage, videogamesTot, pagination}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(videogamesTot/videogamePerPage); i++) {
        pageNumbers.push(i)
    }
    return(
        <>
        <nav className='paginado'>
            <ul className="ulLista">
                { pageNumbers?.map(number => (
                        <li className="Numeros" key={number} onClick={()=> pagination(number)}>
                            {number}
                        </li>
                    ))
                }
            </ul>
        </nav>
        </>
    )
};