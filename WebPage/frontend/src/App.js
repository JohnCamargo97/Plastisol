import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = { details: [], }

  componentDidMount() {

    let data;
    axios.get('http://127.0.0.1:8000/product/')
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => {})

  }

  render() {
    return(
      <div>
        <header>Test API</header>
        <hr></hr>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h3>{output.description}</h3>
              {output.product_id}<br></br>
              {output.amount}<br></br>
              {output.unit_price}
            </div>
          </div>
        ))}
      </div>
    )
  }  
}


export default App;