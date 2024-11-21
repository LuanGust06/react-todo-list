const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <h2>Pesquisar Trefa:</h2>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Digite para pesquiar"/>
        </div>
    )
}

export default Search