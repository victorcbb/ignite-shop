import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",
})

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: "36rem",
  height: "36rem",

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "0.5rem",
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  img: {
    objectFit: "cover",
  }
})

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: "1.6rem",
    color: "$gray300",
  },

  button: {
    backgroundColor: "$green500",
    border: 0,
    borderRadius: "0.5rem",
    
    marginTop: "auto",
    padding: "1.25rem",
    
    color: "$white",
    fontWeight: "bold",
    fontSize: "$md",

    cursor: "pointer",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  
    "&:not(:disabled):hover": {
      backgroundColor: "$green300"
    }
  }
})