import React, { FC } from "react";
import Section from "../components/Section";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Price } from "@src/types/product";

interface BuyProps {
  selectedPrice: number | null;
  prices: Price[];
}

const TextInput = styled(TextField)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "100px",

  "& .MuiOutlinedInput-root": {
    paddingRight: 0,
    borderRadius: "100px",

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.pinkBrand.main,
    },

    button: {
      margin: "8px",
    },
  },
}));

const Markdown = styled("div")(({ theme }) => ({
  color: "white",
  a: { color: theme.palette.pinkBrand.main },
  [theme.breakpoints.down("md")]: {
    ...theme.typography.work14,
  },
}));

const Buy: FC<BuyProps> = ({ selectedPrice, prices }) => {
  const userSelectedPrice = prices.find((price) => price.id === selectedPrice);

  return (
    <Section number={2} name="Buy!">
      <Stack spacing={1} mb={2}>
        <Typography color="white">
          OPTIONAL: If you would like a receipt of the purchase by email, please
          enter an email address
        </Typography>

        <TextInput size="small" fullWidth placeholder="E-mail Address" />

        <FormGroup>
          <FormControlLabel
            sx={{
              color: "white",
              span: { fontSize: "14px" },
              svg: { color: "pinkBrand.main" },
            }}
            control={<Checkbox />}
            label="Yes, send me emails with exclusive Codashop news and promotions."
          />
          <FormControlLabel
            sx={{
              color: "white",
              span: { fontSize: "14px" },
              svg: { color: "pinkBrand.main" },
            }}
            control={<Checkbox />}
            label="Yes, I would like to receive news and promotions via SMS."
          />
        </FormGroup>

        <Typography typography="work20" color="white" fontWeight={600}>
          Terms & Conditions
        </Typography>
        <FormGroup>
          <FormControlLabel
            sx={{
              color: "white",
              span: { fontSize: "14px" },
              svg: { color: "pinkBrand.main" },
            }}
            control={<Checkbox />}
            label={
              <Markdown
                dangerouslySetInnerHTML={{
                  __html:
                    '<p>By clicking &ldquo;Buy Now&rdquo;,<br />(i) I acknowledge that I have read, understand and agree to Codashop&#39;s&nbsp;<a href="https://www.codapayments.com/terms-conditions/terms-conditions-canada" rel="noopener" target="_blank">Terms and Conditions</a>&nbsp;and&nbsp;<a href="https://www.codapayments.com/privacy-policy/privacy-notice-canada" rel="noopener" target="_blank">Privacy Notice</a>, and<br />(ii) I understand that all sales are final and non-refundable</p>',
                }}
              />
            }
          />
        </FormGroup>
      </Stack>

      <Stack bgcolor="pinkBrand.main" borderRadius="8px" p={2}>
        <Typography fontSize="14px" color="white">
          {userSelectedPrice?.subtitle
            ? userSelectedPrice?.subtitle.replace(/[\(\)]/g, "")
            : userSelectedPrice?.title}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {userSelectedPrice && userSelectedPrice.price && (
            <Typography typography="work20" fontWeight={600} color="white">
              C$
              {userSelectedPrice.discount
                ? (
                    userSelectedPrice.price -
                    (userSelectedPrice.discount / 100) * userSelectedPrice.price
                  ).toFixed(2)
                : userSelectedPrice.price}
            </Typography>
          )}

          <Box ml="auto">
            <Button
              size="small"
              sx={{
                bgcolor: "purpleBrand.main",
                borderRadius: "16px",
                p: "4px 12px",
                color: "white",
                textTransform: "capitalize",

                "&:hover": {
                  bgcolor: "lightPurpleBrand.main",
                },
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Section>
  );
};

export default Buy;
