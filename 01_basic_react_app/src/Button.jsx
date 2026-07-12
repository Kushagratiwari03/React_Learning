function printHello() {
  console.log("Hello!");
}
function printBye() {
  console.log("Bye!");
}
export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click Me!</button>
      <p onMouseOver={printBye}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum
        molestiae minima quam odio maxime sequi veritatis nemo, excepturi
        similique delectus alias quasi hic earum?
      </p>
    </div>
  );
}
