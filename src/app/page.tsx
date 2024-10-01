// import CreateAccount from "@/app/(auth)/createaccount/page";
import React from "react";
import Product from "@/components/product/productList/Productlist"
import Category from "@/components/product/category/Category";
import Unit from "@/components/product/units/Unit";
import Staff from "@/components/staff/Staff";
const page = () => {
  return (
    <div>
      <Unit/>
      <Category/>
      <Product/>
      <Staff/>
    </div>
  );
};

export default page;
