import Card from "../components/Card"
import Banner from "../components/Banner";
import Image from "../assets/source.png"
function Home(){
    return (
      <div>
        <Banner image={Image} texte={"Chez vous, partout et ailleurs"} />
        <Card />
        
      </div>
    );
}
export default Home