import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Single(){
    const params = useParams();
    const id = params.id;
    const[termek,setTermek] = useState([]);
    useEffect(() => {
        (async() => {
            try{
                const res = await fetch(`https://localhost:5001/api/Tipusok/${id}`)
                const termek = res.json();
                setTermek(termek);
            }
            catch(error){
                console.log(error);
            }
        })
        ();
    }, [id]);
    return(
        <div>
            <div>
                <h1>{termek.megnevezes}</h1>
            </div>
            <div>
                {termek.leiras}
            </div>
            <div>
                <img src={termek.kepek} title={termek.kepek} alt={termek.kepek} />
            </div>
        </div>
    );
}