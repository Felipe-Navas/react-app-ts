import styles from '../styles/styles.module.css'

export const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="Coffe Mug"
      />
    </div>
  )
}
