let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newPassport = {};

Object.assign(newPassport, passport);

newPassport.name = "Ivan";

console.log(newPassport);
console.log(passport);