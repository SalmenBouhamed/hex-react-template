import './App.css';
import MenuBar from './components/menu-bar/menu-bar';
import Section from './components/section/section';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Section
        backgroundImage='https://hex.com/_assets/img/bg/main.webp'>
        <div className="mainTitle">
          <h1>
            Buy HEXY once 
            <br />
            Redeem HEX every year<br />
            for 15 years!
          </h1>
          <p>
          So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments ?

          </p>
        </div>
        <iframe src="https://ethhex.com/swap?chain=mainnet" className='sell-frame' />
      </Section>
      <Section
        backgroundColor='#000'>
      </Section>
      <Section
        background='linear-gradient(30deg, #ff3d3d 0%, #ff0f6f 50%, #f0f 100%)'>
      </Section>
    </div>
  );
}

export default App;
