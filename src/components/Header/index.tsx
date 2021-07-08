import { FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { HeaderContainer, Title, CartNumber, CartIcon } from './Header.style';
import Icon from '../../assets/images/shopping-cart.png';
import { IHeaderProps } from './Header.model';

const Header: FunctionComponent<IHeaderProps> = ({ cartItemCount }) => {
    return (
        <HeaderContainer>
            <Row>
                <Col>
                    <Title>Saatva</Title>
                </Col>
                <Col >
                    <div style={{ float: 'right' }}>
                        <CartIcon src={Icon} />
                        <CartNumber>{cartItemCount}</CartNumber>
                    </div>
                </Col>
            </Row>
        </HeaderContainer>
    )
}

export default Header;