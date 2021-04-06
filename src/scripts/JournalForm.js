const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = " ",
                document.querySelector("#entryContent").value = " "
        }
    },

    renderEntryForm: {
        value: () => {

            return `
            <form class="pure-form" integrity="">

        <fieldset class="pure-group">
            <input required type="text" id="entryTitle" class="pure-input-1-4" placeholder="Journal Title" >
        </fieldset>
        <fieldset>
            <textarea required id="entryContent" class="pure-input-2-3" placeholder="Journal Entry" ></textarea>
        </fieldset>
        <button id="saveEntryButton" type="submit" class="entryContent pure-button pure-input-1-8 pure-button-primary ">Save Journal Entry</button>


        </form>
        `
        }
    }
})

/*<
label
for = "entryTitle" > Title: < /label> <
    label
for = "entryContent" > Deep thoughts: < /label>*/

module.exports = FormManager