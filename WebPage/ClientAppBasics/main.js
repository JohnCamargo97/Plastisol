let URL = 'http://127.0.0.1:8000/product/'

let get_data = () => {
        fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        build_data(data)
    })
}

let post_data = (product) => {
    let token = localStorage.getItem('token')
    console.log(`Bearer ${token}`)
    fetch(URL, {
        method:'POST', 
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => {
        console.log('success response:', data)
        get_data()})
    .catch(error => console.log(error))
}

let build_data = (data) => {
    let data_wrapper = document.getElementById('data-wrapper')
    data_wrapper.innerHTML = ''
    for (let i = 0; data.length > i; i++){
        let data_ = data[i]
        
        let data_card = `
            <div class="product--card">
                <p><small>Codigo: ${data_.product_id}</small></p>
                <p>${data_.description}</p>
                <p>$ ${data_.unit_price} COP</p>          
            </div>
            <br>     
        `
        data_wrapper.innerHTML += data_card
    }

    //add a listener
    add_product()

}

let add_product = () => {
    let add_btn = document.getElementById('add-product')
    add_btn.addEventListener('click', (e) => {
        let form = document.getElementById('form').style.display = 'block'
    })
}

get_data()

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
  });

async function sendData(){
    const formData = new FormData(form);
    const data = Object.fromEntries(formData); //convert to normal js object
    post_data(data)
}