import { useNavigate } from 'react-router-dom'

import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { set, ref as dbRef } from 'firebase/database';
import { storage, db } from '../firebase'; 
import { v4 as uuidv4 } from 'uuid';

const Coupon = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const fiCheck = (f) => {
        if (f === undefined) {
            return 70
        }
        return f
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Stockage de l'image sur Firebase Storage
        const storageRef = ref(storage, 'coupons/' + formData.coupon.name);
        await uploadBytes(storageRef, formData.coupon).then(snapshot => {
            console.log('Image téléchargée avec succès !');
        });

        // Récupération de l'URL de l'image
        const imageUrl = await getDownloadURL(storageRef);
        const id = uuidv4()
        // Stockage des données dans Firebase Database
        const couponData = {
            id: id,
            cote: formData.cote,
            code: formData.code,
            fiabilite: fiCheck(formData.fiabilite),
            image: imageUrl,
            statut:'en attente'
        };
        const newCouponRef = dbRef(db, `coupons/${id}`);
        set(newCouponRef, couponData);
    };

    return (
        <>
            <div className="boxer">
                <div className="container">
                    <div className='card1'>

                        <form encType='multipart-form' onSubmit={handleSubmit}>
                            <input
                                onChange={(e) => setFormData({ ...formData, coupon: e.target.files[0] })}
                                id="coupon"
                                name="coupon"
                                type="file"
                                className="form-control"
                                required
                            />
                            <label for="cote">Cote</label>
                            <input
                                onChange={handleInputChange}
                                id="cote"
                                name="cote"
                                type="number"
                                className="form-control"
                                required
                                placeholder="2.0"
                            />
                            <label for="code">Code</label>
                            <input
                                onChange={handleInputChange}
                                id="code"
                                name="code"
                                type="text"
                                className="form-control"
                                required
                                placeholder="AKM1256"
                            />
                            <label for="fiabilite">Fiabilite (10)</label>
                            <input
                                onChange={handleInputChange}
                                id="fiabilite"
                                name="fiabilite"
                                type="range"
                                min={0}
                                defaultValue={70}
                                max={100}
                                step={10}
                                required
                            />
                            <div class="buttons">
                                <button type="submit" className="login-button" >Valider</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Coupon