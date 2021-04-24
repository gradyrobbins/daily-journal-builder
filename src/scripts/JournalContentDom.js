//console.log("Hello JournalContentDom.js")
// create a function to build a card; this is what the journal entry should look like


function renderContent(data) {
    return `<div class="entriesDOM">
                <h2>${data.title}</h2>
                <p>${data.content}</p>
                <h6>${data.date}</h6>
                <button id="delete--${data.id}">Delete</button>
            </div>`
}

module.exports = renderContent;