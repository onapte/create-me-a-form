document.addEventListener('DOMContentLoaded', function() {
    addFormElement();
    loadSettings();
    autoResizeTextarea();
    prefillGoogleMail();
})

function loadSettings() {
    let settingsButton = document.querySelector('#settings-button');
    settingsButton.onclick = function() {
        let settingsDiv = document.querySelector('.settings-div');
        settingsDiv.style.display = 'block';
    }
}

function prefillGoogleMail() {
    let receiver = `someone@example.com`;
    let subject = 'I-want-a-form';
    let body = document.querySelector('#form-space').innerHTML;
    let url = `https://mail.google.com/mail/?view=cm&fs=1&to=${receiver}&su=${subject}&body=${body}`;
    let sendButton = document.querySelector('#send');
    sendButton.onclick = function() {
        let a =window.open(url);
        
    }
}

function autoResizeTextarea() {
    let textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        for (let i = 0; i < textarea.length; i++) {
            textarea[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
            textarea[i].addEventListener('input', function() {
                this.style.height = "auto";
                this.style.height = textarea.scrollHeight + 'px';
            }, false)
        }
    })
}

function addFormElement() {
    let toolbarButtons = document.querySelectorAll('.toolbar-feature');
    let formArea = document.querySelector('#form-space');
    toolbarButtons.forEach(toolbarButton => {
        toolbarButton.onclick = function() {
            if (toolbarButton.innerHTML === "H") {
                let header = document.createElement('h3');
                header.innerHTML = "Add header text here!";
                formArea.append(header);
            }
            if (toolbarButton.innerHTML === "FL") {
                let field = document.createElement('input');
                let label = document.createElement('label');
                let lineBreak = document.createElement('br');
                label.className="added-label space-element";
                label.innerHTML = "Label";
                label.contentEditable = true;
                field.value = "Field";
                field.className = "added-field space-element";
                formArea.append(label, field, lineBreak);
            }
            if (toolbarButton.innerHTML === "FWL") {
                let field = document.createElement('input');
                let lineBreak = document.createElement('br');
                field.value = "Field";
                field.className = "added-field space-element";
                formArea.append(field, lineBreak);
            }
            if (toolbarButton.innerHTML === "TL") {
                let textarea = document.createElement('textarea');
                let label = document.createElement('label');
                label.className="added-label space-element textarea-label";
                label.innerHTML = "Label";
                label.contentEditable = true;
                let lineBreak = document.createElement('br');
                textarea.value = "Area";
                textarea.className = "added-textarea space-element";
                formArea.append(label, textarea, lineBreak);
            }
            if (toolbarButton.innerHTML === "TWL") {
                let textarea = document.createElement('textarea');
                let lineBreak = document.createElement('br');
                textarea.value = "Area";
                textarea.className = "added-field space-element";
                formArea.append(textarea, lineBreak);
            }
            if (toolbarButton.innerHTML === "T") {
                let text = document.createElement('p');
                let lineBreak = document.createElement('br');
                text.innerHTML = "Enter text here";
                text.contentEditable = true;
                //textarea.className = "added-field";
                formArea.append(text, lineBreak);
            }
            if (toolbarButton.innerHTML === "B") {
                let button = document.createElement('button');
                let lineBreak = document.createElement('br');
                button.innerHTML = "Submit";
                button.contentEditable = true;
                //textarea.className = "added-field";
                formArea.append(button, lineBreak);
            }
        }
    })
}