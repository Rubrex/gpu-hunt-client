import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Table } from "flowbite-react";
import React from "react";
import Swal from "sweetalert2";
import Loading from "../../Shared/Loading/Loading";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const AllBuyers = () => {
  const {
    data: allBuyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: async () => {
      const allBuyerUrl = import.meta.env.VITE_API + "/users/buyers";
      const res = await axios.get(allBuyerUrl);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  // handle delete
  const handleDelete = (email) => {
    // works the same for buyers/users role
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
        const deleteUrl = import.meta.env.VITE_API + "/users/sellers/" + email;
        axios.delete(deleteUrl).then((response) => {
          if (response.data.deletedCount) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="p-2 md:p-5">
      <h2 className="text-xl  mb-10 pl-2 border-l-4 border-primary ">
        Buyers List
      </h2>

      {/* Table */}
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>
            <span className="sr-only">Index</span>
          </Table.HeadCell>
          <Table.HeadCell>Buyer name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allBuyers.map((buyer, index) => {
            return (
              <Table.Row
                key={buyer._id}
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
                  {buyer.name}
                </Table.Cell>
                <Table.Cell>{buyer.email}</Table.Cell>
                <Table.Cell>
                  <PrimaryButton onClick={() => handleDelete(buyer.email)}>
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

export default AllBuyers;
