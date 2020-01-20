//Define Card Component, add dynamic properties name and job
const Card = (props) => {
  return(
    //placeholder to render name and job
    <div class="card">
      <p class="title">{props.name}</p>
      <p>{props.job}</p>
    </div>
  )
}

//Define App Component to group Card
const App = () => {
  return(
    //input name and job data
  <div>
    <Card name="Mangga" job="Marketing"/>
    <Card name="Jeruk" job="Produksi"/>
    <Card name="Durian" job="Delivery"/>
    </div>
  )
}

//Render Component and select where to place
ReactDOM.render(<App />, document.querySelector('#root'))
