import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components'
import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'
import { useState } from 'react'

const product1 = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png',
}

const product2 = {
  id: '2',
  title: 'Coffe Mug - Meme',
  img: './coffee-mug2.png',
}

const products: Product[] = [product1, product2]

interface ProductInCart extends Product {
  count: number
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number
    product: Product
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart

        return rest
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      }
    })
  }

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {/* <ProductCard product={product1} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product1} className="bg-dark text-white">
          <ProductImage
            className="custom-image"
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
            }}
          />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product1}
          style={{
            backgroundColor: '#70D1F8',
          }}
        >
          <ProductImage
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
            }}
          />
          <ProductTitle
            style={{
              fontWeight: 'bold',
            }}
          />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          />
        </ProductCard> */}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
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
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{
              width: '100px',
            }}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
              }}
            />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
