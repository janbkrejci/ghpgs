const compose = f => g => x => f(g(x));
const setText = el => txt => {el.innerText = txt;}
const out = setText(document.getElementById("out"));
const stringify = x => JSON.stringify(x, null, 2);
const strOut = compose(out)(stringify);

const x = {
    a: 42,
    greet() {
        return "Hello";
    }
}

strOut(x);
