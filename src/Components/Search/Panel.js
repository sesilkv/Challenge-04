import React from 'react'
import './panel.css'
import { Link } from 'react-router-dom'

const Panel = () => {
  return (
      <div className="row justify-content-center">
        <div className="row rounded-2 py-3 shadow-sm bg-white position-absolute panel">
            {/* <h6 className="fw-bold px-4">{!props.cari ? "Pencarianmu" : ""}</h6> */}
            <div className="d-flex col-11 col-12">
                <div className="col-3 px-2">
                    <div className="my-3">
                    <label className="form-label fs-6">Tipe Driver</label>
                    <select id="disabledSelect" className="form-select">
                        <option></option>
                        <option>Disabled select</option>
                    </select>
                    </div>
                </div>
                
                <div className="col-3 px-2">
                    <div className="my-3">
                        <label className="form-label">Tanggal</label>
                        <input type="date" className="form-control"/>
                    </div>
                </div>

                <div className="col-3 px-2">
                    <div className="my-3">
                        <label className="form-label">Waktu jemput/ambil</label>
                        <input type="time" className="form-control"  />
                    </div>
                </div>
                <div className="col-3 px-2">
                    <div className="my-3">
                        <label className="form-label">Jumlah penumpang (opsional)</label>
                        <input type="number" className="form-control" />
                    </div>
                </div>
            </div>
            <Link to={`/cari`} className="submit">
                <button type='submit'>Cari Mobil</button>
            </Link>
        </div>
    </div>
  )
}

export default Panel