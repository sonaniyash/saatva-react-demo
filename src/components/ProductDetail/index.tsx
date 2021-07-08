import React, { FunctionComponent } from 'react';
import {
    ImageContainer,
    Image,
    ProductDescription,
    ProductTitle,
    MattressTypeContainer,
    AddToCartButton,
    TypeContainer,
    TypeButton,
    TypeTitle
} from './ProductDetail.style';
import { Container, Row, Col } from 'react-bootstrap';
import mockDetail from './ProductDetail.mock';
import { IProductDetailProps } from './ProductDetail.model';

const ProductDetail: FunctionComponent<IProductDetailProps> = ({ setCartItem }) => {
    const [selected, setSelected] = React.useState({ name: '', price: 0 });
    return (
        <Container>
            <Row>
                <Col md="7" xs="12">
                    <ImageContainer>
                        <Image src='https://github.com/Saatva/hiring-test/blob/master/images/loom-carousel.jpg?raw=true' />
                    </ImageContainer>
                </Col>
                <Col md="5" xs="12">
                    <ProductDescription>
                        <ProductTitle>Choose Your Mattress</ProductTitle>
                        <p>Select Mattress type</p>
                        <MattressTypeContainer>
                            {mockDetail && mockDetail.mattresses && Object.keys(mockDetail.mattresses).map((mat: string, i: number) => {
                                const type: any = Object.values(mockDetail.mattresses)[i];
                                return (
                                    <TypeContainer onClick={() => setSelected(type)}>
                                        <TypeButton selected={selected.name === type?.name}>
                                            <TypeTitle selected={selected.name === type?.name}>{type.name}</TypeTitle>
                                        </TypeButton>
                                    </TypeContainer>
                                )
                            }
                            )}
                        </MattressTypeContainer>
                        {selected && selected.name && (
                            <Row style={{ marginTop: 15 }}>
                                <Col>{selected.name} Mattress</Col>
                                <Col style={{ textAlign: 'right' }}>${selected?.price}</Col>
                            </Row>
                        )}
                        <AddToCartButton block onClick={setCartItem}>Add to Cart</AddToCartButton>
                    </ProductDescription>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail;