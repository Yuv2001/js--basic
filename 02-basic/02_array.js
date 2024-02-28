const marvel_hero = ["thor", "iron man","spider"]
const dc_heros = ["superman", "flash","batman"]

//marvel_hero.push(dc_heros)

//console.log(marvel_hero);
//console.log(marvel_hero[3][1]);
const all_hero = marvel_hero.concat(dc_heros)
console.log(all_hero);

// spread

const all_new_hero = [...marvel_hero,...dc_heros]

console.log(all_new_hero);

const another_array =[1,2,3,[4,5,6],7,[7,8,[0,2,],9]]

const real_another_array= another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("yuvraj "));
console.log(Array.from("yuvraj "));
console.log(Array.from({name:"yuvraj"}));/// intersting

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));