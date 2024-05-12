import React from 'react'
import { Form } from 'react-router-dom'

function Footer() {
  return (
    <div style={{backgroundColor:'green', width:'400px', height:'120px'}}>

        <Form>
            <label>Complete the form</label>
            <input type='text'/>
        </Form>
        <p>Code written bby me</p>
    </div>
  )
}

export default Footer