const user = [
  { name: 'Carles Evance', age: 20 },
  { name: 'Lance Noubissi', age: 25 },
  { name: 'Flore Beyina', age: 22 },
  { name: 'Diaz Tawa', age: 10 },
  { name: 'Cratos', age: 27 },
  { name: 'Vance', age: 10 },
  { name: 'Elizabeth', age: 20 },
  { name: 'Carles', age: 20 },
  { name: 'Laurent', age: 25 },
  { name: 'Florent', age: 22 },
  { name: 'Diaze', age: 10 },
  { name: 'Cratosy', age: 27 },
  { name: 'Vancy', age: 10 },
  { name: 'Eliza', age: 20 },
  { name: 'Carl', age: 20 },
  { name: 'Lance', age: 25 },
  { name: 'Flore', age: 22 },
  { name: 'Diz', age: 10 },
  { name: 'Crats', age: 27 },
  { name: 'Vincent', age: 10 },
  { name: 'Elizbeth', age: 20 }
]

const content = document.querySelector('form')
const pers = document.querySelector('.actors')

function getInitials (name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('.')
}

function displayUser ({ name, age }) {
  return `
  <div class='actors actors2'>
  <h4><i class='abbrevations'>${getInitials(name)}</i> <div class = 'same'>
  <p class = 'namep'> Name:${name}</p><p class = 'age'>Age: ${age} </p>
         </div> </h4>

</div>
  
</ul>`
}

function displayUsers (persons) {
  return persons.length
    ? persons.map(displayUser).join('')
    : renderMessage('Sorry! No User Found')
}

function compareNames (name, searchTerm) {
  return name.toLowerCase().includes(searchTerm.toLowerCase())
}

function shouldResolve () {
  return Math.random() < 0.85
}

function SearchUsers (name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve()) {
        resolve(
          user.filter(
            (users) =>
              (!name || compareNames(users.name, name)) &&
              (!age || users.age === age)
          )
        )
      } else {
        error([])
      }
    }, 2000)
  })
}

function renderMessage () {
  return `<div class='center'>
  <div class='wave'></div>
  <div class='wave'></div>
  <div class='wave'></div>
  <div class='wave'></div>
  <div class='wave'></div>
  <div class='wave'></div>
  <div class='wave'></div>
  <div class='wave'></div>
  <div class='wave'></div>
  <div class='wave'></div>
</div>`
}

pers.innerHTML = displayUsers(user)

content.addEventListener('submit', (e) => {
  e.preventDefault()
  pers.innerHTML = renderMessage('Searching Users...')
  SearchUsers(e.target.name.value, +e.target.age.value)
    .then((result) => {
      pers.innerHTML = displayUsers(result)
    })
    .catch((e) => {
      pers.innerHTML = renderMessage('Error loading user! please try again')
    })
})
