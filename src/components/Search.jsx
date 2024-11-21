import styles from './Search.module.css';

const Search = ({ search, setSearch }) => {
    return (
        <div className={styles.search}>
            <h2>Pesquisar Trefa:</h2>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Digite para pesquiar"/>
        </div>
    )
}

export default Search