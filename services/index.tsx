import { api_endpoint } from "@/constants";
import { gql, GraphQLClient, request } from "graphql-request";

const qraphQLClient = new GraphQLClient(api_endpoint);

export const bannerSection = async () => {
  const query = gql`
    query MyQuery {
      product {
        compareAtPrice
        description
        id
        isFeatured
        name
        price
        publishedAt
        shortdescription
        statu
      }
    }
  `;
  const result = await qraphQLClient.request(query);
  return result;
};

type Product = {
  compareAtPrice: number;
  description: string;
  id: string;
  isFeatured: boolean;
  name: string;
  price: number;
  publishedAt: string;
  shortdescription: string;
  status: string;
  image: { url: string }[];
}[];

export const getSingleProduct = async (id: string): Promise<Product> => {
  const query = gql`
    query MyQuery($id: ID!) {
      product(where: { id: $id }) {
        compareAtPrice
        description
        id
        isFeatured
        name
        price
        publishedAt
        shortdescription
        statu
        image {
          url
        }
      }
    }
  `;
  const variables = { id };
  const result = await qraphQLClient.request<{ product: Product }>(
    query,
    variables
  );
  return result.product;
};

