import { styled } from "../../styles"

export const CartButtonContainer = styled("button", {
  padding: "0.75rem",
  backgroundColor: "$gray800",
  borderRadius: ".375rem",
  color: "$gray300",
  border: "none",

  position: "relative",
  cursor: "pointer",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  span: {
    position: "absolute",
    top: -11,
    right: -11,

    width: "1.875rem",
    height: "1.875rem",

    border: "3px solid $gray900",
    borderRadius: 24,
    backgroundColor: "$green500",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "$white",
    fontSize: ".875rem",
    fontWeight: "bold",
  },

  variants: {
    color: {
      gray: {
        background: "$gray800",
        color: "$gray500",
      },
      green: {
        background: "$green500",
        color: "$white",
      
        "&:(:disabled):hover": {
          background: "$green300",
        },
      },
    },
    size: {
      medium: {
        width: "3rem",
        height: "3rem",

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: "3.5rem",
        height: "3.5rem",

        svg: {
          fontSize: 32,
        },
      },
    },
  },

  defaultVariants: {
    color: "gray",
    size: "medium"
  }
})