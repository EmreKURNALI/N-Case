import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Bulten from '../pages/component/bulten';
import Cart from '../pages/component/cart';
import AppContext from "../pages/context/context";
import BultenList from "../pages/api/bulten_data.json";
import { useState } from 'react';

export default function Home() {
  const bulten = BultenList;

  const [state, setState] = useState({
    BultenList: bulten,
    cart:[]
  });

  const addToCart = (bultens , bultenOran) => setState({
    ...state,
    cart: state.cart.find(cardItem => cardItem.C == bultens.C)
    ? state.cart.map(cardItem => cardItem.C === bultens.C ? { ...cardItem, count: cardItem.count} : cardItem)
    : [...state.cart, { ...bultens, count : 1, oran : bultenOran}],

  });

  const removeFromCart = C => setState({
    ...state,
    cart: state.cart.filter(cardItem => cardItem.C !== C)
  });

  return (
    <div>
      <Head>
        <title>Nesine Case</title>
        <meta name="description" content="Nesine Case" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Row>
            <Col xs={12}>
                <AppContext.Provider value={{state: state, addToCart, removeFromCart}}>
                  <Bulten/>
                  <Cart/>
                </AppContext.Provider>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}