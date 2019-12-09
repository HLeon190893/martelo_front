import React, { useState, useEffect } from 'react';
import axios from 'axios';

const  FormAuctionF = () => {
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [capValue, setCapValue] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState({})

    async function changeHandler(e) {
        // await setAuction({ [e.target.name]: e.target.value })
         setName({name: e.target.value})
         console.log(name);
         setValue({value: e.target.value})
         console.log(value);
         setCapValue({capValue: e.target.value})
         console.log(capValue);
         setDescription({description: e.target.value})
         console.log(description)
    }

    async function imageHandler(e) {
        await setImage({ image: e.target.files[0] })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // formData.append('name', name)
        // formData.append('value', value)
        // formData.append('capValue', capValue)
        // formData.append('description', description)
        console.log(image);
        let formData = new FormData();
        formData.append('image', image);
        console.log(formData)
        axios.post('http://localhost:3001/auction/image-upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                setImage({ image: res.data })
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    // useEffect(() => {
    //     submitHandler()
    // }, [])


    return (
        <div>
            <form onSubmit={submitHandler}>
                Nome
                <input label='Nome' type='text' name='name' onChange={changeHandler} />
                Valor Inicial
                <input label='Valor Inicial' type='number' name='value' onChange={changeHandler} />
                Valor de Arremate
                <input label='Valor de Arremate' type='number' name='capValue' onChange={changeHandler} />
                Descrição
                <input label='Descrição' type='textarea' name='description' onChange={changeHandler} />
                Imagem
                <input label='Imagem' type='file' name='image' onChange={imageHandler} />
                <button type='submit'>Cadastrar</button>
            </form>
        </div>

    )
}

export default FormAuctionF;