import { useNavigate } from "react-router-dom";

export function Create(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Új Típus</h1>
            <form onSubmit={(event) => {
                event.persist();
                event.preventDefault();
                fetch("https://localhost:5001/api/UjTipusok", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: 0,
                        megnevezes: event.target.elements.Name.value,
                        leiras: event.target.elements.Leiras.value,
                        kepek: event.target.elements.Kep.value,
                    }),
                })
                .then(() =>
            {
                navigate("/tip");
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Típus név:</label>
                <div className="col-sm-9">
                <input type="text" name="Name" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Típus leírás:</label>
                <div className="col-sm-9">
                <input type="text" name="Leiras" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Típus kép:</label>
                <div className="col-sm-9">
                <input type="text" name="Kep" className="form-control" />
                </div>
            </div>
            <button type="submit" className="btn btn-success">
                Küldés
            </button>
            </form>
        </div>
    );
}