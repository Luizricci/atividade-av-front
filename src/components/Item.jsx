"use client";

import styles from '../styles/item.module.css';
import Image from "next/image";
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Item() {
    //const [image, setImage] = useState("");
    const [name, setName] = useState([]);
    const [validade, setValidade] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3030/api/produtos', {
                    headers: {
                        'x-api-key': '8mQUXXwIIoRuo010Bq9X6iLLXZ51qAbfouryq6dN',
                    }
                });
                const data = response.data;
                //setImage(data.image);
                setName(data.name);
                setValidade(data.validade);
                console.log(data);
            } catch (error) {
                console.error("Erro ao retornar dados:", error);
                
            }
            
        };
        fetchData();
    }, []);
    return (
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    {/* <Image
                        src={image}
                        alt="avaliação"
                        width={300}
                        height={300}
                        className={styles.image}
                    /> */}
                    <div className={styles.textContainer}>
                        <h5>name: {name}</h5>
                        <h5>validade: {validade}</h5>
                    </div>
                </div>
            </div>
    )
}