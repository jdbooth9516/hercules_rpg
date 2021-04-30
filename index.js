//You are Hercules, the greatest of the Greek Heroes! You have been tasked by King Eurystheus to slay the vicious Nemean Lion, defeat the impossible nine-headed Lernaean Hydra, and capture the guard dog of the underworld—Cerberus.

// start with the main function then hand the others with  in the order that is needed
let hercules = {
  health: 10,
  attackPower: 3,
  attacks: [2, 4, 5, -3],
  hasSteak: false

}

let hydra = {
  health: 20,
  attackPower: 1,
  attacks:  [2, 3, 5, -1]
}

let lion = {
  health: 25,
  attackPower: 1,
  attacks: [2, 3, 5, -1]
}

let cerberus = {
  health: 25,
  attackPower: 1,
  attacks: [2, 3, 5, -1],
  steak: false
}

let cow = {
  health: 5,
  
}

function battle_1 (){
  alert("You arrive at the Hydra's lair. you perpare for battle the first attack is your what do you do")
  let attackMenu = '';
  let attackchoice = hercules.attacks[attackMenu];
  let damage = hercules.attackPower + attackchoice;
  let randNumber = Math.floor(Math.random() * 4)
  let enemyattack = hydra.attacks[randNumber];
  let enemydamage = hydra.attackPower + enemyattack;
  let turn = 1;
  while (hydra.health > 0 && hercules.health > 0 ){
    console.log(`Hydra health: ${hydra.health} Hercules health: ${hercules.health}`);
    if (turn === 1) { 
      attackMenu = parseInt(prompt("Please enter a number \n 1. punch \n 2. kick\n 3. sword") - 1)

      attackchoice = hercules.attacks[attackMenu];
      damage = hercules.attackPower + attackchoice;
      hydra.health = hydra.health - damage;
      
      turn = 0;
    } else { 
      randNumber = Math.floor(Math.random() * 4)
      enemyattack = hydra.attacks[randNumber];
      enemydamage = hydra.attackPower + enemyattack;
      alert(`Hydra attack dealing ${enemydamage} in damage` )
      hercules.health = hercules.health - enemydamage;
      turn = 1;
    }
  }
  if (hydra.health <= 0){
    alert("The Hydra has been defeated.");
    hercules.health = 20;
    battle_2()
  }
  else if (hercules.health <= 0){
    alert("You are Dead. Game Over")
    runGame()
  }
}

function battle_2 (){
  alert("You arrive at the Hydra's lair. you perpare for battle the first attack is your what do you do")
  let attackMenu = '';
  let attackchoice = hercules.attacks[attackMenu];
  let damage = hercules.attackPower + attackchoice;
  let randNumber = Math.floor(Math.random() * 4)
  let enemyattack = lion.attacks[randNumber];
  let enemydamage = lion.attackPower + enemyattack;
  let turn = 1;
  while (lion.health > 0 && hercules.health > 0 ){
    console.log(`Hydra health: ${lion.health} Hercules health: ${hercules.health}`);
    if (turn === 1) { 
      attackMenu = parseInt(prompt("Please enter a number \n 1. punch \n 2. kick\n 3. sword") - 1)

      attackchoice = hercules.attacks[attackMenu];
      damage = hercules.attackPower + attackchoice;
      lion.health = lion.health - damage;
      
      turn = 0;
    } else { 
      randNumber = Math.floor(Math.random() * 4)
      enemyattack = lion.attacks[randNumber];
      enemydamage = lion.attackPower + enemyattack;
      alert(`Hydra attack dealing ${enemydamage} in damage` )
      hercules.health = hercules.health - enemydamage;
      turn = 1;
    }
  }
  if (lion.health <= 0){
    alert("The Lion has been defeated.");
    hercules.health = 20;
  }
  else if (hercules.health <= 0){
    alert("You are Dead. Game Over")
  }
}



function mainStory () {
  let userName = prompt('Please enter your name:');
  alert(`Welcome ${userName}. Today you are Hercules and you have been given 3 tasks by King Eurystheus.`);
  alert('1. slay the vicious Nemean Lion');
  alert('2. defeat the nine-headed Lernaean Hydra');
  alert('3. and get yourself a pet... oh by the way the pet is Cerberus.. you know the guardian of the underworld');
  alert('The three headed dog?');
  alert('Yeah that one');
  alert('Bring steak');
  let begin = prompt("Are you ready to start your journey? (y/n):");
  if(begin == 'y') {
    battle_1();
  }
}



function runGame() {
  let start = prompt("Do you want to play a game? (y/n):")
  if(start = 'y') {
    mainStory();
  } else {
    alert("Goodbye");
  }
}

battle_1()
