const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = " ",
                document.querySelector("#entryContent").value = " "
        }
    },

    renderEntryForm: {
        value: () => {

            return `<form class="pure-form" integrity="">
        <fieldset class="pure-group">
            <label for="entryTitle">Title:</label>
            <input required type="text" id="entryTitle" class="pure-input-1-2" placeholder="Title"  >
        </fieldset>

        <fieldset>
            <label for="entryContent">Deep thoughts:</label>
            <textarea id="entryContent" class="pure-input-1-2" placeholder="Deep thoughts" ></textarea>
        </fieldset>

        <button id="saveEntryButton" type="submit" class="pure-button pure-input-1-2 pure-button-primary>Save Journal Entry</button>

    </fieldset>
</form>`
        }
    }
})
module.exports = FormManager