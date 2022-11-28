import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Table } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: sellerProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellerProducts"],
    queryFn: async () => {
      const url =
        import.meta.env.VITE_API + "/products/myProducts/" + user?.email;
      const response = await axios.get(url);

      return response.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  // Delete Product
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete API
        const deleteUrl = import.meta.env.VITE_API + "/products/" + id;
        axios.delete(deleteUrl).then((response) => {
          if (response.data.deletedCount) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  const handleAdvertise = (id) => {
    const advertiseUrl =
      import.meta.env.VITE_API + "/products/myProducts/" + id;

    axios.put(advertiseUrl).then((response) => {
      if (response.data.modifiedCount) {
        refetch();

        toast.success("Product Advertised successfully");
      }
    });
  };

  return (
    <div className="p-2 md:p-5">
      <h2 className="text-xl  mb-10 pl-2 border-l-4 border-primary ">
        My Product Lists
      </h2>
      {/* Table */}
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>
            <span className="sr-only">Index</span>
          </Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Advertise</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {sellerProducts.map((product) => {
            return (
              <Table.Row
                key={product._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>1</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.productName}
                </Table.Cell>
                <Table.Cell>
                  $
                  <span className="text-lg font-medium">
                    {product.productPrice}
                  </span>
                </Table.Cell>
                <Table.Cell>
                  {product.paid ? (
                    <span className="text-yellow-500 font-medium">Sold</span>
                  ) : (
                    <span className="text-green-500 font-medium">
                      Available
                    </span>
                  )}
                </Table.Cell>
                <Table.Cell>
                  {product.advertised ? (
                    <PrimaryButton
                      disabled
                      className="bg-gray-400 active:bg-gray-400"
                    >
                      Advertised
                    </PrimaryButton>
                  ) : product.paid ? (
                    <PrimaryButton
                      disabled
                      className="bg-gray-400 active:bg-gray-400"
                    >
                      Advertise
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton
                      onClick={() => handleAdvertise(product._id)}
                      className="bg-blue-400 active:bg-blue-500 ring-blue-400"
                    >
                      Advertise
                    </PrimaryButton>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <PrimaryButton onClick={() => handleDelete(product._id)}>
                    X
                  </PrimaryButton>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {/* Table ends */}
    </div>
  );
};

export default MyProducts;
