function Character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
  this.elements = new UIElement(this.name);
}
function UIElement(name) {
  this.attackBtn = document.querySelector(`#${name}-attack`);
  this.healthBtn = document.querySelector(`#${name}-make-health`);
  this.progress = document.querySelector(`.${name}-health span`);
  this.alive = document.querySelector(`#${name}-alive`);
}

//Attack Prototypero
Character.prototype.attack = function (opponent) {
  if (opponent.health > 0) {
    opponent.health -= this.strength;
    opponent.elements.progress.style.width = `${opponent.health}%`;
  } else {
    opponent.elements.attackBtn.remove();
    opponent.elements.healthBtn.remove();
    opponent.elements.alive.innerHTML = `${opponent.name} is die`;
  }
};

Character.prototype.status = function () {
  console.log(`Name ${this.name}`);
  console.log(`strength ${this.strength}`);
  console.log(`health ${this.health}`);
};

Character.prototype.makehealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.elements.progress.style.width = `${this.health}%`;
  }

  if (this.health > 100) {
    this.health = 100;
  }
};

let nartoo = new Character("nartoo", 10, 100);
let sasakii = new Character("sasakii", 10, 100);

nartoo.elements.attackBtn.addEventListener("click", function () {
  nartoo.attack(sasakii);
});

nartoo.elements.healthBtn.addEventListener("click", function () {
  nartoo.makehealth();
});

sasakii.elements.attackBtn.addEventListener("click", function () {
  sasakii.attack(nartoo);
});
sasakii.elements.healthBtn.addEventListener("click", function () {
  sasakii.makehealth();
});
