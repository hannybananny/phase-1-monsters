document.addEventListener('DOMContentLoaded', () => {
    
    let monsterContainer = document.getElementById('monster-container')
    let monsterForm = document.getElementById('monsterform')
    let page = 1
    changePage(page)

    monsterForm.addEventListener('submit', handleSubmit)
    
    let pageNumber = document.getElementById('page')
    

    function renderMonster(monsters){
       let list = monsters.map(m =>{
           return   `<h1>${m.name}</h1>
           <h3>Age: ${m.age}</h3>
           <p>Bio: ${m.description}</p>`
       })
       
        monsterContainer.innerHTML = list.join('')
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

    function nextPage(){
        page++
        changePage(page)
        pageNumber.innerHTML= page
    }
    
    function previousPage(){
        if(page>1){
            page-- 
            changePage(page)
            pageNumber.innerHTML= page
        }
    }

   function changePage(page){
    
   function getNextFiftyMonsters(){
    
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${page}`)
        .then(res => res.json())
        .then(monsters => {
            renderMonster(monsters)
         })
        }

    getNextFiftyMonsters()
    const forwardBtn = document.getElementById('forward')
    const backBtn = document.getElementById('back')
    forwardBtn.addEventListener('click', nextPage)
    backBtn.addEventListener('click', previousPage)
    }
})