import footers from "./../assets/footer.png";
import "./../index.css";

function footer() {
  return (
    <footer>
      <div className="footer-section">
        <img src={footers} />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
export default footer;
