import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import useAlert from "../../../hooks/useAlert";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
const ApproveCotactRequests = () => {
  const alert = useAlert();
  const axiosPrivate = useAxiosPrivate();
  const {
    data: requests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-requests"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/unity-mates/v1/requests");
      return res.data;
    },
  });

  const handleApproved = async (_id) => {
    try {
      const res = await axiosPrivate.put(`unity-mates/v1/requests?id=${_id}`);
      const isSuccess = res?.data?.modifiedCount > 0;
      if (isSuccess) {
        refetch();
        alert(` Contact Request approved  successfully!`, "success");
      }
    } catch (err) {
      if (err) {
        alert("Contact request approval failed!", "err");
      }
    }
  };
  return (
    <section>
      <SectionWrapperSmall>
        <SectionHeader title="Approve Contact request" />

        {/* table */}
        {isLoading ? (
          <p>loading..</p>
        ) : !isLoading && !requests.length ? (
          <p>no rquests</p>
        ) : (
          <div className="overflow-x-auto">
            <Table striped>
              <Table.Head>
                <Table.HeadCell>
                  {" "}
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
                <Table.HeadCell> name</Table.HeadCell>
                <Table.HeadCell>email</Table.HeadCell>
                <Table.HeadCell>biodata id</Table.HeadCell>
                <Table.HeadCell>contact request</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {requests.map(
                  ({ email, name, biodata_id, _id, status }, idx) => (
                    <Table.Row
                      key={_id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell>{idx + 1}</Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {name}
                      </Table.Cell>

                      <Table.Cell>{email}</Table.Cell>
                      <Table.Cell>{biodata_id}</Table.Cell>
                      <Table.Cell>
                        {" "}
                        {status == "approved" ? (
                          <span className=" px-3 py-1">Approved</span>
                        ) : (
                          <button
                            onClick={() => handleApproved(_id)}
                            className="bg-primary-color text-white hover:bg-secondary-color rounded-sm  px-3 py-1 capitalize"
                          >
                            approve
                          </button>
                        )}
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

export default ApproveCotactRequests;
