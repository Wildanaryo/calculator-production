import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [cukai, setCukai] = useState("");
  const [datcuk, setDatcuk] = useState("");
  const [pallet, setPallet] = useState("");
  const [gcase, setGcase] = useState("");
  const [bal, setBal] = useState("");
  const [press, setPress] = useState("");
  const [result, setResult] = useState("");

  const handleHitung = () => {
    setDatcuk(data - cukai);
  };
  const handleHasilAkhir = () => {
    setResult(hasilBaller - cukai - data);
  };

  const ggpallet = Math.floor(datcuk / 24000);
  const ggcase = Math.floor((datcuk - ggpallet * 24000) / 800);
  const ggball = Math.floor((datcuk - ggpallet * 24000 - ggcase * 800) / 200);
  const ggpress = Math.floor(
    (datcuk - ggpallet * 24000 - ggcase * 800 - ggball * 200) / 10
  );
  const ggpack =
    datcuk - ggpallet * 24000 - ggcase * 800 - ggball * 200 - ggpress * 10;

  const hasilBaller = pallet * 24000 + gcase * 800 + bal * 200 + press * 10;

  return (
    <div style={{ minWidth: "min-content" }}>
      <h1>Perhitungan LPC 2</h1>
      <div
        className="input-box"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <h3>Hasil Packer</h3>
          <input
            type="number"
            value={data}
            placeholder="Masukkan Hasil Packer"
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div>
          <h3>Hasil Cukai</h3>
          <input
            type="number"
            value={cukai}
            placeholder="Masukkan Hasil Cukai"
            onChange={(e) => setCukai(e.target.value)}
          />
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <button onClick={handleHitung}>HITUNG</button>
        </div>
      </div>
      {datcuk ? (
        <div>
          <div style={{ border: "5px solid white", paddingBottom: "1em" }}>
            <h2>Hasil Produk Packer : {datcuk} pack</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 6fr)",
                textAlign: "left",
                fontSize: "20px",
              }}
            >
              <div
                style={{
                  textAlign: "right",
                  marginRight: "10px",
                }}
              >
                {ggpallet}
              </div>
              <div>Pallet</div>
              <div style={{ textAlign: "right", marginRight: "10px" }}>
                {ggcase}
              </div>
              <div>Case</div>
              <div style={{ textAlign: "right", marginRight: "10px" }}>
                {ggball}
              </div>
              <div>Bal</div>
              <div style={{ textAlign: "right", marginRight: "10px" }}>
                {ggpress}
              </div>
              <div>Press</div>
              <div style={{ textAlign: "right", marginRight: "10px" }}>
                {ggpack}
              </div>
              <div>Pack</div>
            </div>
          </div>
          <div
            style={{
              border: "5px solid white",
              marginTop: "30px",
              padding: "20px",
            }}
          >
            <h1>Perhitungan Akhir</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Pallet</p>
              <input
                type="number"
                value={pallet}
                onChange={(e) => setPallet(e.target.value)}
              />
              <p>Case</p>
              <input
                type="number"
                value={gcase}
                onChange={(e) => setGcase(e.target.value)}
              />
              <p>Bal</p>
              <input
                type="number"
                value={bal}
                onChange={(e) => setBal(e.target.value)}
              />
              <p>Press</p>
              <input
                type="number"
                value={press}
                onChange={(e) => setPress(e.target.value)}
              />
              <div style={{ display: "grid", placeItems: "center" }}>
                <button onClick={handleHasilAkhir}>Hitung Hasil</button>
              </div>
              {result && (
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    border: "1px solid white",
                    marginBottom: "30px",
                  }}
                >
                  <h2>Hasil Produk Baller : </h2>
                  <h2>{hasilBaller}</h2>
                </div>
              )}
            </div>
            {result && (
              <div style={{ display: "grid", placeItems: "center" }}>
                <div
                  style={{
                    width: "75%",
                    border: "1px solid white",
                    borderRadius: "25px",
                  }}
                >
                  <h1>Hasil LPC 2 :</h1>
                  <h1>{result}</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
