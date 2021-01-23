/**
 * Contactdefinition
 */
let contacts = [{
    'image': 'img/Alex.jpeg',
    'name': 'Alex',
    'status': 'img/StatusAlex.jpeg',
},
{
    'image': 'img/Jakob.jpeg',
    'name': 'Jakob',
    'status': 'img/StatusJakob.jpeg',
},
{
    'image': 'img/Marie.jpeg',
    'name': 'Marie',
    'status': 'img/StatusMarie.jpeg',
},
{
    'image': 'img/Nadine.jpeg',
    'name': 'Nadine',
    'status': 'img/StatusNadine.jpeg',
},
{
    'image': 'img/Peter.jpeg',
    'name': 'Peter',
    'status': 'img/StatusPeter.jpeg',
},
{
    'image': 'img/Papa.jpeg',
    'name': 'Papa',
    'status': 'img/StatusPapa.jpeg',
},
{
    'image': 'img/Tanja.jpeg',
    'name': 'Tanja',
    'status': 'img/StatusTanja.jpeg',
}
];

/**
 * show the contacts
 */
function show() {
 
    for (let i = 0; i < contacts.length; i++) {
        let contactline = contacts[i];

        document.getElementById('contactcontainer').innerHTML += `
        
            <div class="contactcontainer">
                <img src="${contactline['image']}" class="contactpic">
                <h2 class="contactname" onclick="showChat()">${contactline['name']}</h2>
                <h2 class="contactnameResponsive" onclick="showChatResponsive()">${contactline['name']}</h2>
                <img src="icons/status.png" class="status" onclick="showStatus(${i})">
            </div>
        `;
    }
}

/**
 * Open Status 
 */
function showStatus(i) {
    document.getElementById('overlay').classList.remove('d-none');
    document.getElementById('overlay').classList.add('Overlay');
    document.getElementById('mypicture').src = contacts[i]['status'];
}

/** 
*close Status
*/
function closeStatus() {
    document.getElementById('overlay').classList.remove('Overlay');
    document.getElementById('overlay').classList.add('d-none');
}

/**
*show chat
*/
function showChat() {
    document.getElementById('chats').innerHTML = `
        <div id="message-area" class="message-area"></div>
        <div id="user-area" class="user-area">
        <img class="icons" src="icons/smiley1.png" onclick="showSmileys()">
        <input id="message" class="input" placeholder="Schreibe eine Nachricht" type="text">
        <img class="icons" src="icons/send.png" onclick="addMessage(); saveMessages(); loadMessages()">
        </div>
        `
}

/**
 * Show chat Responsive Version
 */
function showChatResponsive(name) {
    document.getElementById('chats').innerHTML = `
        <div id="message-area" class="message-area"></div>
        <div class="user-area">
        <img class="icons" src="icons/smiley1.png" onclick="showSmileys()">
        <input id="message" class="input" placeholder="Schreibe eine Nachricht" type="text">
        <img class="icons" src="icons/send.png" onclick="addMessage(); saveMessages()">
        <img class="arrow" src="icons/arrow.png" onclick="closeChats()">
        </div>
        `

        document.getElementById('chats').classList.remove('chat-section');
        document.getElementById('chats').classList.add('chat-sectionResponsive');
        document.getElementById('contactcontainer').classList.add('d-none');


        selectedUser = name;
        addMessage();

        for (let i=0; i < name.length; i++) {
            let t = name[i];
            t.innerHTML += `
            <div class="message">
                ${t}
            </div>
            `
        }
}


/**
 * close Chat in Responsive Version
 */
function closeChats() {
    document.getElementById('contactcontainer').classList.remove('d-none');
    document.getElementById('contactcontainer').classList.add('contact-section');
    document.getElementById('chats').classList.remove('chat-sectionResponsive');
    document.getElementById('chats').classList.add('chat-section');
    
}

/**
 * Push Message with "Enter"
 */
function init() {
    document.addEventListener("keydown", function (u) {
        if (u.keyCode == 13) {  //checks whether the pressed key is "Enter"
        addMessage();
    }
    });
}

/**
 * Open and Close Smiley menu
 */
function showSmileys() {
    document.getElementById('smileys').classList.remove('d-none');
    document.getElementById('smileys').classList.add('smiley-menu');
}

function closeSmileys() {
    document.getElementById('smileys').classList.remove('smiley-menu');
    document.getElementById('smileys').classList.add('d-none');

}

/**
 * Push smiley into inputfield
 */
function pushSmiley(e) {
    message.value += e;
}

/**
 * Selected Userchats
 */
let messages = [];
let selectedUser = 'Marie';
let users = [
    { name: 'Alex', 'messages': [] },
    { name: 'Jakob', 'messages': [] },
    { name: 'Marie', 'messages': [] },
    { name: 'Nadine', 'messages': [] },
    { name: 'Peter', 'messages': [] },
    { name: 'Papa', 'messages': [] },
    { name: 'Tanja', 'messages': [] }
];

/**
 * send Message
 */
function addMessage() {
    let messages = document.getElementById('message').value;
    users[selectedUser]['messages'].push(users);
    saveUsers();
    addMessage();

    let MyMessage = document.getElementById('message-area');
    MyMessage.innerHTML = '';

    for (let i=0; i < messages.length; i++) {
        let m = messages[i];
        MyMessage.innerHTML += `
        <div class="message">
            ${m}
        </div>
        `
    }

    document.getElementById('message').value = '';
}

/**
 * Local Storage Stuff
 */
function saveUsers(){
    localStorage.setItem('users', JSON.stringify(users));
}

