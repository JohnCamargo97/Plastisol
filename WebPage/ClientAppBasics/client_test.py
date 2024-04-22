import requests


def getList():

    endpoint = "http://127.0.0.1:8000/API/products"

    get_response = requests.get(endpoint) # -> API Application programming interface

    #REST API -> JSON response (javascript object notation)

    return print(get_response.json())

def getDetail():
    pk = input("Ingrese el pk del producto:" )
    endpoint = "http://127.0.0.1:8000/API/products/" + pk + "/"

    get_response = requests.get(endpoint) # -> API Application programming interface
    return print(get_response.json())

def getList():

    auth_endpoint = "http://127.0.0.1:8000/API/products/auth/"
    auth_response = requests.post(auth_endpoint, json={'username': 'johnAdmin', 'password': 'Iguanasranas'}) # -> API Application programming interface
    
    if auth_response.status_code == 200:
        token = auth_response.json()['token']
        headers = {
            'Authorization': f'Bearer {token}'
        }
        endpoint = "http://127.0.0.1:8000/API/products/"
        get_response = requests.get(endpoint, headers=headers) # -> API Application programming interface
        return print(auth_response.json())

def postCreate():
    endpoint = "http://127.0.0.1:8000/API/products/"
    data = {
        "product_id": "00201",
        "category": "Parafinado",
        "description": "Parafinado rojo rollo 50 metros",
        "amount": 15,
        "unit_price": 2500
    }

    get_response = requests.post(endpoint, json=data) # -> API Application programming interface
    return print(get_response.json())

getList()