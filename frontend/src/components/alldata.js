import React,{useState, useEffect} from 'react'
import './index.css'

function AllData(props) {

    return (
        <div>
            <div className="card" >
            {props.datas.map((data, idx) => (
            <div className="insidecard" key={idx}>
                <h4>{data.heading}</h4>  
                <p>{data.description}</p> 
                <img style={{width: "300px", height: "300px"}} src={`http://localhost:9999/${data.imgurl}`} />
            </div>
            ))}
            </div>
        </div>
    )
}

export default AllData
