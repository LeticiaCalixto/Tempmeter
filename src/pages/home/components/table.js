import React from "react";

export default function Table() {
  return (
    <div>
      <div className="table" style={{ marginTop: 170, marginLeft: "10%" }}>
        <div className="table-title">Sensor 1</div>
        {/* <div id="chart"></div> */}
        <button className="button" style={{ marginTop: "130%" }}>Mais detalhes</button>
      </div>

      <div className="table" style={{ marginTop: 170, marginLeft: "40%" }}>
        <div className="table-title">Sensor 2</div>
        <button className="button" style={{ marginTop: "130%" }}>Mais detalhes</button>
      </div>

      <div className="table" style={{ marginTop: 170, marginLeft: "70%" }}>
        <div className="table-title">Sensor 3</div>
        <button className="button" style={{ marginTop: "130%" }}>Mais detalhes</button>
      </div>
    </div>
  );
}
