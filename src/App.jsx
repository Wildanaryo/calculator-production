import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [cukaiAkhir1, setCukaiAkhir1] = useState("");
  const [cukaiAkhir2, setCukaiAkhir2] = useState("");
  const [cukaiAwal1, setCukaiAwal1] = useState("");
  const [cukaiAwal2, setCukaiAwal2] = useState("");
  const [datcuk, setDatcuk] = useState("");
  const [pallet, setPallet] = useState("");
  const [gcase, setGcase] = useState("");
  const [bal, setBal] = useState("");
  const [press, setPress] = useState("");
  const [result, setResult] = useState("");

  const handleHitung = () => {
    if (!data2) {
      setData2(parseInt(0));
    }
    if (!cukaiAkhir2) {
      setCukaiAkhir2(parseInt(0));
    }
    if (!cukaiAwal2) {
      setCukaiAwal2(parseInt(0));
    }
    setDatcuk(
      data + data2 - cukaiAkhir1 - cukaiAkhir2 + cukaiAwal1 + cukaiAwal2
    );
  };
  const handleHasilAkhir = () => {
    setResult(hasilBaller - datcuk);
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

  console.log(data2, cukaiAkhir2);
  return (
    <div style={{ minWidth: "min-content" }}>
      <h1>Perhitungan LPC 2</h1>
      <div
        className="input-box"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <h3>Cukai Terpakai</h3>
          <div>
            <input
              type="number"
              value={data}
              placeholder="Mesin 1"
              onChange={(e) => setData(parseInt(e.target.value))}
            />
            <input
              type="number"
              value={data2}
              placeholder="Mesin 2"
              onChange={(e) => setData2(parseInt(e.target.value))}
            />
            {datcuk && (
              <div style={{ border: "1px solid white", margin: "15px" }}>
                <h2>Hasil Cukai Terpakai: {data + data2}</h2>
              </div>
            )}
          </div>
        </div>
        <div>
          <h3>Sisa Produk Bercukai Akhir</h3>
          <div>
            <div style={{ display: "flex", maxWidth: "100%" }}>
              <input
                type="number"
                value={cukaiAkhir1}
                placeholder="Sisa Akhir Mesin 1"
                onChange={(e) => setCukaiAkhir1(parseInt(e.target.value))}
              />
              <input
                type="number"
                value={cukaiAkhir2}
                placeholder="Sisa Akhir Mesin 2"
                onChange={(e) => setCukaiAkhir2(parseInt(e.target.value))}
              />
            </div>
            {datcuk && (
              <div>
                <h4>Sisa Akhir: {cukaiAkhir1 + cukaiAkhir2}</h4>
              </div>
            )}
          </div>
        </div>
        <div>
          <h3>Sisa Produk Bercukai Awal</h3>
          <div>
            <input
              type="number"
              value={cukaiAwal1}
              placeholder="Sisa Awal Mesin 1"
              onChange={(e) => setCukaiAwal1(parseInt(e.target.value))}
            />
            <input
              type="number"
              value={cukaiAwal2}
              placeholder="Sisa Awal Mesin 2"
              onChange={(e) => setCukaiAwal2(parseInt(e.target.value))}
            />
            {datcuk && (
              <div>
                <h4>Sisa Awal: {cukaiAwal1 + cukaiAwal2}</h4>
                <div style={{ display: "grid", placeItems: "center" }}>
                  <h2
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      maxWidth: "300px",
                    }}
                  >
                    Hasil Cukai di Mesin:{" "}
                    {cukaiAkhir1 + cukaiAkhir2 - cukaiAwal1 - cukaiAwal2}
                  </h2>
                </div>
              </div>
            )}
          </div>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "left",
              }}
            >
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
                <button
                  style={{
                    width: "300px",
                    marginTop: "15px",
                  }}
                  onClick={handleHasilAkhir}
                >
                  Hitung Hasil
                </button>
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
                  <h2>Hasil Produksi Case Packer : </h2>
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
