// Promesas JS
// resolve se ejecuta cuando todo sale bien
// reject cuando no sale bien

import { heroesId } from "./bases/08-imp-exp";

/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = heroesId(2);
        resolve(heroe)
        reject("No se pudo encontrar el heroe")
    }, 2000);
});

promesa.then((heroe) => {
    console.log("Then de la promesa", heroe)
})
.catch(err => console.warn(err));
*/


const heroByIdAsync = (id) => {
    const promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroes = heroesId(id);
            if(heroes){
                resolve(heroes)
            }else{
                reject("No se pudo encontrar el heroe")
            }
        }, 1000);
    });
    return promesa2;
}
heroByIdAsync(2)
.then(console.log)
.catch(console.warn)