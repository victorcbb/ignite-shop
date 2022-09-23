import { MouseEvent, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { GetStaticProps } from "next"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import Stripe from "stripe"

import { HomeContainer, Product, SliderContainer } from "../styles/pages/home"
import { ProductSkeleton } from "../components/ProductSkeleton"
import { CartButton } from "../components/CartButton"
import { IProduct } from "../context/CartContext"
import { useCart } from "../hook/useCart"
import { stripe } from "../lib/stripe"

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoading(false), 1000)

    return () => clearTimeout(timeOut)
  }, [])

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  })

  const { addToCart, checkIfItemAlreadyExists } = useCart()

  function hadleAddCart(e: MouseEvent<HTMLButtonElement>, product: IProduct) {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer>
        <div ref={emblaRef} className="embla">
          <SliderContainer className="embla_container container">
            {
              isLoading ? (
                <>
                  <ProductSkeleton className="embla__slide" />
                  <ProductSkeleton className="embla__slide" />
                  <ProductSkeleton className="embla__slide" />
                </>
              ) : (
                <>
                  {products.map(product => (
                    <Link
                      href={`/product/${product.id}`}
                      key={product.id}
                      prefetch={false}
                      passHref
                    >
                      <Product className="embla__slide">
                        <Image src={product.imageUrl} alt="" width={520} height={480} />
                        <footer>
                          <div>
                            <strong>{product.name}</strong>
                            <span>{product.price}</span>
                          </div>
                          <CartButton
                            size="large"
                            color="green"
                            disabled={checkIfItemAlreadyExists(product.id)}
                            onClick={(e) => hadleAddCart(e, product)}
                          />
                        </footer>
                      </Product>
                    </Link>
                  ))}
                </>
              )
            }
          </SliderContainer>
        </div>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }

}
