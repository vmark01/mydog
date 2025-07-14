import HomePageGallery from "./HomePageGallery";
import './HomePage.css';
import ProfileCard from "./ProfileCard"

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
          A napjaim nagy részét játékokkal, alvással és finom falatok keresésével töltöm.
        </p>

        {/* Navigálás */}
        <p>
          <span
            onClick={scrollToRolam}
            className="scroll-link"
          >
            Tudj meg többet rólam...
          </span>
        </p>
      </section>

      <HomePageGallery />

      {/* Önéletrajz */}
      <ProfileCard />
    </div>
  );
}
