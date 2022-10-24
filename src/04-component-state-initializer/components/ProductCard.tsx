import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductContextProps,
} from '../interfaces/interfaces'

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  // children?: React.ReactElement | React.ReactElement[]
  children: (mensaje: string) => JSX.Element
  className?: string
  initialValues?: InitialValues
  onChange?: (args: onChangeArgs) => void
  product: Product
  style?: React.CSSProperties
  value?: number
}

export const ProductCard = ({
  children,
  className,
  initialValues,
  onChange,
  product,
  style,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  })

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children('hola mundo')}
      </div>
    </Provider>
  )
}
