const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup',(e) => {
    creatTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() =>{
            e.target.value = ''
        },10)
        
        randomSelect()
    }
})

function creatTags(inputs){
    const tags = inputs.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag 
        tagsEl.appendChild(tagEl)
    })
}