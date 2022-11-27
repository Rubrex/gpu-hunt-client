import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Table } from "flowbite-react";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const AllSellers = () => {
  const {
    data: allSellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const allsellersUrl = import.meta.env.VITE_API + "/users/sellers";
      const res = await axios.get(allsellersUrl);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  // handle verify
  const handleVerify = (email) => {
    const verifyUrl = import.meta.env.VITE_API + "/users/sellers/" + email;
    axios.put(verifyUrl).then((response) => {
      if (response.data.matchedCount) {
        console.log(response.data);
        refetch();
      }
    });
  };
  // handle delete
  const handleDelete = (email) => {
    const deleteUrl = import.meta.env.VITE_API + "/users/sellers/" + email;
    axios.delete(deleteUrl).then((response) => {
      if (response.data.deletedCount) {
        console.log(response.data);
        refetch();
      }
    });
  };

  return (
    <div className="p-2 md:p-5">
      <h2 className="text-xl  mb-10 pl-2 border-l-4 border-primary ">
        Sellers List
      </h2>

      {/* Table */}
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>
            <span className="sr-only">Index</span>
          </Table.HeadCell>
          <Table.HeadCell>Seller name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Verify</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allSellers.map((seller, index) => {
            return (
              <Table.Row
                key={seller._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>
                  <div
                    className="delete-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        )
                      )
                        this.onCancel(item);
                    }}
                  />
                  {++index}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {seller.name}
                </Table.Cell>
                <Table.Cell>{seller.email}</Table.Cell>

                <Table.Cell>
                  {seller.verified ? (
                    <PrimaryButton
                      disabled
                      className="bg-gray-400 active:bg-gray-400"
                    >
                      Verified
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton
                      onClick={() => handleVerify(seller.email)}
                      className="bg-blue-400 active:bg-blue-500 ring-blue-400"
                    >
                      Verify
                    </PrimaryButton>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <PrimaryButton onClick={() => handleDelete(seller.email)}>
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

export default AllSellers;
