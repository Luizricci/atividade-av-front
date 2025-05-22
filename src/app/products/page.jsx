"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Modal, Card, Skeleton } from "antd";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./product.module.css";
import Header from "../../components/Header";


export default function Products() {
    const [produtos, setProdutos] = useState({
        produtos: [],
        loading: true,
        current: 1,
        pageSize: 0,
    });
    const [modalInfo, setModalInfo] = useState({
        visible: false,
        produto: null,
        loading: false,
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const {data: produtos} = await axios.get("http://localhost:3030/api/produtos",{
                    headers: {
                        "x-api-key": "8mQUXXwIIoRuo010Bq9X6iLLXZ51qAbfouryq6dN"
                    }
                });
                setProdutos({
                    produtos,
                    loading: false,
                    current: 1,
                    pageSize: 10,
                });
                console.log(produtos);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className={styles.container}>
            <Header />
        </div>
    );
}