//You are Hercules, the greatest of the Greek Heroes! You have been tasked by King Eurystheus to slay the vicious Nemean Lion, defeat the impossible nine-headed Lernaean Hydra, and capture the guard dog of the underworld—Cerberus.

// start with the main function then hand the others with  in the order that is needed
let hercules = {
  name: 'Hercules',
  health: 20,
  attackPower: 3,
  attacks: [2, 4, 5, -3],
  hasSteak: false

}

let hydra = {
  name: 'Hydra',
  health: 20,
  attackPower: 1,
  attacks:  [1, 2, 3, -1]
}

let lion = {
  name: "Lion",
  health: 25,
  attackPower: 1,
  attacks: [1, 2, 3, -1]
}

let cerberus = {
  name: "Cerberus",
  health: 25,
  attackPower: 1,
  attacks: [2, 3, 5, -1],
}

let cow = {
  health: 5,
}

function battleEvent(player, enemy, startTurn) {
  let attackMenu = '';
  let attackchoice = player.attacks[attackMenu];
  let damage = player.attackPower + attackchoice;
  let randNumber = Math.floor(Math.random() * 4)
  let enemyattack = enemy.attacks[randNumber];
  let enemydamage = enemy.attackPower + enemyattack;
  let turn = startTurn;
  let winner = '';
  while (enemy.health > 0 && player.health > 0 ){
    console.log(`${enemy} health: ${enemy.health} ${player} health: ${player.health}`);
    if (turn === 1) { 
      attackMenu = parseInt(prompt("Please enter a number \n 1. punch \n 2. kick\n 3. sword") - 1);
      if (attackMenu !== 1 || 2 || 3){
        alert("Please enter a number 1, 2, or 3:")
        attackMenu = parseInt(prompt("Please enter a number \n 1. punch \n 2. kick\n 3. sword") - 1);
      }

      attackchoice = player.attacks[attackMenu];
      damage = player.attackPower + attackchoice;
      enemy.health = enemy.health - damage;
      alert(`You attack dealing ${damage} in damage`)
      
      turn = 0;
    } else { 
      randNumber = Math.floor(Math.random() * 4)
      enemyattack = hydra.attacks[randNumber];
      enemydamage = hydra.attackPower + enemyattack;
      alert(`${enemy.name} attacks dealing ${enemydamage} in damage` );
      hercules.health = hercules.health - enemydamage;
      turn = 1;
    }
  }
  if (enemy.health <= 0){
    alert(`The ${enemy.name} has been defeated.`);
    hercules.health = 20;
    winner = 1;
    return winner
  }
  else if (hercules.health <= 0){
    alert("You are Dead. Game Over")
    runGame()
  }
}

function battle_1 (){
  document.body.style.background = "url(maxresdefault.jpg)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  alert("You arrive at the Hydra's lair. you perpare for battle the first attack is your what do you do")
  let battle = battleEvent(hercules, hydra, 1);
  if (battle === 1){
    battle_2()
  }
}
  


function battle_2 (){
  document.body.style.background = "url(eric-combeau-Tw0eeOOzCVs-unsplash.jpg)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = '50%';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundColor = "#222";
  alert("After a journey of many miles and a few taverns latter. You find the mythical Nemean Lion... No that is not purring. That is oh crap!")
  let battle = battleEvent(hercules, lion, 2);
  if (battle === 1){
    cowbattle();
  }

function cowbattle () {
  document.body.style.background = "url(alaina-mclearnon-P_t9mRLFoRs-unsplash.jpg)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = '50%';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundColor = "#222";
  alert("Hey there is a cow")
  let killCow = prompt("Do you kill the cow? (y/n)")
  if(killCow === 'y') {
    hercules.hasSteak = true;
    console.log('You now have steak');
    document.body.style.background = "url(edson-saldana-J88no2vCrTs-unsplash.jpg)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
    alert('You now have steak');
    battle_3();
  }else {
    battle_3();
  } 
}

function battle_3 (){
  alert("Yep that's the enterance to the underword now you are on your own seeya... ")
  document.body.style.background = "url(0*xnj6VIeKF-fc7QyQ.jpg)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover'; 
  if(hercules.hasSteak === true) {
    let choice  = prompt('Give the steak to cerberus? (y/n)')
    if (choice === 'y') {
        alert("You gave the steak to cerberus. Now he rolls over and wants belly rubs... congrats you have a pet now.");
        finalScene();
        return;
    } 
  }
  let battle = battleEvent(hercules, cerberus, 1);
  if (battle === 1){
    finalScene();
  }

  
  }
}




function finalScene(){
  document.body.style.background = "url(yusuf-dundar-h_sMl3egcOg-unsplash.jpg)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover'; 
  alert("You have completed the tasks. Congradulations")
  runGame();
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
