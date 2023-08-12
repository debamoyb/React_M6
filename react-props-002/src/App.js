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
        heading="Why are there so many web3 startup?"
        para="Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random "
        mainImg="https://miro.medium.com/v2/resize:fit:1400/0*Bx8uLnqHSGpbqZUm"
        date="December 6."
        time="6 minutes read."
        cat="Web 3"
      />
      <Child
        name="Chasten Buttigieg"
        thumbImg="https://people.com/thmb/fBiQrzgOQBQHY0WmBumTBapTcZ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(734x499:736x501)/Chasten-Buttigieg-1-15a34da265964771a708fafcd215fa10.jpg"
        altthumb="Chasten Buttigieg"
        heading="What marrage mean to me"
        para="A random paragraph can also be an excellent way for a writer to tackle writers block. Writing block can often happen due to being stuck with a current project"
        mainImg="https://miro.medium.com/v2/resize:fit:1358/1*ZFoE6R61ouYV-__MTb-3Jw.jpeg"
        date="November 29."
        time="3 minutes read."
        cat="Parenting"
      />
      <Child
        name="Nicholas moryl"
        thumbImg="https://miro.medium.com/v2/resize:fit:2400/1*k6u0HYK-nsATpZzmGJx4Yg.jpeg"
        altthumb="Nicholas moryl"
        heading="Leaving in Sun Francisco"
        para="Its not only writers who can benefit from this free online tool."
        mainImg="https://miro.medium.com/v2/resize:fit:1400/1*cZUgmG_eu04Lhw-ntg6SOg.jpeg"
        date="November 22."
        time="9 minutes read."
        cat="Change"
      />
    </div>
  );
}

export default App;
