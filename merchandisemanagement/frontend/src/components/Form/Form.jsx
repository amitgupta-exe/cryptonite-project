import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createProduct, updateProduct } from '../../actions/products';

const Form = ({ currentId, setCurrentId }) => {

    const [productData, setProductData] = useState({ title: '', description: '', price: '', image: '', inCartQuantity: 0 });
    const product = useSelector((state) => (currentId ? state.products.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();


    useEffect(() => {
        if (product) setProductData(product);
    }, [product]);

    const clear = () => {
        setCurrentId(0);
        setProductData({ title: '', description: '', price: '', image: '', inCartQuantity: 0 });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createProduct(productData));
            clear();
        } else {
            dispatch(updateProduct(currentId, productData));
            clear();
        }
    };

    return (
        <main>
            <form style={{ width: "30vw" }} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <p> {currentId ? `Editing "${product.title}"` : 'Add a Product'} </p>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input className='form-control' value={productData.title} placeholder='title' type="text" name="title" id="" onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input className='form-control' value={productData.description} placeholder='description' type="text" name="description" id="" onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input className='form-control' value={productData.price} placeholder='price' type="text" name="price" id="" onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
                </div>

                <div><FileBase className="form-control" type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, image: base64 })} /></div>

                {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={productData.creator} onChange={(e) => setProductData({ ...productData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={productData.message} onChange={(e) => setProductData({ ...productData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={productData.tags} onChange={(e) => setProductData({ ...productData, tags: e.target.value.split(',') })} /> */}

                <button className='btn btn-primary' type="submit">Submit</button>
                <button className='btn btn-secondary' onClick={clear}>Clear</button>
            </form>
        </main>
    );
};

export default Form;
