const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    let flag = colors.filter((color) => color === "черный" || color === "красный" || color === "желтый").join("-");
    return flag;
}
console.log(createColorString());