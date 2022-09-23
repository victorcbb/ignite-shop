import { NextApiRequest, NextApiResponse } from "next"
import { IProduct } from "../../context/CartContext"
import { stripe } from "../../lib/stripe"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: IProduct[] }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." })
  }

  if (!products) {
    res.status(400).json({ error: "Products not found." })
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${process.env.NEXT_URL}/`

  const chekoutSession = await stripe.checkout.sessions.create({
    success_url: success_url,
    cancel_url: cancel_url,
    mode: 'payment',
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    }))
  })

  return res.status(201).json({
    checkoutUrl: chekoutSession.url,
  })
}
