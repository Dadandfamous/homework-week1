// Write your JS here

// The following code is the hero(object) of the browsergame.
const hero = {
  name : 'Grutte_Pier',
  heroic : true,
  inventory: [],
  health : 10,
    weapon :  {
      type : 'goedemorgen',
      damage : 2
    }
}

// I made a separate object for the dagger, to be picked up by the hero.
const daggerLoot = {
  type : 'dagger',
  damage : 2
}

// This is the rest function, when entering the inn.
function rest (hero){
  hero.health = 10
  return hero
}

// This is the function that is called whenever an item is looted (for example daggerLoot can be inserted as argument)
function pickUpItem (hero, foundLoot) {
  hero.inventory.push(foundLoot)
}

// From what I understand (even though the subject is called Equip Weapon), 
// we want to unequip the current weapon into the inventories first slot.
// 
// I tried several things:
// unshift the object weapon into the inventory, and shifting or deleting the object weapon entirely.
// This gave me the desired result, however it was not correct in the assignment.
//
// I tried to merge the weapon into the array. Couldn't get it to work.

function equipWeapon (hero) {
  if (hero.inventory === undefined || hero.inventory.length == 0) {
} else {
  hero.weapon = hero.inventory[0]
}
}

// The following function should assign the first inventory item, to the weapon object.
function clickBag (bagWeap){
  hero.weapon = hero.inventory[0]
}

// The following function prompts the user for a new hero-name. 
// You can not enter a 'inappropriate_name'
// You can not enter a name over 18 characters.
function renameHero() {
    hero.name = prompt('Please enter a new name for your hero.')
    if (hero.name === 'inappropriate_name'){
      hero.name = prompt('Please enter more sophisticated name for your hero.')
    } else if ((hero.name).length > 18) {
      hero.name = prompt('Please enter slightly shorter name for your hero.')
    } else {}
}

// This code will let a weapon vanish from the page. The inn/bag/buttons will stay. 
// There is one downside. If you click 'run tests', the dagger will disappear as well.
// I was unable to find out what caused this. Also, scared to break the teacher code.
// If you reload page, after running the tests, all works as intended.
document.getElementById("tempDiv").onclick = function(e) {
  e.target.style.visibility = 'hidden';
}

// This code summons the boss on your screen. Grrrr... fresh meat?!
  function summonBossStart() {
    document.getElementById('boss').style.visibility= 'visible';
}

// This code shows how you look after the boss-encounter. Yikes.
function bossAggro() {
  document.getElementById('injured').style.visibility= 'visible';

// If you clicked on 'Equip lightsabre', you do enough damage to survive.
// It checks if your dmg is higher than 2.
// If so, carlton dances!
 if (hero.weapon.damage > 2){
  document.getElementById('injured').src='https://66.media.tumblr.com/504cb94fe0f41e563f435ee2f833dcb5/tumblr_ouo2ds7d8h1wx3n9lo1_400.gif'
  document.getElementById('injured').alt='https://media.giphy.com/media/y8mThMjGBrQpG/giphy.gif'

// Also, lootchest!
  document.getElementById('boss').src='https://www.elk-studios.com/wp-content/uploads/2017/11/chest-bigger-2.gif'
  document.getElementById('boss').alt='https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmYRU1aeAmYfMtdfMkYjPMnNktPCvFuQsetgKFFspk4W4b/zolotaya-kartinka_06.gif'
  } 
  }

// This is a function that equips a lightsabre, instead of your Goedemorgen.
// Sadly, for now it is the only way to survive.
  function equipLightSabre() {
    hero.weapon.type = 'lightsabre'
    hero.weapon.damage = 11
  }

// The following function will write the hero-info to the console. 
// It does showup on a separate page.
function displayStats() {
let heroInfo = Object.entries(hero) + Object.entries(hero.weapon)
document.write(heroInfo)}