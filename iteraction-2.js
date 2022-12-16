const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let sounds =[];
for (let user of users){
    sounds.push(user.favoritesSounds);
}
//  console.log(sounds);

let arrValues=[]

for (soundObj of sounds){
    // console.log(soundObj);
    for (soundObjElements in soundObj) {
        let values = soundObj[soundObjElements]
        arrValues.push(values);
    }
}

console.log(arrValues);

let sum = 0;
for (value of arrValues){
   sum += value.volume
}
console.log(sum);

let media = sum/arrValues.length
console.log(media);