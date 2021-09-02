function MuonLineSolution(input) {

    let rooms = input.split("|")

    let health = 100;
    let bitcoins = 0;
    let notDead = true;
    for (let i = 0; i < rooms.length; i++) {
        let command = rooms[i];
        let splitted = command.split(' ');
        if (splitted[0] === 'potion') {
            let addHealth = Number(splitted[1]);
            let newHealth = (health + addHealth > 100) ? 100 : health + addHealth;
            console.log(`You healed for ${newHealth - health} hp.`);
            health = newHealth;
            console.log(`Current health: ${health} hp.`);
        } else if (splitted[0] == 'chest') {
            bitcoins += Number(splitted[1]);
            console.log(`You found ${splitted[1]} bitcoins.`);
        } else {
            let attack = Number(splitted[1]);
            health -= attack;
            if (health <= 0) {
                console.log(`You died! Killed by ${splitted[0]}.`);
                console.log(`Best room: ${i + 1}`);
                notDead = false;
                break;
            } else if (health > 0) {
                console.log(`You slayed ${splitted[0]}.`);
            }
        }
        if (!notDead) {
            break;
        }
    }
    if (notDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
MuonLineSolution('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')