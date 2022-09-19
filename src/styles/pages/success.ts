import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "41rem",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    textAlign: "center",
    lineHeight: "1.4rem",

    maxWidth: "36.875rem",
  },

  a: {
    marginTop: "5rem",
    display: "block",

    color: "$green500",
    fontSize: "$lg",
    fontWeight: "bold",
    textDecoration: "none",

    "&:hover": {
      color: "$green300"
    }
  }
})

export const ImageContainer = styled("main", {
  width: "100%",
  maxWidth: "8.125rem",
  height: "9.0625rem",

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  
  padding: "0.25rem",
  marginTop: "4rem",
  marginBottom: "2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  }
})