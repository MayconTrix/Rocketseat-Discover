const url = ""

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then( data => {
            userName.textContent = data.name
            userCity.textContent = data.location
            userAvatar.src = data.avatar_url
        })
        .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function updateUser(updateUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: 'Olivia Zars',
    avatar: 'https://picsum.photos/200/300',
    city: 'Rio do Sul'
}
// addUser(newUser)

const updateUser = {
    name: 'Marcelo Clovis',
    avatar: "https://picsum.photos/200/300",
    city: 'Recife'
}

// updateUser(updateUser, 1)

deleteUser(2)

getUsers()
getUser(9)