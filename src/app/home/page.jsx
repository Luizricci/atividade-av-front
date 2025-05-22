import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import { Button } from "antd";

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.imageContainer}>
                <Image
                    src="/image/minhaFoto.jpg"
                    alt="avaliação"
                    width={500}
                    height={500}
                    className={styles.image}
                />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.textContent}>
                    <h2>Luiz Henrique Ricci Aureliano</h2>
                <h3>Mercado</h3>
                <p className={styles.text}>Turma:1TDS1</p>
                <p className={styles.text}>Nome dos Instrutores: Thiago e Marcelo</p>
                <p className={styles.text}>Materia: Front-End 1</p>
                <p className={styles.text}>explicação da API: Esta API foi desenvolvida para gerenciar os informações de mercados com fornecedores e Produtos para melhor gestão do negocio</p>
                </div>
                <Button className={styles.button} type="primary">
                    <Link href="/products">
                        <p >Ver Produtos</p>
                    </Link>
                </Button>
            </div>
            
        </div>
    </div>
  )
}