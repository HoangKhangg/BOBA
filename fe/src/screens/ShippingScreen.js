import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen() {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [district, setPostalCode] = useState(shippingAddress.district)
    const [country, setCountry] = useState(shippingAddress.country)
    const history = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, district, country }))
        history('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Địa chỉ giao hàng</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Số nhà, tên đường'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>Quận/huyện</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Quận/huyện'
                        value={district ? district : ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>Tỉnh/thành phố</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Tỉnh/thành phố'
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Quốc gia</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Quốc gia'
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button className='btn-ship' type='submit' variant='primary'>
                    Tiếp tục
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
