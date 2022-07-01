import "./App.css";
import Card from "./components/Card";
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg';
import Image5 from './images/image5.jpg';

const data = [
  {
    image: Image1,
    name: 'The Avengers (2012)'
  },
  {
    image: Image2,
    name: 'Avengers Endgame (2018)'
  },
  {
    image: Image3,
    name: 'Avengers Infinity War (2017)'
  },
  {
    image: Image4,
    name: 'Avengers Age of Ultron (2015)'
  },
  {
    image: Image5,
    name: 'Avengers Collections'
  }
]

function App() {
  return (
    <div className="App bg-black py-6 px-10 md:px-24">
      <div className="w-full md:grid md:grid-cols-4 gap-4">
        <Card image={Image1} name={'Avengers'} />
        {
          data.map(j=>{
            return(
              <Card image={j.image} name={j.name} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
