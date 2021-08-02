const borderRadius = document.querySelector(".border-radius")
const box = document.querySelector(".box")
const offsetX = document.querySelector(".offsetX")
const offsetY = document.querySelector(".offsetY")
const blur = document.querySelector(".blur")
const spread = document.querySelector(".spread")
const shadowColor = document.querySelector(".shadow-color")
const boxColor = document.querySelector(".box-color")
const out = document.querySelector(".out")
const outset = document.querySelector(".outset")
const inset = document.querySelector(".inset")
const output1 = document.getElementById("demo1");
const output2 = document.getElementById("demo2");
const output3 = document.getElementById("demo3");
const output4 = document.getElementById("demo4");
const output5 = document.getElementById("demo5");

borderRadius.oninput = cssGenerator
offsetX.oninput = cssGenerator
offsetY.oninput = cssGenerator
blur.oninput = cssGenerator
spread.oninput = cssGenerator
shadowColor.oninput = cssGenerator
boxColor.oninput = cssGenerator()
outset.oninput = cssGenerator
inset.oninput = cssGenerator


function cssGenerator() {
        let shadow = outset.checked ? "" : "inset"
        output1.innerText = borderRadius.value
        output2.innerText = offsetX.value
        output3.innerText = offsetY.value
        output4.innerText = blur.value
        output5.innerText = spread.value
        box.style.borderRadius = borderRadius.value + "%"
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} ${shadow}`
        box.style.backgroundColor = `${boxColor.value}`
        out.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} ${shadow};<br>`
        out.innerHTML += `-webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} ${shadow};<br>`
        out.innerHTML += `-moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} ${shadow};`
}
cssGenerator()































