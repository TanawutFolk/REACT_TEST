import Profilepic from './assets/Folk.jpg';

function Card(){

    return(
        
        <div className="card">
            <img className="card-image" src={Profilepic} alt="Error img" />
            <h2 className='card-title'>Folk</h2>
            <p className='card-text'>Sideline Rate 2500</p>
            <button className="card-button"> Buy </button>
            <button className="card-button1">Add</button>
        </div>

    );
}

export default Card