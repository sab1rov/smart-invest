import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../utils/utils";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import CatalogItemFilter from "../../components/CatalogItemFilter";

const CatalogItem = () => {
  const { query } = useRouter();

  const data = useSWR(
    () =>
      query.slug && `https://smart-api-v2.main-gate.appx.uz/room/${query.slug}`,
    fetcher
  );
  return (
    <>
      <Header />
      <CatalogItemFilter />
      <Footer />
    </>
  );
};

export default CatalogItem;
