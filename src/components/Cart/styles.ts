import * as Dialog from "@radix-ui/react-dialog"

import { styled } from "../../styles"

export const CartContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,

  width: "30rem",
  padding: "3rem",
  paddingTop: "4.5rem",
  
  background: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  
  display: "flex",
  flexDirection: "column",

  h2: {
    fontWeight: "bold",
    fontSize: "$lg",
    color: "$gray100",

    marginBottom: "2rem"
  },

  "> section": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    flex: 1,
    overflowY: "auto"
  },
})

export const CartClose = styled(Dialog.Close, {
  background: "none",
  border: "none",

  color: "$gray500",
  
  position: "absolute",
  top: "1.75rem",
  right: "1.75rem",

  cursor: "pointer"
})

export const CartProduct = styled("div", {
  widht: "100%",
  height: "5.875rem",

  display: "flex",
  gap: "1.25rem",
  alignItems: "center",
})

export const CartProductImage = styled("div", {
  width: "6.3125rem",
  height: "5.875rem",

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover"
  },
})

export const CartProductDetails = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "column",

  p: {
    color: "$gray300",
    fontSize: "1.125rem",
    lineHeight: "1.6",
  },

  strong: {
    marginTop: "0.125rem",
    fontSize: "1.125rem",
    lineHeight: "1.6",
    fontWeight: "bold",
  },

  button: {
    width: "max-content",
    
    marginTop: "auto",
    background: "none",
    border: "none",

    color: "$green500",
    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.6",

    cursor: "pointer",
  },
})

export const CartFinalization = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "auto",

  button: {
    width: "100%",
    height: "4.3125rem",

    background: "$green500",
    border: "none",
    borderRadius: 8,
    
    color: "$white",
    fontSize: "1.125rem",
    fontWeight: 700,

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed"
    },

    "&:not(:disabled):hover": {
      background: "$green300",
    },
  }
})

export const FinalizationDetails = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  marginBottom: 55,

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    p: {
      fontSize: "$md",
      color: "$gray300",
    },

    "&:last-child": {
      fontWeight: "bold",

      span: {
        fontSize: "$md",
      },

      p: {
        color: "$gray300",
        fontSize: "$xl",
      }
    }
  }
})