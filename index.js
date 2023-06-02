const localStorageKey = "to-do-list-gwc"

function new_task() {
    let input = document.getElementById("input-new-task")

    if (!input.value) {
        alert("Digite algo para inserir em sua lista")
    }

    // else if ()

    else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })

        localStorage.setItem(localStorageKey,JSON.stringify(values))
        show_values()
    }
}

function show_values() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById("to-do-list")
    list.innerHTML = ""
    for(let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='remove_item('${values[i]['name']}')'>OK</button></li>`
    }
}

function remove_item(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))

}

show_values()