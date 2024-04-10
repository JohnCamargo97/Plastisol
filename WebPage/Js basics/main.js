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
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNzg4NjQ1LCJpYXQiOjE3MTI3ODgzNDUsImp0aSI6IjI0MDI2MWMzYmNmNjQ5ZmY5YzkyNmNjYmNkYTlhMDRmIiwidXNlcl9pZCI6MX0.YQIZIFoy_US22pKGgHJ7Xk8fZFLGx8nEslto_KNoeJo'
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
        console.log('success:', data)
    })
}

let build_data = (data) => {
    let data_wrapper = document.getElementById('data-wrapper')
    
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

    //add an listener
    add_product()

}

let add_product = () => {
    let add_btn = document.getElementById('add-product')
    add_btn.addEventListener('click', (e) => {
        let form = document.getElementById('form').style.display = 'block'
    })
}

get_data()

const form = document.querySelector("#product-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
  });

async function sendData(){
    const formData = new FormData(form);
    console.log("formData", formData)
}