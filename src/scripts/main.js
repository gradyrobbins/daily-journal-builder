console.log("hey from main.js");
const FormManager = require("./JournalForm")
const APIObject = require("./DataManager")
const renderContent = require("./JournalContentDom")
const getDate  = require("./getDate")
// const $ = require("jquery")


// render the journal entry form
document.querySelector("#journalform").innerHTML = FormManager.renderEntryForm()
const saveButton = document.querySelector("#saveEntryButton")
// elliot cohort 26 troubleshooting ideas below:
// console.log(saveButton);
// saveButton.addEventListener("click", () => {console.log("savebutton clicked")})
// add event listener
document.querySelector("#saveEntryButton").addEventListener("click", () => {
    // get form field values
    // create object from them
    // Add timestamp
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: getDate()
    }
    // POST it to API-- need datamanager.js
    APIObject.saveJournalEntry(newEntry).then(() => {
        // Clear the form fields
        FormManager.clearForm()
        
        // Put HTML representation on the DOM
        document.querySelector("#domcard").innerHTML += renderContent(newEntry)
        
        
    })
})

// puts all journal entries on to the DOM
function listEntries () {
    document.querySelector("#domcard").innerHTML = "";
    APIObject.getEntries().then(result => {
    result.forEach(entry => {
        document.querySelector("#domcard").innerHTML += renderContent(entry)
    })

})
}
listEntries()

document.querySelector(`#domcard`).addEventListener("click", (event) => {
    console.log(event);
    if(event.target.id.split("--")[0]=== "delete"){
        //console.log(event.target.id);
        let id = event.target.id.split("--")[1]
        //console.log(id);
        APIObject.deleteEntries(id).then(() => {
            listEntries()
        })

    }

})