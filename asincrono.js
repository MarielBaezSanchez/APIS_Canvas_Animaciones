const teams = ["Liverpool", "Dortmun", "Chelsie"];

setTimeout(() => console.log('Tarea asincrona'));

console.log('Sigue ejecutando');
console.log(teams);

function getTeams(){
    return teams;
}

console.log(getTeams());
console.log('Final de código');