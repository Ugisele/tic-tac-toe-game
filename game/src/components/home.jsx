import React from 'react'

function Home() {
  return (
    <div style={{backgroundColor:'green, flex:1'}}>
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
      <button>
        <a href="#">Login</a>
      </button>
    </div>
  )
}

export default Home