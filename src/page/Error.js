import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Header />
      <div className="error">
        <h2>404</h2>
        <p className="txt-error">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="link">
          <Link to="/">Retournez à la page d'accueil</Link>
        </p>
        ;
      </div>
      <Footer />
    </div>
  );
}
export default Error;
 