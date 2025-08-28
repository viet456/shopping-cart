import styles from './itemCard.module.css';

export function ItemCard({ itemTitle, itemPrice }) {
    return (
        <div className={styles.shopItem}>
            <h3>{itemTitle}</h3>
            <p>${itemPrice}</p>
        </div>
    )
}