import React from 'react'

function Navig() {
    return (
        <div className='bg-black'>

            {/* <p>Home</p>
            <p>Contact us</p>
            <p>About</p>
            <p>Profile</p> */}

            <div style={{ color:'white',display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 9, paddingLeft: 10,margin:10}}>
                <ul style={{display:'inline'}}>
                    <li>
                        <a href="#" target='_blank'>Home</a>
                    </li>
                    <li>
                        <a href="#" target='_blank'>Profile</a>
                    </li>
                    <li>
                        <a href="#" target='_blank'>About</a>
                    </li>

                </ul>
            </div>
           
        </div>
    )
}

export default Navig