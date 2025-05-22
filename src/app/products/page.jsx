"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Modal, Card, Skeleton } from "antd";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./product.module.css";
import Header from "../../components/Header";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Products() {
    const [produtos, setProdutos] = useState({
        produtos: [],
        loading: true,
        current: 1,
        pageSize: 10,
    });
    const [modalInfo, setModalInfo] = useState({
        visible: false,
        produto: null,
        loading: false,
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/produtos`,{
                    headers: HEADERS,
                });
                setProdutos({
                    produtos: data,
                    loading: false,
                    current: 1,
                    pageSize: 10,
                });
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const openModal = (produto) => {
        setModalInfo({visible: true, produto, loading: false});
    }

    const paginatedItens = () => {
        const start = (produtos.current - 1) * produtos.pageSize;
        return produtos.produtos.slice(start, start + produtos.pageSize);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.pagination}>
            <Pagination
                current={produtos.current}
                pageSize={produtos.pageSize}
                total={produtos.produtos.length}
                onChange={(page, size) =>
                    setProdutos((d) => ({ ...d, current: page, pageSize: size }))
                }
                showSizeChanger
                pageSizeOptions={["5", "10", "100"]}
            />
            </div>

            {produtos.loading ? (
                <div className={styles.loadingContainer}>
                    <Image
                        alt="Loading"
                        src="/image/loader.gif"
                        width={100}
                        height={100}
                        className={styles.loadingImage}
                    />
                </div>
            ) : (
                <div className={styles.cardsContainer}>
                {paginatedItens().map((produto) => (
                    <Card
                        key={produto.id}
                        className={styles.card}
                        hoverable
                        onClick={() => openModal(produto)}
                        cover={
                            <Image
                                alt={produto.nome || "Produto"}
                                src={produto.foto ? produto.foto : "/image/220.svg"}
                                width={220}
                                height={220}
                            />
                        }
                    >
                        <p>Produto: {produto.name}</p>
                        <p>Validade: {produto.validade}</p>
                    </Card>
                    ))}
                </div>
            )}

            
            <Modal
                open={modalInfo.visible}
                onCancel={() => setModalInfo({ ...modalInfo, visible: false })}
                footer={null}
            >

                


                {modalInfo.produto ? (
                    <div className={styles.modalContent}>
                        <h2>{modalInfo.produto.name}</h2>
                        <p>{modalInfo.produto.validade}</p>
                        <p>{modalInfo.produto.fornecedor_name}</p>
                    </div>
                    
                ) : (
                    <Skeleton active /> 
                )}
            </Modal>
            <ToastContainer />
        </div>
    );
}