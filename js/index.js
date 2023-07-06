const ul = document.getElementById(`animals`);

fetch("http://localhost:3000/characters")
.then(function (response) {
    return response.json();
})
.then(function (jsonData) {
    console.log(jsonData);
    jsonData.forEach(animal=>{
        const li = document.createElement(`li`)
        li.innerHTML = animal.name
        li.addEventListener(`click`,function(){
        fetch(`http://localhost:3000/characters/${animal.id}`)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log (data) 
            animaldetails(data)   
        })
        })
        // jsonData.forEach(animal => {
        //     const image = document.createElement(`img`)
        //     image.innerHTML = animal.image
        //     fetch(`http://localhost:3000/characters/${animal.image}`)
        //     .then(function(response){
        // return response.json()
        //     })
        //     .then(function(data){
        //         console.log(data)
        //     })
        // })
        ul.appendChild(li)

        })
    })
     let animalContainer = document.getElementById("animal-container")

    function animaldetails(animalObject){ 
        animalContainer.innerHTML = ``
        const animalName = document.createElement(`p`)
        const animalImage = document.createElement(`img`)
        const voteButton = document.createElement(`button`)
        const spanVote = document.createElement(`span`)
        const resetVote = document.createElement(`button`)
        animalName.innerHTML = animalObject.name  
        animalImage.src = animalObject.image
        voteButton.textContent = `votes `
        spanVote.textContent = animalObject.votes
        resetVote.textContent = `reset`
        animalContainer.appendChild(animalName)
        animalContainer.appendChild(animalImage)
        animalContainer.appendChild(voteButton)
        voteButton.appendChild(spanVote)
        animalContainer.appendChild(resetVote)
        voteButton.addEventListener(`click`,function(){
           // alert(spanVote.textContent) 
            spanVote.textContent ++
        })
        resetVote.addEventListener(`click`,function(){
            spanVote.textContent = 0
        })

}




    










    
 
 
    
    
         
    



