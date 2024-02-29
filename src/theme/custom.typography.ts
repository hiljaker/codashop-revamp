import { TypographyOptions } from "@mui/material/styles/createTypography";
import { CSSProperties } from "react";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    kode64: true;
    kode52: true;
    kode48: true;
    kode32: true;
    work24: true;
    work20: true;
    work18: true;
    work16: true;
    work14: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    kode64: CSSProperties;
    kode52: CSSProperties;
    kode48: CSSProperties;
    kode32: CSSProperties;
    work24: CSSProperties;
    work20: CSSProperties;
    work18: CSSProperties;
    work16: CSSProperties;
    work14: CSSProperties;
  }

  interface TypographyVariantsOptions {
    kode64: CSSProperties;
    kode52: CSSProperties;
    kode48: CSSProperties;
    kode32: CSSProperties;
    work24: CSSProperties;
    work20: CSSProperties;
    work18: CSSProperties;
    work16: CSSProperties;
    work14: CSSProperties;
  }
}

export const customTypography: TypographyOptions = {
  fontFamily: "Work Sans, sans-serif",
  kode64: {
    fontFamily: "Kode Mono, monospace",
    fontSize: "64px",
    fontWeight: 700,
  },
  kode52: {
    fontFamily: "Kode Mono, monospace",
    fontSize: "52px",
    fontWeight: 700,
  },
  kode48: {
    fontFamily: "Kode Mono, monospace",
    fontSize: "48px",
    fontWeight: 700,
  },
  kode32: {
    fontFamily: "Kode Mono, monospace",
    fontSize: "32px",
    fontWeight: 500,
  },
  work24: {
    fontSize: "24px",
  },
  work20: {
    fontSize: "20px",
  },
  work18: {
    fontSize: "18px",
  },
  work16: {
    fontSize: "16px",
  },
  work14: {
    fontSize: "14px",
  },
};
