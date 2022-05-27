document.addEventListener('DOMContentLoaded', () => {

    let monsterContainer = document.getElementById('monster-container')
    let monsterForm = document.getElementById('monsterform')
    
    monsterForm.addEventListener('submit', handleSubmit)
    const forwardBtn = document.getElementById('forward')
    forwardBtn.addEventListener('click', getNextFiftyMonsters)

    function getFirstFiftyMonsters(){
        fetch('http://localhost:3000/monsters/?_limit=50')
        .then(res => res.json())
        .then(monsters => monsters.forEach(monster => renderMonster(monster)))
    }
    
    
    
    function renderMonster(monster){
        let monsterDisplay = document.createElement('section')
        monsterDisplay.innerHTML=
        `<h1>${monster.name}</h1>
        <h3>Age: ${monster.age}</h3>
        <p>Bio: ${monster.description}</p>`
        monsterContainer.appendChild(monsterDisplay)
    }

    function handleSubmit(e){
        e.preventDefault()
        let monsterObj = {
            name: e.target.name.value,
            age: e.target.age.value,
            description: e.target.description.value
        }
        renderMonster(monsterObj)
        postNewMonster(monsterObj)
    }

    function postNewMonster(monsterObj){
        fetch('http://localhost:3000/monsters', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(monsterObj)
        })
        .then(res => res.json())
    }

    function getNextFiftyMonsters(){
        fet
    }

   
    getFirstFiftyMonsters()
  
})