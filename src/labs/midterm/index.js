import Nav from "../../nav";
import Jkl from "./four";
import './test.css';
import Xyz from "./five";
import Asd from "./six";

// // prints 321 and then 234
// const qwe = 234
// const asd = 234
// const zxc = [321, qwe, 432, asd, 543]
// const [ewq, rew] = zxc
// console.log(ewq)
// console.log(rew)
//
// const q = [1, 2, 3, 4, 5]
// const w = q.filter(a => a > 2)
// console.log(w)

// [1, 2, 6, 4, 5]
// const q = [1, 2, 3, 4, 5]
// const w = q.map(a => a === 3 ? 6 : a)
// console.log(w)

// 3
const q = [51, 42, 65, 24, 15]
const w = q.findIndex(a => a === 24)
console.log(w)

function Midterm() {
  return (
      <div>
        <Nav/>
        <h1>Midterm</h1>
        {/*<Asd/>*/}
      </div>
  );
}
export default Midterm;