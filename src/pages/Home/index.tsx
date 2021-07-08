import React, { FunctionComponent } from 'react';
import ProductDetail from '../../components/ProductDetail';
import Header from '../../components/Header';
import { HomeContainer } from './Home.style';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: FunctionComponent = () => {
    const [cartItem, setCartItem] = React.useState(0);
    return (
        <HomeContainer>
            <Header cartItemCount={cartItem} />
            <ProductDetail setCartItem={() => setCartItem(cartItem + 1)} />
        </HomeContainer>
    )
}

export default Home;