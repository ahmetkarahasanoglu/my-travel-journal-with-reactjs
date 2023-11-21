import './App.css'
import Header from './Header'
import Card from './Card'
import cardData from './cardData'

function App() {  

  const cards = cardData.map((obj) => {
    return (
      <Card 
        key={obj.id}
        obj={obj}
      />
    )

  })

  return (    
    <div className="container">
      <Header />
      {cards}
    </div>
  )
}

export default App
