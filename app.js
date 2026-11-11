let players = [
    {
        name: "Babar Azam",
        age: 31,
        team: "Pakistan"
    },
    {
        name: "Virat Kohli",
        age: 37,
        team: "India"
    },
    {
        name: "Joe Root",
        age: 35,
        team: "England"
    }
];
// Add one more player
players.push({
    name: "Shaheen Afridi",
    age: 26,
    team: "Pakistan"
});

console.log(players);
// Q2
let player = {
    name: "Babar Azam",
    age: 31,
    country: "Pakistan",
    role: "Batsman"
}

let result = `
Player Name: ${player.name}
Age: ${player.age}
Country: ${player.country}
Role: ${player.role}
`

console.log(result);
let players1 = [
    {
        name: "Babar Azam",
        age: 31,
        country: "Pakistan"
    },

    {
        name: "Virat Kohli",
        age: 37,
        country: "India"
    },

    {
        name: "Joe Root",
        age: 35,
        country: "England"
    },

    {
        name: "Steve Smith",
        age: 37,
        country: "Australia"
    }
]

let showData = `
Player 1:
Name:- ${players[0].name}
Age:- ${players[0].age}
Country:- ${players[0].country}

Player 2:
Name:- ${players[1].name}
Age:- ${players[1].age}
Country:- ${players[1].country}

Player 3:
Name:- ${players[2].name}
Age:- ${players[2].age}
Country:- ${players[2].country}

Player 4:
Name:- ${players[3].name}
Age:- ${players[3].age}
Country:- ${players[3].country}
`

console.log(showData);
// Q3
// PROTOTYPE
// Prototype ka matlab hai ke agar kisi object mein koi property ya method nahi milta, toh JavaScript uske prototype mein search karta hai. Agar wahan bhi na mile, toh aage prototype chain mein search karta hai