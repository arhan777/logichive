import React, { useState, useEffect } from 'react'
import AllData from './alldata';


function Home() {
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [datas, setDatas] = useState([]);


    

    const send = e => {
        //make api call
        const data = new FormData();
        data.append('heading', heading)
        data.append('description', description)
        data.append('file', photo)

        console.log(data);
        fetch('http://localhost:9999/', {
            method: "POST",
            body: data
        })
            .then(r => r.json())
            .then(resp => {
                console.log(resp);
                fetchData();
            })
            .catch(err => {
                console.log("error ", err);
            })
    }

    const fetchData=()=> {
        fetch('http://localhost:9999/data')
        .then(r => r.json())
        .then(resp => {
            console.log(resp)
            setDatas(resp)
        })
        .catch(err => {
            console.log("error ", err);
        })
    }


    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
        <div>
            <input value={heading} type="text" placeholder="heading" name="heading" onChange={e => setHeading(e.target.value)} />
            <input value={description} type="text" placeholder="description" name="description" onChange={e => setDescription(e.target.value)} />
            <input type="file" name="photo" onChange={e => setPhoto(e.target.files[0])} />
            <button onClick={send}>Add</button>
        </div>
        <AllData datas={datas} />
        </>
    )
}

export default Home
