/**
 * RPC endpoint to retrieve on-chain data from.
 *
 * Can be retrieved from https://polkachu.com/public_rpc or https://chain-registry.netlify.app/
 */
export const RPC_URL = "https://rpc-neutron.whispernode.com";

/**
 * Address of liquidity pool.
 *
 * Currently only supports Terraswap style pools (Astroport, White Whale, etc.)
 *
 */
export const POOL_ADDRESS =
  "neutron1epg2h5cnz9m677xe82r2zqdrj90u2th6spadm09mezcfwcxq9zwschacrj";

/**
 * Address of token to display price of.
 */
export const TOKEN_ADDRESS =
  "factory/neutron1lg8nydf8nagrrp2f72y5mk9newv2gs6a3mm3cn/GAY";

/**
 * Type of token, either "native" or "cw20"
 */
export const TOKEN_TYPE: "native" | "cw20" = "native";

/**
 * Decimals used to format token amounts.
 */
export const TOKEN_DECIMALS = 6;

/**
 * Symbol used to display token amounts.
 */
export const TOKEN_SYMBOL = "GAY";

/**
 * Coingecko ID of the other token in the pair, used
 * to derive the USD price of the main token.
 *
 * Labeled as "API ID" a Coingecko coin page. For example
 * on https://www.coingecko.com/en/coins/neutron you can
 * see the API ID is "neutron-3".
 */
export const BASE_TOKEN_COINGECKO_ID = "neutron-3";

/**
 * Decimals used to format base token amounts.
 */
export const BASE_TOKEN_DECIMALS = 6;

/**
 * URL to direct users to buy the token.
 */
export const SWAP_LINK =
  "https://app.astroport.fi/swap?from=untrn&to=factory/neutron1lg8nydf8nagrrp2f72y5mk9newv2gs6a3mm3cn/GAY";

/**
 * Accent color used throughout the app.
 *
 * Corresponds to a Tailwind color, see https://tailwindcss.com/docs/customizing-colors#color-palette-reference
 */
export const THEME_COLOR = "red";
