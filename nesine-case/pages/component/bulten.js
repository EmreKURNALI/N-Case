import React from 'react'
import AppContext from "../context/context";

export default function Bulten(){
    return(
        <div>
            <AppContext.Consumer>
                {(state) =>{
                    const events = Object.values(state.state.BultenList.Events);
                    return(
                        <div className='bTable'>
                            <div className='bTable-head'>
                                <div className='item item1'>Event Count : {events.length}</div>
                                <div className='item item2'>Yorumlar</div>
                                <div className='item item3'>MBS</div>
                                <div className='item item4'>1</div>
                                <div className='item item5'>x</div>
                                <div className='item item6'>2</div>
                                <div className='item item7'>Alt</div>
                                <div className='item item8'>Üst</div>
                                <div className='item item9'>H1</div>
                                <div className='item item10'>1</div>
                                <div className='item item11'>x</div>
                                <div className='item item12'>2</div>
                                <div className='item item13'>H2</div>
                                <div className='item item14'>1-X</div>
                                <div className='item item15'>1-2</div>
                                <div className='item item16'>X-2</div>
                                <div className='item item17'>Var</div>
                                <div className='item item18'>Yok</div>
                                <div className='item item19'>+99</div>
                            </div>
                            {events.map((event, i) =>(
                                <div className='bTable-body' key={i}>
                                    <div className='bTable-body-first'>
                                        <div className='item item1'>
                                            <span className='id'>{event.C}</span>
                                            <span className='date'>{event.D}</span>
                                            <span className='day'>{event.DAY}</span>
                                            <span className='leauge'>{event.LN}</span>
                                        </div>
                                        <div className='item item2'>Yorumlar</div>
                                        <div className='item item3'></div>
                                        <div className='item item4'>1</div>
                                        <div className='item item5'>x</div>
                                        <div className='item item6'>2</div>
                                        <div className='item item7'>Alt</div>
                                        <div className='item item8'>Üst</div>
                                        <div className='item item9'>H1</div>
                                        <div className='item item10'>1</div>
                                        <div className='item item11'>x</div>
                                        <div className='item item12'>2</div>
                                        <div className='item item13'>H2</div>
                                        <div className='item item14'>1-X</div>
                                        <div className='item item15'>1-2</div>
                                        <div className='item item16'>X-2</div>
                                        <div className='item item17'>Var</div>
                                        <div className='item item18'>Yok</div>
                                        <div className='item item19'>3</div>
                                    </div>
                                    <div className='bTable-body-second'>
                                        <div className='item item1'>
                                            <span className='code'>{event.C}</span>
                                            <span className='hour'>{event.T}</span>
                                            <span className='team'>{event.N}</span>
                                        </div>
                                        <div className='item item2'>Yorumlar</div>
                                        <div className='item item3'>{event.OCG[1].MBS}</div>
                                        <div className='item item4'>
                                            <button onClick={(e) => {
                                                    const clickParent = e.target.parentElement.classList;
                                                    if(!(clickParent.contains('selected'))){
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                        state.addToCart(event,event.OCG[1].OC[0].O)
                                                        clickParent.add("selected");
                                                    }else{
                                                        state.removeFromCart(event.C)
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                    }
                                                }}>
                                                {event.OCG[1].OC[0].O}
                                            </button>
                                        </div>
                                        <div className='item item5'>
                                            <button onClick={(e) => {
                                                    const clickParent = e.target.parentElement.classList;
                                                    if(!(clickParent.contains('selected'))){
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                        state.addToCart(event,event.OCG[1].OC[1].O)
                                                        clickParent.add("selected");
                                                    }else{
                                                        state.removeFromCart(event.C)
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                    }
                                                }}>
                                                {event.OCG[1].OC[1].O}
                                            </button>
                                        </div>
                                        <div className='item item6'></div>
                                        <div className='item item7'>
                                            <button onClick={(e) => {
                                                    const clickParent = e.target.parentElement.classList;
                                                    if(!(clickParent.contains('selected'))){
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                        state.addToCart(event,event.OCG[5].OC[25].O)
                                                        clickParent.add("selected");
                                                    }else{
                                                        state.removeFromCart(event.C)
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                    }
                                                }}>
                                                {event.OCG[5].OC[25].O}
                                            </button>
                                        </div>
                                        <div className='item item8'>
                                            <button onClick={(e) => {
                                                    const clickParent = e.target.parentElement.classList;
                                                    if(!(clickParent.contains('selected'))){
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                        state.addToCart(event,event.OCG[5].OC[26].O)
                                                        clickParent.add("selected");
                                                    }else{
                                                        state.removeFromCart(event.C)
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                    }
                                                }}>
                                                {event.OCG[5].OC[26].O}
                                            </button>
                                        </div>
                                        <div className='item item9'></div>
                                        <div className='item item10'></div>
                                        <div className='item item11'></div>
                                        <div className='item item12'></div>
                                        <div className='item item13'></div>
                                        <div className='item item14'>
                                            <button onClick={(e) => {
                                                    const clickParent = e.target.parentElement.classList;
                                                    if(!(clickParent.contains('selected'))){
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                        state.addToCart(event,event.OCG[2].OC[3].O)
                                                        clickParent.add("selected");
                                                    }else{
                                                        state.removeFromCart(event.C)
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                    }
                                                }}>
                                                {event.OCG[2].OC[3].O}
                                            </button>
                                        </div>
                                        <div className='item item15'>
                                            <button onClick={(e) => {
                                                    const clickParent = e.target.parentElement.classList;
                                                    if(!(clickParent.contains('selected'))){
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                        state.addToCart(event,event.OCG[2].OC[4].O)
                                                        clickParent.add("selected");
                                                    }else{
                                                        state.removeFromCart(event.C)
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                    }
                                                }}>
                                                {event.OCG[2].OC[4].O}
                                            </button>
                                        </div>
                                        <div className='item item16'>
                                            <button onClick={(e) => {
                                                    const clickParent = e.target.parentElement.classList;
                                                    if(!(clickParent.contains('selected'))){
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                        state.addToCart(event,event.OCG[2].OC[5].O)
                                                        clickParent.add("selected");
                                                    }else{
                                                        state.removeFromCart(event.C)
                                                        const itemList = e.target.parentElement.parentElement.children;
                                                        [].forEach.call(itemList, (item) =>{
                                                            item.classList.remove("selected")
                                                        })
                                                    }
                                                }}>
                                                {event.OCG[2].OC[5].O}
                                            </button>
                                        </div>
                                        <div className='item item17'></div>
                                        <div className='item item18'></div>
                                        <div className='item item19'>3</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }}
            </AppContext.Consumer>
        </div>
    )
}