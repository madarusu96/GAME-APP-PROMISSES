var apiURL = "https://games-world.herokuapp.com";


function getGamesList() {
    return fetch(apiURL + "/games", {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(response => response.json());
}


function deleteGame(gameID) {
    return fetch(apiURL + "/games/" + gameID, {
        method: "DELETE",
    }).then(r => r.text());
}


function createGameRequest(gameObject) {
    fetch(apiURL + "/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: gameObject
    }).then(response => response.json())
}




function updateGameRequest(gameID, updatedGameObj) {
    return fetch(apiURL + "/games/" + gameID, {
        method: "PUT",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: updatedGameObj
    }).then(response => response.json())
}