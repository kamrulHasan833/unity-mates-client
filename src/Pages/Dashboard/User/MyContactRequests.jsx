import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import LoadingSpiner from "../../../Components/Shared/LoadingSpiner";
import Nodata from "../../../Components/Shared/Nodata";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import Title from "../../../Components/Shared/Title";
import useAlert from "../../../hooks/useAlert";
import useAuth from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
const MyContactRequests = () => {
  const { user } = useAuth();
  const email = user?.email;
  const alert = useAlert();
  const axiosPrivate = useAxiosPrivate();
  const {
    data: requests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-requests-of-a-user"],
    enabled: email ? true : false,
    queryFn: async () => {
      const res = await axiosPrivate.get(
        `/unity-mates/v1/requests/user?email=${email}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [email, refetch]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To delete contact request, click yes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2B2A4C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate
          .delete(`unity-mates/v1/requests?id=${id}`)

          .then((res) => {
            const isSuccess = res?.data?.deletedCount > 0;
            if (isSuccess) {
              refetch();
              alert(`Request deleted successfully!`, "success");
            }
          })
          .catch((err) => {
            if (err) {
              alert("Request deletation failed!", "error");
            }
          });
      }
    });
  };
  return (
    <section>
      <Title title="My Contact Requests" />
      <SectionWrapperSmall>
        <SectionHeader title="my contact requests" />
        {isLoading ? (
          <LoadingSpiner />
        ) : !isLoading && !requests.length ? (
          <Nodata />
        ) : (
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell></Table.HeadCell>
                <Table.HeadCell>name</Table.HeadCell>
                <Table.HeadCell>biodata id</Table.HeadCell>
                <Table.HeadCell>status</Table.HeadCell>
                <Table.HeadCell>mobile No</Table.HeadCell>
                <Table.HeadCell>email</Table.HeadCell>
                <Table.HeadCell>action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {requests.map(
                  (
                    { name, biodata_id, status, mobile_no, email, _id },
                    idx
                  ) => (
                    <Table.Row
                      key={_id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell>{idx + 1}</Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white capitalize">
                        {name}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        <span>{biodata_id}</span>
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        <span className="capitalize">{status}</span>{" "}
                      </Table.Cell>
                      <Table.Cell>
                        {status === "approved" ? mobile_no : "N/A"}
                      </Table.Cell>
                      <Table.Cell>
                        {status === "approved" ? email : "N/A"}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        <button
                          onClick={() => handleDelete(_id)}
                          className="bg-primary-color text-white hover:bg-secondary-color rounded-sm  px-3 py-1 capitalize min-w-[120px]"
                        >
                          delete
                        </button>
                      </Table.Cell>
                    </Table.Row>
                  )
                )}
              </Table.Body>
            </Table>
          </div>
        )}
      </SectionWrapperSmall>
    </section>
  );
};

export default MyContactRequests;
