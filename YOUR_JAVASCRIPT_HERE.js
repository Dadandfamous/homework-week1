// Write your JS here
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

// I made a seperate object for the dagger, to be picked up by the hero.
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



function displayStats() {
let heroInfo = Object.entries(hero)
document.write(heroInfo)}