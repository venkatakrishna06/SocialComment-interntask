import React from 'react';
import './Body.css';


function Body(){
    return(
        <div className="container body">
            <div className="row">
                <div className={'half1'}>
                    <h1 className={'head'}>Don't worry.<br></br>
                        We are here for <br></br>
                        every solution.
                    </h1>
                    <p className={'content'}>
                        Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf
                        <br/>moon. Actually beard single-origin coffee, twee 90's PBR Echo Park
                    </p>
                    <div className={'buttons'}>
                        <button type="button" className="btn btn-primary">Get started</button>
                        <button type="button" className="btn btn-light">Watch video</button>
                    </div>
                    <div className={'footer'}>
                        <span id={"int"}>Integrations</span>
                        <span>
                        <img src="https://i.ibb.co/Q9Cy2hF/amazon.jpg" alt="amazon"/>
                        <img src="https://i.ibb.co/B6xxysk/google.jpg" alt="google"/>
                        <img src="https://i.ibb.co/g75vLgf/skrill.jpg" alt="skrill"/>
                        <img src="https://i.ibb.co/pvc6g2J/northeren.jpg" alt=""/>
                            </span>
                    </div>



                </div>
                <div className={'half2'}>
                    <img src={"https://i.ibb.co/W3VFDxH/sideimg.jpg"} alt={'test'}/>
                </div>
            </div>
        </div>
    );
}
export default Body;