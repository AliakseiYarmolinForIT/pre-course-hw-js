let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newPassport = {};

Object.assign(newPassport, passport);

newPassport.name = "Ivan";

console.log(passport.name);
console.log(newPassport.name);