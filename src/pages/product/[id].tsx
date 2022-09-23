import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import Image from "next/future/image"
import { useState } from "react"
import Stripe from "stripe"
import axios from "axios"

import { IProduct } from "../../context/CartContext"
import { stripe } from "../../lib/stripe"
import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from "../../styles/pages/product"
import Head from "next/head"
import { useCart } from "../../hook/useCart"

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  const { addToCart, checkIfItemAlreadyExists } = useCart()

  if (isFallback) {
    return <p>Loading...</p>
  }

  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            disabled={itemAlreadyInCart}
          >
            {itemAlreadyInCart 
              ? "Produto já está no carrinho"
              : "Colocar na sacola"
            }
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "prod_MP0gvwsDSWEpwW" } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params 
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: "currency",
          currency: "BRL"
        }).format(price.unit_amount / 100),
        numberPrice: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 // 1 hour
  }
}
