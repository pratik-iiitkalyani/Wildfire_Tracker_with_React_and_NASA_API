import Spinner from './91.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={Spinner} alt="loading"/>
            <h3>Fetching Data....</h3>
        </div>
    )
}

export default Loader
