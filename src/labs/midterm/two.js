import {useState} from "react";
// [5, 2, 4, 6, 8]

function Ewq({asd = [2, 4, 6, 8], sdf = 5}) {
  const [qwe, wer] = useState(asd)
  const ewq = () => wer([sdf, ...qwe])
  return(
      <div>
        <h1>{qwe}</h1>
        <button onClick={ewq}>BUTTON</button>
      </div>
  )
}
export default Ewq