import React, { useState } from 'react';
import { postShares } from '../components/SharesService';


const NewShareForm = ({fetchNewShare, handleFormClick}) => {
    const [name, setName] = useState('');
    const [shares_held, setNumberShares] = useState(0)

    const handleName =event => setName(event.target.value);
    const handleShares = event => setNumberShares(event.target.value)

    

    const handleSubmit =(event) =>{
        // event.preventDefault();
        const shares = {
            name,
            shares_held
        }
        fetchNewShare(shares);
        setName('');
        setNumberShares(0)
    }

    return (
        <form onSubmit={handleSubmit} className='share-list'>
            <h2>Add a share</h2>
            <div>
                <label htmlFor='name'>Name of the Company: </label>
                <input onChange={handleName} value ={name} type = 'text' id = 'name' required/>
            </div>
            <div>
                <label htmlFor='shares_held'>Number of Shares: </label>
                <input onChange={handleShares} value ={shares_held} type = 'number' min = '1'
                max = '50' id = 'number-of-shares' required/>
            </div>
            <button type="submit"  id="save">Save</button>
        </form>
    );
}
export default NewShareForm;