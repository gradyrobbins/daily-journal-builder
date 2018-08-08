console.log("Hello DataManager.js")

// const APIObject = {}
const APIObject = Object.create(null, {
   saveJournalEntry :{
        value: (entry) => {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
        .then(response => response.json())
    }
},
/*
Purpose: Delete journal entry from API as specified by button-id
*/

   deleteEntries: {
        value: (id) => {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "DELETE"
        })
    }
},
    /*
    Purpose: Retrieves all product objects from API
    */
    getEntries: {
       value: () => {
        return fetch("http://localhost:8088/entries")
        .then(response => response.json());
        }
    }
});
 

module.exports = APIObject;
