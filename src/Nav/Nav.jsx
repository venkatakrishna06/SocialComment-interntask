import React from 'react';
import './Nav.css';
function Nav(){
    const Text=[
        {
            name: 'Integration'
        },
        {
            name: 'Pricing'
        },
        {
            name: 'Blog',
        },
        {
            name: 'About us',
        }
    ]
    return(
        <div className='container'>
            <div className="row">
                <ul>
                  <li className={'logo'}>  <img src="https://i.ibb.co/Qf3RQjy/logo.jpg" alt=""/></li>
                    {
                        Text.map((values)=>{
                                return  <li>{values.name}</li>
                            }
                        )
                    }
                    <div className='getStarted'>
                        <button className="border border-primary"> Get early access</button>
                    </div>
                </ul>
            </div>

        </div>
    );
}
export default Nav;