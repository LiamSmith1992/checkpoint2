let bacon = 1000

let clickUpgrade = [{
  name: 'broadsword',
  price: 50,
  quantity: 0,
  multiplier: 1
}, {
  name: 'lightsaber',
  price: 120,
  quantity: 0,
  multiplier: 10
}]

let autoUpgrade = [{
  name: 'luffy',
  price: 150,
  quantity: 0,
  multiplier: 10
}, {
  name: 'tanjiro',
  price: 1000,
  quantity: 0,
  multiplier: 100
}
]

function clickTracker() {
  let clickBacon = 0
  clickUpgrade.forEach(i => {


    if (i.quantity > 0) {
      clickBacon += i.quantity * i.multiplier
      console.log('maker', clickBacon);
    }
    else {
      clickBacon += 0
      console.log('maker', clickBacon);
    }
  })
}

function autoTracker() {
  let autoBacon = 0
  autoUpgrade.forEach(h => {
    if (h.quantity > 0) {
      autoBacon += h.quantity * h.multiplier
      console.log('auto', autoBacon)
    } else (autoBacon += 0)
  }
  )

}

function clickCounter() {
  template = `
  
  `
}



function getBacon() {
  bacon += 1
  clickUpgrade.forEach(i => {


    if (i.quantity > 0) {
      bacon += i.quantity * i.multiplier

    }
    else {
      bacon += 0
      console.log(bacon);
    }
  })
  baconCounter()
  clickTracker()

}

function baconCounter() {

  template = `
<div class="col-12 bg-dark text-light">
  bacon = ${bacon}
</div>

<div class="d-flex">
<div class" col-12 col-md-2 ">
<img class="img-fluid piggy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnBtUmXjx9A2bd7N0Poh89aWNBqvy_JgQYoqnhxHcChiwwjLCmLRsrKBOutnyk7IHGGM&usqp=CAU" alt="">
</div>
<div class = "col-12 col-md-2 card bg-warning "> <h4 class="p-2">Swanson's bacon Swap</h4>
<p class="p-2">We trade stuff for bacon</p>
</div>
</div>

<div class"col-12 col-md-8"></div>
<div onclick="buyClickUpgrade('broadsword')" class="btn-around ms-3 col-2 btn btn-success">
  Broadsword $${clickUpgrade[0].price}
</div>

<div onclick="buyClickUpgrade('lightsaber')" class="btn-around col-2 btn btn-success">
  Lightsaber $${clickUpgrade[1].price}
</div>
<div class="col-6></div>

<div  class="col-2> </div>
<div onclick="buyAutoUpgrade('luffy')" class="btn-around ms-3 col-2 btn btn-primary">
  Luffy $${autoUpgrade[0].price}
</div>

<div onclick="buyAutoUpgrade('tanjiro')" class="btn-around col-2 btn btn-primary">
  Tanjiro $${autoUpgrade[1].price}
</div>
  `

  document.getElementById('baconCounter').innerHTML = template
}

function buyClickUpgrade(weaponName) {
  let foundWeapon = clickUpgrade.find(i => i.name == weaponName)
  if (bacon >= foundWeapon.price) {
    bacon -= foundWeapon.price
    foundWeapon.quantity++
    foundWeapon.price *= 2
  } else window.alert('show me the bacon')
  baconCounter()
}

function buyAutoUpgrade(characterName) {
  let foundHelper = autoUpgrade.find(i => i.name == characterName)
  if (bacon >= foundHelper.price) {
    bacon -= foundHelper.price
    foundHelper.quantity++
    console.log('helper', foundHelper.quantity)
    foundHelper.price += 200
  } else window.alert('show me the bacon')
  baconCounter()
}

function autoHelper() {
  autoUpgrade.forEach(h => {
    if (h.quantity > 0) {
      bacon += h.quantity * h.multiplier
    } else (bacon += 0)
  }
  )
  autoTracker()
  baconCounter()
}




setInterval(autoHelper, 3000)
baconCounter()