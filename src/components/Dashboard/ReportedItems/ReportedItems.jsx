import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Table } from "flowbite-react";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const ReportedItems = () => {
  const {
    data: allReports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const allreports = import.meta.env.VITE_API + "/reports";
      const res = await axios.get(allreports);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  // handle delete
  const handleDelete = (pId) => {
    const deleteUrl = import.meta.env.VITE_API + "/reports/" + pId;

    axios.delete(deleteUrl).then((response) => {
      if (response.data.deletedCount) {
        toast.success("Removed reported product");
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
          <Table.HeadCell>Item</Table.HeadCell>
          <Table.HeadCell>Reported By</Table.HeadCell>
          <Table.HeadCell>Reason</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allReports.map((report, index) => {
            return (
              <Table.Row
                key={report._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{++index}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {report.productName}
                </Table.Cell>
                <Table.Cell>{report.reportedBy}</Table.Cell>

                <Table.Cell>{report.reason}</Table.Cell>
                <Table.Cell>
                  <PrimaryButton onClick={() => handleDelete(report.productId)}>
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

export default ReportedItems;
