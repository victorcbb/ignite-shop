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
    margin: "0 auto 1.5rem",
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

export const ImagesContainer = styled("section", {
  display: "flex",
  alignItems: "center",
  marginBottom: "3rem",

  "div + div": {
    marginLeft: "-3.25rem"
  }
})

export const ImageContainer = styled("div", {
  Width: "8.75rem",
  height: "8.75rem",

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  boxShadow: "-4px 0px 16px rgba(0, 0, 0, 0.8)",
  borderRadius: "50%",
  
  padding: "0.75rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",

  img: {
    objectFit: "cover",
  }
})