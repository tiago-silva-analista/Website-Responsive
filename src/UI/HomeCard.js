import React from 'react'
import {useHistory} from 'react-router-dom';
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fvestibular.brasilescola.uol.com.br%2Fenem%2Festatistica-basica-no-enem.htm&psig=AOvVaw1Hyx_hIkexJrBc7maIFRtR&ust=1587570754713000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDU74rw-egCFQAAAAAdAAAAABAD
//https://mdbootstrap.com/img/Photos/Others/background.jpg
const HomeCard = (properties) =>{
    const history = useHistory();
    return(
        <div className="col-12 col-lg-4 col-md-6 col-sm-6 .col-xl-4 pt-3">
            <div className="card" style={{width: '100%'}}>
                <img src={`${properties.image}`}
                    style={{paddingTop: '0px', width: '100%', height: '50%'}}
                    alt="Card  cap" 
                    className="card-img-top rounded mx-auto d-block"/>
                <div className="card-body">
                    <h5 className="card-title">{properties.title}</h5>
                    <p className="card-text">{properties.text}</p>
                    <a href="#" className="btn btn-primary" onClick={()=>{ history.push(`/${properties.title}`)}}>Go somewhere</a>
               </div>
            </div>
        </div>
    )
}

export default HomeCard;