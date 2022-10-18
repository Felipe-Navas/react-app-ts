import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components'
import { products } from '../data/products'
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
      >
        <ProductImage
          className="custom-image"
          style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
          }}
        />
        <ProductTitle className="text-bold" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>
    </div>
  )
}