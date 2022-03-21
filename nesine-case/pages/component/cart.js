import React from 'react'
import AppContext from "../context/context";

export default function Cart(){
    return(
        <div>
            <AppContext.Consumer>
                {(state) =>{
                    const events = Object.values(state.state.cart);
                    const totalAmount = events.reduce((total, item) => (total = total + item.oran * item.count),
                    0
                    ).toFixed(2);
                    return(
                        <div className='card'>
                            {events.map((event, i) =>(
                                <div className='card-item' key={i}>
                                    <div>{event.C}</div>
                                    <div>Kod : {event.C}</div>
                                    <div>Maç : {event.N}</div>
                                    <div>Oran : {event.oran} </div>
                                    <div>MBS : {event.OCG[1].MBS}</div>
                                </div>
                            ))}
                            <div className='card-total'>Toplam Tutar : {totalAmount}</div>
                        </div>
                    )
                }}
            </AppContext.Consumer>
        </div>
    )
}