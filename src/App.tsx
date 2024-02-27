import './App.css';
import { HeadshotBar, HeadshotSlider, HeadshotStats } from './Widgets';

function App() {
  return (
    <>
      <div className="app-wrapper">
        <div className="widget-wrapper">
          <HeadshotBar title="Headshot" weaponName="AK-47" />
        </div>
        <div className="widget-wrapper">
          <HeadshotSlider title="Headshot" weaponName="AK-47" />
        </div>
        <div className="widget-wrapper">
          <HeadshotStats title="Headshot" />
        </div>
      </div>
    </>
  );
}

export default App;
