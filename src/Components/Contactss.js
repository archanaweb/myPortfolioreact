import React, { useState } from 'react';

function Contactnew (){

const [user, setUser] = useState('')

    return(
        <>
            <div className='contacyForm'>
                <form>
                    <label htmlFor='name'></label>
                    <input type="text" id='name' className='userName' placeholder='Name' value={user}>
                    </input>
                </form>
            </div>
        
        </>
    )
}
export default Contactnew;