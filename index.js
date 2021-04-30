//You are Hercules, the greatest of the Greek Heroes! You have been tasked by King Eurystheus to slay the vicious Nemean Lion, defeat the impossible nine-headed Lernaean Hydra, and capture the guard dog of the underworld—Cerberus.

// start with the main function then hand the others with  in the order that is needed
let hercules = {
  health: 20,
  attackPower: 3,
  attacks: [2, 4, 5, -3],
  hasSteak: false

}

let hydra = {
  health: 20,
  attackPower: 1,
  attacks:  [1, 2, 3, -1]
}

let lion = {
  health: 25,
  attackPower: 1,
  attacks: [1, 2, 3, -1]
}

let cerberus = {
  health: 25,
  attackPower: 1,
  attacks: [2, 3, 5, -1],
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
      alert(`Hydra attacks dealing ${enemydamage} in damage` )
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
  alert("After a journey of many miles and a few taverns latter. You find the mythical Nemean Lion... No that is not purring. That is oh crap!")
  let attackMenu = '';
  let attackchoice = hercules.attacks[attackMenu];
  let damage = hercules.attackPower + attackchoice;
  let randNumber = Math.floor(Math.random() * 4)
  let enemyattack = lion.attacks[randNumber];
  let enemydamage = lion.attackPower + enemyattack;
  let turn = 0;
  while (lion.health > 0 && hercules.health > 0 ){
    console.log(`Lion's health: ${lion.health} Hercules health: ${hercules.health}`);
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
      alert(`Lion attacks dealing ${enemydamage} in damage` );
      hercules.health = hercules.health - enemydamage;
      turn = 1;
    }
  }
  if (lion.health <= 0){
    alert("The Lion has been defeated.");
    hercules.health = 20;
    cowbattle();
  }
  else if (hercules.health <= 0){
    alert("You are Dead. Game Over");
  }
}

function cowbattle () {
  alert("Hey there is a cow")
  let killCow = prompt("Do you kill the cow? (y/n)")
  if(killCow === 'y') {
    hercules.hasSteak = true;
    console.log('You now have steak');
    alert('You now have steak');
    battle_3();
  }else {
    battle_3();
  } 
}

function battle_3 (){
  alert("Yep that's the enterance to the underword now you are on your own seeya... ")
  let attackMenu = '';
  let attackchoice = hercules.attacks[attackMenu];
  let damage = hercules.attackPower + attackchoice;
  let randNumber = Math.floor(Math.random() * 4)
  let enemyattack = cerberus.attacks[randNumber];
  let enemydamage = cerberus.attackPower + enemyattack;
  let turn = 0;
  if(hercules.hasSteak === true) {
    let choice  = prompt('Give the steak to cerberus? (y/n)')
    if (choice === 'y') {
        alert("You gave the steak to cerberus. Now he rolls over and wants belly rubs... congrats you have a pet now.");
        finalScene();
        return;
    } 
  }
  while (lion.health > 0 && hercules.health > 0 ){
    console.log(`Cerberus health: ${cerberus.health} Hercules health: ${hercules.health}`);
    if (turn === 1) { 
        attackMenu = parseInt(prompt("Please enter a number \n 1. punch \n 2. kick\n 3. sword") - 1)
  
        attackchoice = hercules.attacks[attackMenu];
        damage = hercules.attackPower + attackchoice;
        cerberus.health = cerberus.health - damage;
        
        turn = 0;
    } else { 
        randNumber = Math.floor(Math.random() * 4)
        enemyattack = cerberus.attacks[randNumber];
        enemydamage = cerberus.attackPower + enemyattack;
        alert(`Cerberus attacks dealing ${enemydamage} in damage` );
        hercules.health = hercules.health - enemydamage;
        turn = 1;
      }
    }
    if (cerberus.health <= 0){
      alert("The Cerberus has been defeated.");
      hercules.health = 20;
      finalScene();
    }
    else if (hercules.health <= 0){
      alert("You are Dead. Game Over");
  }
}




function finalScene(){
  alert("You have completed the tasks. Congradulations")
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
    hercules.health = 20;
    mainStory();
  } else {
    alert("Goodbye");
  }
}

runGame();
