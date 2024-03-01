import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { Product } from "@src/types/product";
import Image from "@src/components/Image";
import { OfflineBoltOutlined, ShieldOutlined } from "@mui/icons-material";
import Link from "next/link";

interface StickyInfoProps {
  product: Product;
}

const Card = styled(Stack)(({ theme }) => ({
  width: "400px",
  backgroundColor: theme.palette.lightPurpleBrand.main,
  padding: "12px",
  borderRadius: "8px",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    backgroundColor: "transparent",
    padding: 0,
    borderRadius: 0,
  },
}));

const Markdown = styled("div")(({ theme }) => ({
  color: "white",

  p: {
    "&:not(:first-child)": { marginTop: "16px" },
    fontWeight: "light",
    ...theme.typography.work14,
  },

  a: { color: theme.palette.pinkBrand.main },
}));

const StickyInfo: FC<StickyInfoProps> = ({ product }) => {
  return (
    <Card spacing={2}>
      <Image
        src={product.banner}
        alt={product.name}
        sx={{ width: "100%", borderRadius: "4px" }}
      />

      <Typography typography="work18" color="white" fontWeight={600}>
        {product.fullname || product.name}
      </Typography>

      <Stack direction="row" spacing={1}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          color="white"
          bgcolor="purpleBrand.main"
          p="4px 8px"
          borderRadius="16px"
        >
          <OfflineBoltOutlined />{" "}
          <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
            Instant Delivery
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          color="white"
          bgcolor="purpleBrand.main"
          p="4px 8px"
          borderRadius="16px"
        >
          <ShieldOutlined />{" "}
          <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
            Official Distributor
          </Typography>
        </Stack>
      </Stack>

      <Markdown
        dangerouslySetInnerHTML={{ __html: product.description || "" }}
      />

      <Stack spacing={1}>
        <Typography color="white" typography="work14">
          Download & play{product.fullname || product.name} today!
        </Typography>

        <Stack direction="row" spacing={1}>
          {product.appstore && (
            <Link href={product.appstore}>
              <Image
                src="/static/appstore.png"
                alt="app-store"
                sx={{ width: "100px" }}
              />
            </Link>
          )}

          {product.playstore && (
            <Link href={product.playstore}>
              <Image
                src="/static/playstore.png"
                alt="play-store"
                sx={{ width: "100px" }}
              />
            </Link>
          )}
        </Stack>
      </Stack>
    </Card>
  );
};

export default StickyInfo;
