// import logo from './logo.svg';
import './App.css';
import Child from './Components/Child';

function App() {
  return (
    <div className="App">
      <Child
        name="Eric Feng"
        thumbImg="https://media.licdn.com/dms/image/D5603AQEHQaMRfV1L9w/profile-displayphoto-shrink_800_800/0/1676895902194?e=2147483647&v=beta&t=pZFjnJCmtP6nXTgDjLVKHQbhZRqRtNIbDJ0CPG_Z5Rk"
        altthumb="Eric Feng"
        heading="Why are there so many Web3 startups?"
        para="This week, Pitchbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment activity..."
        mainImg="https://miro.medium.com/v2/resize:fit:1400/0*Bx8uLnqHSGpbqZUm"
        date="Dec 4"
        time="6 min read"
        cat="Web 3"
      />
      <Child
        name="Chasten Buttigieg"
        thumbImg="https://people.com/thmb/fBiQrzgOQBQHY0WmBumTBapTcZ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(734x499:736x501)/Chasten-Buttigieg-1-15a34da265964771a708fafcd215fa10.jpg"
        altthumb="Chasten Buttigieg"
        heading="What Marriage Means to Me"
        para="After dropping the kids off, I came home and stopped in the kitchen to take in the aftermath of our chaotic morning together...."
        mainImg="https://miro.medium.com/v2/resize:fit:1358/1*ZFoE6R61ouYV-__MTb-3Jw.jpeg"
        date="Nov 29"
        time="3 min read"
        cat="Parenting"
      />
      <Child
        name="Nicholas moryl"
        thumbImg="https://miro.medium.com/v2/resize:fit:2400/1*k6u0HYK-nsATpZzmGJx4Yg.jpeg"
        altthumb="Nicholas moryl"
        heading="Leaving San Francisco"
        para="Letting go with love."
        mainImg="https://miro.medium.com/v2/resize:fit:1400/1*cZUgmG_eu04Lhw-ntg6SOg.jpeg"
        date="Nov 23"
        time="8 min read"
        cat="Change"
      />
    </div>
  );
}

export default App;
