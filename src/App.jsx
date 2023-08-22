import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [akhirMesin1, setAkhirMesin1] = useState("");
  const [awalMesin1, setAwalMesin1] = useState("");
  const [akhirMesin2, setAkhirMesin2] = useState("");
  const [awalMesin2, setAwalMesin2] = useState("");
  const [datcuk, setDatcuk] = useState("");
  const [pallet, setPallet] = useState("");
  const [gcase, setGcase] = useState("");
  const [bal, setBal] = useState("");
  const [press, setPress] = useState("");
  const [result, setResult] = useState("");
  const [tambahMesin, setTambahMesin] = useState(false);

  const handleHitung = () => {
    if (!data2) {
      setData2(0);
    }
    if (!akhirMesin2) {
      setAkhirMesin2(0);
    }
    if (!awalMesin2) {
      setAwalMesin2(0);
    }
    setDatcuk(
      data + data2 - (akhirMesin1 - awalMesin1 + akhirMesin2 - awalMesin2)
    );
  };
  const handleHasilAkhir = () => {
    setResult(hasilBaller - datcuk);
  };

  const handleTambah = () => {
    setTambahMesin(true);
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
    <div style={{ minWidth: "350px" }}>
      <h1>Hitung LPC 2</h1>
      <div
        className="input-box"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <h3>Cukai Terpakai</h3>
          <div>
            <div style={{ display: "flex", maxWidth: "100%", width: "100%" }}>
              <input
                type="number"
                value={data}
                placeholder="Mesin 1"
                onChange={(e) => setData(parseInt(e.target.value))}
              />
              {tambahMesin && (
                <input
                  type="number"
                  value={data2}
                  placeholder="Mesin 2"
                  onChange={(e) => setData2(parseInt(e.target.value))}
                />
              )}
            </div>
            {datcuk && (
              <div style={{ border: "1px solid white", margin: "15px" }}>
                <h2>Hasil Cukai Terpakai: {data + data2}</h2>
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            border: "2px solid white",
            padding: "10px",
          }}
        >
          <h2 style={{ margin: "0" }}>Mesin 1</h2>
          <div style={{ display: "grid", alignItems: "start" }}>
            <p>Sisa Akhir</p>
            <input
              type="number"
              value={akhirMesin1}
              placeholder="Sisa Akhir Mesin 1"
              onChange={(e) => setAkhirMesin1(parseInt(e.target.value))}
            />
            <p>Sisa Awal</p>
            <input
              type="number"
              value={awalMesin1}
              placeholder="Sisa Awal Mesin 1"
              onChange={(e) => setAwalMesin1(parseInt(e.target.value))}
            />

            {datcuk && (
              <div>
                <h4>Cukai Mesin: {akhirMesin1 - awalMesin1}</h4>
              </div>
            )}
          </div>
        </div>
        {!tambahMesin && (
          <div>
            <button onClick={handleTambah}>Tambah Mesin</button>
          </div>
        )}
        {tambahMesin && (
          <div
            style={{
              marginTop: "20px",
              border: "2px solid white",
              padding: "10px",
            }}
          >
            <h2 style={{ margin: "0" }}>Mesin 2</h2>
            <div style={{ display: "grid", alignItems: "start" }}>
              <p>Sisa Akhir</p>
              <input
                type="number"
                value={akhirMesin2}
                placeholder="Sisa Akhir Mesin 2"
                onChange={(e) => setAkhirMesin2(parseInt(e.target.value))}
              />
              <p>Sisa Awal</p>
              <input
                type="number"
                value={awalMesin2}
                placeholder="Sisa Awal Mesin 2"
                onChange={(e) => setAwalMesin2(parseInt(e.target.value))}
              />

              {datcuk && (
                <div>
                  <h4>Cukai Mesin: {akhirMesin2 - awalMesin2}</h4>
                </div>
              )}
            </div>
          </div>
        )}

        <div style={{ display: "grid", placeItems: "center" }}>
          {datcuk && (
            <div>
              <h2 style={{ border: "1px solid white", padding: "10px" }}>
                Hasil Cukai:{" "}
                {akhirMesin1 - awalMesin1 + akhirMesin2 - awalMesin2}
              </h2>
            </div>
          )}
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
            <div style={{ maxWidth: "100%", wordWrap: "break-word" }}>
              <h1>LPC 2</h1>
            </div>
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
                    maxWidth: "50%",
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
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid white",
                    marginBottom: "30px",
                    padding: "10px",
                  }}
                >
                  <h2 style={{ marginBottom: "0" }}>
                    Hasil Produksi Case Packer :{" "}
                  </h2>
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
                  <h2 style={{ marginBottom: "0" }}>Hasil LPC 2 :</h2>
                  <h1 style={{ marginTop: "0" }}>{result}</h1>
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
