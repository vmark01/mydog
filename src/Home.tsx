import HomePageGallery from "./HomePageGallery"

export default function HomePage() {
  const scrollToRolam = () => {
    const section = document.getElementById("rolam");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mt-5">

      {/* Rövid bemutatkozás */}
      <section className="text-center mb-5">
        <h1>Szia!</h1>
        <p className="lead">
          A nevem <strong>Zénó</strong>, egy barátságos és játékos spániel keverék Budapestről.
          Imádok kirándulni, játszani, aludni és az összes közül a legjobban aludni.
        </p>

        {/* Kattintható szöveg */}
        <p>
          <span 
            onClick={scrollToRolam} 
            style={{ cursor: "pointer", color: "#0d6efd", textDecoration: "underline" }}
          >
            Tudj meg többet rólam →
          </span>
        </p>
      </section>

      <HomePageGallery />

      {/* "Önéletrajz" adatok */}
      <section id="rolam" className="mb-5">
        <h2 className="text-center mb-4">Rólam:</h2>

        <div className="card mx-auto" style={{ maxWidth: "800px" }}>
          <div className="card-body">
            <div className="row">

              {/* Bal hasáb */}
              <div className="col-md-6 mb-3">
                <div className="mb-2 row">
                  <div className="col-5 fw-bold">Név:</div>
                  <div className="col-7">Zénó</div>
                </div>
                <div className="mb-2 row">
                  <div className="col-5 fw-bold">Fajta:</div>
                  <div className="col-7">Spániel keverék</div>
                </div>
                <div className="mb-2 row">
                  <div className="col-5 fw-bold">Kor:</div>
                  <div className="col-7">3 éves</div>
                </div>
                <div className="mb-2 row">
                  <div className="col-5 fw-bold">Szín:</div>
                  <div className="col-7">Fekete-cser</div>
                </div>
              </div>

              {/* Jobb hasáb */}
              <div className="col-md-6 mb-3">
                <div className="mb-2 row">
                  <div className="col-5 fw-bold">Kedvenc játék:</div>
                  <div className="col-7">Bármi a gazdival</div>
                </div>
                <div className="mb-2 row">
                  <div className="col-5 fw-bold">Hobbi:</div>
                  <div className="col-7">Kirándulás</div>
                </div>
                <div className="mb-2 row">
                  <div className="col-5 fw-bold">Kedvenc étel:</div>
                  <div className="col-7">Minden, ami ehető</div>
                </div>
                <div className="mb-2 row">
                  <div className="col-5 fw-bold">Lakhely:</div>
                  <div className="col-7">Budapest</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
