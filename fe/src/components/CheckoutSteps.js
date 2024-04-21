import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        <Nav className='justify-content-center mb-4'>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/login/shipping'>
                        <Nav.Link className='nav-link'>Địa chỉ</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link className='nav-link' disabled>Địa chỉ</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link className='nav-link'>Phương thức thanh toán</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link className='nav-link' disabled>Phương thức thanh toán</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link className='nav-link'>Đặt hàng</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link className='nav-link' disabled>Đặt hàng</Nav.Link>
                    )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
