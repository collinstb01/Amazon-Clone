import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchProductforDetails } from "../features/productSlice/productSlice";
import { useParams } from "react-router-dom";
import SingleDetailPage from "../components/SingleDetailPage/SingleDetailPage";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";

const DetailsPage = () => {
  const { detailsProduct, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const id = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(fetchProductforDetails(id.id));
  }, [dispatch, id.id]);

  console.log(detailsProduct);
  return (
    <div>
      <Navbar />
      {loading ? <Loader /> : <SingleDetailPage {...detailsProduct} />}
      <Footer />
    </div>
  );
};

export default DetailsPage;
