import React from 'react'
import './cardlist.styles.css'
import Card from '../card/card.component'

export default function Cardlist(props) {
    return (
        <div className="card-list">
            {props.monsters.map((el) => <Card key={el.id} monsters={el}/>)}
        </div>
    )
}
