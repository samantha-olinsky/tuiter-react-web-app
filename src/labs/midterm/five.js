import {useState} from "react";

function Xyz() {
  const [qwe, wer] = useState([123, 234, 345, 456, 567])
  const ert = (rty) => {
    const tyu = qwe.filter(yui => yui != 345)
    wer(tyu)
  }
  return(
      <div>
        <ul>
          {qwe.map(uio => <li>{uio}</li>)}
        </ul>
        <button onClick={() => ert(wer)}>BUTTON</button>
      </div>
  )
}

export default Xyz

// output
// 123
// 234
// 456
// 567