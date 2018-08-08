console.log("Hello JournalContentDom.js")

// create a function to build a card; this is what the journal entry should look like
function renderContent (data){
    return `<div class="entriesDOM"> 
        <h2>${data.title}</h2>
        <h4>${data.date}</h4>
        <p>${data.content}</p>
        <button class=${data.id}>delete</button>
    </div>`
}

module.exports = renderContent;