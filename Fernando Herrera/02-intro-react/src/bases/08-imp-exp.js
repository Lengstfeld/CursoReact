// Import y export funciones
import {heroes} from '../data/heroes'

//console.log(heroes);
/*
const HeroeById = (id) => {
        return heroes.find((element) 
        => element.id === id
    );
}
console.log(HeroeById(2));

const HeroeByOwner = (owner) => {
    return heroes.filter((element) 
    => element.owner === owner
    )
}
console.log(HeroeByOwner("DC"));*/

const heroesId = (id) => heroes.find((element) => element.id === id);
//console.log(heroesId(2));

const heroesFilter = (owner) => heroes.filter((element) => element.owner === owner);
//console.log(heroesFilter("DC"));

export {
    heroesId,
    heroesFilter
}