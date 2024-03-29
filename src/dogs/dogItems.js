import jamnik from '../images/jamnik.png'
import buldog from '../images/buldog.png'
import corgi from '../images/corgi.png'
import dachshund from '../images/dachshund.png'
import doberman from '../images/doberman.png'
import dogg from '../images/dogg.png'
import pincher from '../images/pincher.png'
import baset from '../images/baset.png'
import smutas from '../images/smutas.png'
import terrier from '../images/terrier.png'

function extractName(loc) {
    const name = loc.match(/\/(\w+)\./);
    return name[1];
  }

const dogs = [
    {
        id: 0,
        img: jamnik,
        name: extractName(jamnik),
        price: 999.99
    },
    {
        id: 1,
        img: buldog,
        name: extractName(buldog),
        price: 99.99
    },
    {
        id: 2,
        img: corgi,
        name: extractName(corgi),
        price: 99.99
    },
    {
        id: 3,
        img: dachshund,
        name: extractName(dachshund),
        price: 999.99
    },
    {
        id: 4,
        img: doberman,
        name: extractName(doberman),
        price: 99.99
    },
    {
        id: 5,
        img: dogg,
        name: extractName(dogg),
        price: 99.99
    },
    {
        id: 6,
        img: pincher,
        name: extractName(pincher),
        price: 99.99
    },
    {
        id: 7,
        img: baset,
        name: extractName(baset),
        price: 99.99
    },
    {
        id: 8,
        img: smutas,
        name: extractName(smutas),
        price: 99.99
    },
    {

        id: 9,
        img: terrier,
        name: extractName(terrier),
        price: 99.99
    },
]

export default dogs
