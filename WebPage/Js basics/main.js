let URL = 'http://127.0.0.1:8000/product/'

let get_data = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        build_data(data)
    })
}

let build_data = (data) => {
    let data_wrapper = document.getElementById('data-wrapper')
    
    for (let i = 0; data.length > i; i++){
        let data_ = data[i]
        
        let data_card = `
            <div>
            <p>${data_.product_id}</p>
            </div>        
        `
        data_wrapper.innerHTML += data_card
    }
}

get_data()
