import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div class="home-hero-ready">
        Prêts à faire du tri dans vos placards ?
        <Link to="/publish">
          <button>Commencer à vendre</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
