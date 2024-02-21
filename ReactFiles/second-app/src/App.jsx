//passing data from one file to another is knowns as "props"

import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <>
      <Navbar2 />
      <div className="cards">
        <Card title='card1' description='This is card 1.'/>
        <Card title='card2' description='This is card 2.'/>
        <Card title='card3' description='This is card 3.'/>
        <Card title='card4' description='This is card4.'/>
      </div>
      <Footer />
    </>
  );
}

export default App;
