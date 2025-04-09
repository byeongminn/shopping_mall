import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const form = style([f.flex, f.directionColumn, f.wFull]);

export const emailInput = style([
  {
    padding: "12px 16px",
    border: "1px solid #DBDBDB",
    borderRadius: "4px 4px 0 0",
    fontSize: "15px",
  },
  {
    selectors: {
      "&::placeholder": {
        color: "#BDBDBD",
      },
    },
  },
]);

export const passwordInput = style([
  {
    marginTop: "-1px",
    padding: "12px 16px",
    border: "1px solid #DBDBDB",
    borderRadius: "0 0 4px 4px",
    fontSize: "15px",
  },
  {
    selectors: {
      "&::placeholder": {
        color: "#BDBDBD",
      },
    },
  },
]);

export const button = style([
  {
    marginTop: "20px",
    padding: "15px 10px",
    backgroundColor: "#35c5f0",
    border: "1px solid transparent",
    borderRadius: "4px",
    fontWeight: 700,
    fontSize: "16px",
    color: "#ffffff",
    cursor: "pointer",
    transition: "all 0.1s",
  },
  {
    selectors: {
      "&:hover": {
        backgroundColor: "#09ADDB",
      },
    },
  },
]);
