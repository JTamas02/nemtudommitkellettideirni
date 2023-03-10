import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function List(){
    const [termekek, setTermekek] = useState([]);
    useEffect(() => {
    fetch("https://localhost:5001/api/Tipusok")
    .then((res) => res.json())
    .then((termek) => setTermekek(termek))
    .catch(console.log)
    }, []);
    return(
        <div>
        <h1>Típusok</h1>
        {termekek.map((t) => (
             <div>
                <NavLink key={termekek.id} to={"/tip/" + termekek.id}>
                <div>
                    <h1>{t.megnevezes}</h1>
                </div>
                <div>{t.leiras}</div>
                <div>
                    <img src={t.kepek} title={t.kepek} alt={t.kepek} />
                </div>
                </NavLink>
            </div>
        ))}
        </div>
    );
}