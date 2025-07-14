

export default function ProfileCard() {
  return (
    <section id="rolam" className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Rólam:</h2>

      <div className="row justify-content-center gx-5">
        {/* Bal oszlop */}
        <div className="col-12 col-md-6 mb-4">
          <div className="p-4 bg-light rounded shadow-sm h-100">
            <ul className="list-unstyled mb-0">
              <li className="d-flex justify-content-between py-2 border-bottom">
                <span className="text-secondary fw-bold">Név:</span>
                <span>Zénó</span>
              </li>
              <li className="d-flex justify-content-between py-2 border-bottom">
                <span className="text-secondary fw-bold">Fajta:</span>
                <span>Spániel keverék</span>
              </li>
              <li className="d-flex justify-content-between py-2 border-bottom">
                <span className="text-secondary fw-bold">Kor:</span>
                <span>3 éves</span>
              </li>
              <li className="d-flex justify-content-between py-2 border-bottom">
                <span className="text-secondary fw-bold">Szín:</span>
                <span>Fekete-cser</span>
              </li>
              <li className="d-flex justify-content-between py-2">
                <span className="text-secondary fw-bold">Születésnap:</span>
                <span>2022.04.15</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Jobb oszlop */}
        <div className="col-12 col-md-6 mb-4">
          <div className="p-4 bg-light rounded shadow-sm h-100">
            <ul className="list-unstyled mb-0">
              <li className="d-flex justify-content-between py-2 border-bottom">
                <span className="text-secondary fw-bold">Hobbi:</span>
                <span>Kirándulás</span>
              </li>
              <li className="d-flex justify-content-between py-2 border-bottom">
                <span className="text-secondary fw-bold">Kedvenc étel:</span>
                <span>Bármi, amit a gazditól kapok</span>
              </li>
              <li className="d-flex justify-content-between py-2 border-bottom">
                <span className="text-secondary fw-bold">Lakhely:</span>
                <span>Budapest</span>
              </li>
              <li className="d-flex justify-content-between py-2">
                <span className="text-secondary fw-bold">Kedvenc időtöltés:</span>
                <span>Madarak, macskák kergetése</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
