import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useLocation  } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';


function SearchBox() {
    const [keyword, setKeyword] = useState('')

    const history = useNavigate()
    const location = useLocation()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history(`/?keyword=${keyword}`)
        } else {
            history(history(location.pathname))
        }
    }
    return (
        <Form style={{display: 'flex', alignItems: 'center'}} onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
                style={{paddingLeft: '10px'}}
            >
                 <FaSearch />
            </Button>
        </Form>
    )
}

export default SearchBox
