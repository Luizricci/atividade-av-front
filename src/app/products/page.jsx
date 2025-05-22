import styles from './product.module.css';
import Item from '../../components/Item';



export default function Products() {
    return (
        <div className={styles.container}>
            <Item />
            <Item />
        </div>
    )
}