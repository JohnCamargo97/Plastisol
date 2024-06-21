const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('code')

function OneAtTime(){
  const button = document.getElementById( "download_button" );
  const input_id = document.getElementById( "input_id" ).value;
  const product_id = document.getElementById( "id_product" );
  const hologram = document.getElementById( "hologram" );
  console.log(input_id)
  product_id.innerHTML =  input_id
  let image = `<img alt='Barcode Generator TEC-IT'
  src='https://barcode.tec-it.com/barcode.ashx?data=${input_id}&code=EAN8'/>`
  hologram.innerHTML = image
  button.setAttribute("href", "https://barcode.tec-it.com/barcode.ashx?data="+input_id+"&code=EAN8&download=true");
  button.setAttribute("download", input_id);
}

function previewFile() {
    const button = document.getElementById( "download_button" );
    const content = document.querySelector(".content");
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();
    
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        const codesList = reader.result.split(/\r?\n/);
        for (let i = 0; codesList.length > i; i++){ 
            let row = `
                <tr>
                    <td>${codesList[i]}</td>
                    <td>
                        <div class="barcode">
                            <img alt='Barcode Generator TEC-IT'
                            src='https://barcode.tec-it.com/barcode.ashx?data=${codesList[i]}&code=EAN8'/>
                        </div>
                    </td>
                </tr>
                `
            content.innerHTML += row


            //button.style.display = "block"  
            //content.innerText = codesList[i];

        }
      },
      false,
    );
  
    if (file) {
      reader.readAsText(file);
    }
  }
