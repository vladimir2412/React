import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      orders: [],
      items:[
      {
        id:1,
        title:'Осмос',
        img:'osmos.jpeg',
        desc:'Система для очищення води',
        category:'systems',
        price:'5000'
      },
      {
        id:2,
        title:'Проточные фильтры',
        img:'kart.jpeg',
        desc:'Система для очищення води',
        category:'elements',
        price:'2500'
      },
      {
        id:3,
        title:'Ecomix A',
        img:'mix.jpeg',
        desc:'ФІЛЬТРУЮЧИЙ МАТЕРІАЛ ECOMIX A 25 Л',
        category:'elements',
        price:'2500'
      },
      ]
    }
    this.addToOrder=this.addToOrder.bind(this)
  }
  render(){
    return(
<div className="wrapper">
<Header />
<Items items={this.state.items} onAdd={this.AddToOrder} />
<Footer />
</div>
      )
  }

  addToOrder(item) {
    this.setState({orders: [...this.state.orders, item]}, () => {
      console.log(this.state.orders)
    })
  }
}

export default App;
