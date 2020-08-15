//Procura o botão de id "#add-time" 
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField) //Evento e ação

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //cloneNode - duplica os elementos
    
    //Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo limpar
    fields.forEach(function(field) {
        //Pegar o field do momento e limpa ele
        field.value = ""
    })

    //Colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}