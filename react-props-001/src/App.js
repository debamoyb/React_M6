// import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      <Card name="PINK" code="#FF6663" clo="#FF6663"/>
      <Card name="GRAY" code="#333333" clo="#333333"/>
      <Card name='BLACK' code="#000000" clo="#000000"/>
      <Card name="GREEN" code="#38BB14" clo="#38BB14"/>
      <Card name="RED" code="#C90B0B" clo="#C90B0B"/>
      <Card name="ORANGE" code="#FF8000" clo="#FF8000 "/>
      <Card name="YELLOW" code="#FFF500" clo="#FFF500"/>
      <Card name="LIGHT GRAY" code="#CCCCCC" clo="#CCCCCC"/>
      <Card name="PURPLE" code="#7E41A2" clo="#7E41A2"/>
      <Card name="BROWN"  code="#C14911" clo="#C14911"/>
    </div>
  );
}

export default App;
