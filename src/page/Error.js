import Header from "../components/Header";
import Footer from "../components/Footer";
function Error() {
  return (
    <div>
      <Header />
      <div className="error">
        <h2>404</h2>
        <p className="txt-error">Oups! La page que vous demandez n'existe pas.</p>
        <p className="link">
          <a href="">Retournez a la page d'accueil</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Error;
