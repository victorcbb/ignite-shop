import * as Dialog from "@radix-ui/react-dialog"
import { CartButton } from "../CartButton"
import { X } from "phosphor-react"

import {
  CartContent,
  CartClose,
  CartProduct,
  CartProductImage,
  CartProductDetails,
  CartFinalization,
  FinalizationDetails
} from "./styles"
import Image from "next/future/image"
import { useCart } from "../../hook/useCart"
import { useState } from "react"
import axios from "axios"

export function Cart() {
  const { cartItems, removeCartItem, cartTotal } = useCart()
  const cartQuantity = cartItems?.length

  const formattedCartTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(cartTotal)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = 
  useState(false)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post("/api/checkout", {
        products: cartItems
      })

      const { checkoutUrl } = response.data
      console.log(checkoutUrl)
      
      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert("Não foi possível redirecionar para o checkout")
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton quantity={cartQuantity} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>
          <h2>Sacola de compras</h2>

          <section>
          {cartQuantity <= 0 && (
            <p>Parece que seu carrinho está vazio :( </p>
          )}
          
          {cartItems?.map(cartItem => (
            <CartProduct key={cartItem.id}>
              <CartProductImage>
                <Image width={100} height={93} src={cartItem.imageUrl} alt="" />
              </CartProductImage>
              <CartProductDetails>
                <p>{cartItem.name}</p>
                <strong>{cartItem.price}</strong>
                <button 
                  type="button" 
                  onClick={() => removeCartItem(cartItem.id)}
                >
                  Remover
                </button>
              </CartProductDetails>
            </CartProduct>
          ))}
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>{cartQuantity} {cartQuantity == 1 ? "item" : "itens"}</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>{formattedCartTotal}</p>
              </div>
            </FinalizationDetails>
            <button 
              onClick={handleCheckout}
              disabled={ isCreatingCheckoutSession || cartQuantity <= 0}
            >
              Finalizar compra
            </button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}