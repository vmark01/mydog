export default function HomePage() {
  return (
    <div className="container mt-5">

      {/* Rövid bemutatkozás */}
      <section className="text-center mb-5">
        <h1>Szia!</h1>
        <p className="lead">
          Üdvözöllek az oldalamon! A nevem <strong>Zénó</strong>, egy barátságos és játékos spániel keverék Budapestről.
          Imádok kirándulni, labdázni és minden reggel ébreszteni a gazdit!
        </p>
      </section>

      {/* Kép */}
      <section className="text-center mb-5">
        <img
          src="/zeno_black_white.png"
          alt="Zeno"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "400px" }}
        />
      </section>

      {/* "Önéletrajz" adatok */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Zénó adatai</h2>
        <div className="card mx-auto" style={{ maxWidth: "500px" }}>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Név:</strong> Bodri</li>
              <li className="list-group-item"><strong>Fajta:</strong> Magyar vizsla</li>
              <li className="list-group-item"><strong>Kor:</strong> 3 éves</li>
              <li className="list-group-item"><strong>Szín:</strong> Világosbarna</li>
              <li className="list-group-item"><strong>Kedvenc étel:</strong> Csirkés jutalomfalat</li>
              <li className="list-group-item"><strong>Kedvenc hely:</strong> Újpesti Farkaserdő</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}