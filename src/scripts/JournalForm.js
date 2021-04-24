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
            <form class="pure-form pure-group" integrity="">

                <fieldset class="pure-u-1 pure-g">

                    <div><input required type="text" id="entryTitle" class="pure-input-1-3" placeholder="Journal Title" >
                    </div>
                    <div><textarea required id="entryContent" class="pure-u-1" placeholder="Journal Entry" ></textarea></div>
                    <button id="saveEntryButton" type="submit" class="entryContent pure-button pure-input-1-8 pure-button-primary ">Save Journal Entry</button><br/>

                </fieldset>



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

// <
// div class = "pure-u-1-24 l-box" >
//     <
//     img class = "pure-img"
// src = "https://i0.hippopx.com/photos/360/152/13/daffodils-osterglocken-yellow-flower-preview.jpg"
// alt = "Flowers" >
//     <
//     /div>

module.exports = FormManager