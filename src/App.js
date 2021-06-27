import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import Marquee from 'react-fast-marquee';
import useWindowDimensions from './size'
import WebFont from 'webfontloader'

function App() {
  const { height, width } = useWindowDimensions()
  const [options, setOptions] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState()
  const [fontColor, setFontColor] = useState()
  const [fontSize, setFontSize] = useState(50)
  const [fontFamily, setFontFamily] = useState()
  const [text, setText] = useState("Ruf doch mal wieder an")
  const [speed, setSpeed] = useState(1)
  const fonts = ['Droid Sans', 'Chilanka', 'Open Sans', 'Lato', 'Slabo', 'Oswald', 'Source Sans Pro', 'Montserrat', 'Raleway', 'PT Sans', 'Lora', 'Noto Sans', 'Nunito Sans', 'Concert One', 'Prompt', 'Work Sans']
  useEffect(() => {
    WebFont.load({
      google: {
        families: fonts
      }
    })
  }, [])

  function handleClick() {
    if (options == true) {
      setOptions(false)
    } else {
      setOptions(true)
    }
    console.log(options)
  }

  function renderOptions() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
        <div style={{}}>
          <label for="colorpicker">Font Color:</label>
          <input type="color" id="colorpicker" value={fontColor} onChange={(input) => { setFontColor(input.target.value) }}></input>
          <label for="colorpicker">Background Color:</label>
          <input type="color" id="colorpicker" value={backgroundColor} onChange={(input) => { setBackgroundColor(input.target.value) }}></input>
        </div>
        <div>
          <label for="quantity">Size (between 1% and 100%):</label>
          <input type="number" id="quantity" name="quantity" min="0" max="100" value={fontSize} onChange={(input) => { setFontSize(input.target.value) }}></input>
        </div>
        <div>
          <label for="fname">Text:</label>
          <textarea name="text" value={text} onChange={(input) => { setText(input.target.value) }} style={{ height: '100px', width: '60%' }}></textarea>
        </div>
        <div>
          <label for="fonts">Choose a fonts:</label>

          <select name="fonts" id="fonts" onChange={(input) => { setFontFamily(input.target.value) }}>
            {fonts.map((font) => {
              return (
                <option value={font}>{font}</option>
              )
            })}
          </select>
        </div>
        <div>
          <label for="speed">Speed Multiplier (between 0.01 and 10000):</label>
          <input type="number" id="quantity" name="quantity" min="0" max="100" value={speed} onChange={(input) => { setSpeed(input.target.value) }}></input>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: backgroundColor, height: height, width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Marquee style={{}} gradient={false} speed={speed * 20}>
        <div onClick={() => { handleClick() }} style={{ backgroundColor: backgroundColor, height: '100%', left: '0px', width: '100%' }}>
          <h1 style={{ color: fontColor, fontFamily: fontFamily, fontSize: height * 2 / 5 * fontSize / 100 }}>{text}</h1>
        </div>
      </Marquee>
      {options ? renderOptions() : null}
    </div>
  );
}



export default App;
