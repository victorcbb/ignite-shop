import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: "41rem"
})

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "0.5rem",
  padding: "0.25rem",
  position: "relative",
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  cursor: "pointer",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    right: "0.25rem",
    left: "0.25rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "2rem",
    borderRadius: "0.375rem",
    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100"
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    }
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1
    }
  }
})