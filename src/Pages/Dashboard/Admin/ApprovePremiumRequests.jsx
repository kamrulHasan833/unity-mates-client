import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import useAlert from "../../../hooks/useAlert";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
const ApprovePremiumRequests = () => {
  const alert = useAlert();
  const axiosPrivate = useAxiosPrivate();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["premium-reuest"],
    queryFn: async () => {
      const res = await axiosPrivate.get(
        `/unity-mates/v1/biodatas/query/premium-request`
      );

      return res.data;
    },
  });
  const handleMakePremium = async (email, name) => {
    console.log("h");
    try {
      const res = await axiosPrivate.put(
        `/unity-mates/v1/users/type?email=${email}&&premium_request_status=approved`
      );
      const isSuccess = res?.data?.modifiedCount > 0;
      if (isSuccess) {
        refetch();
        alert(`${name} has been made premium  successfully!`, "success");
      }
    } catch (err) {
      if (err) {
        alert("Made premium failed!", "error");
      }
    }
  };
  console.log(users);
  return (
    <section>
      <SectionWrapperSmall>
        <SectionHeader title="approved premium request" />
        <div className="overflow-x-auto">
          {isLoading ? (
            <p>loading...</p>
          ) : !isLoading && !users.length ? (
            <p>no users found</p>
          ) : (
            <Table>
              <Table.Head>
                <Table.HeadCell></Table.HeadCell>
                <Table.HeadCell>name</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Biodata Id</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y ">
                {users.map(
                  (
                    { _id, email, name, premium_request_status, biodata_id },

                    idx
                  ) => (
                    <Table.Row
                      key={_id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        {idx + 1}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white capitalize">
                        {name}
                      </Table.Cell>
                      <Table.Cell>{email}</Table.Cell>
                      <Table.Cell>{biodata_id}</Table.Cell>
                      <Table.Cell>
                        {" "}
                        {premium_request_status === "pending" ? (
                          <button
                            onClick={() => handleMakePremium(email, name)}
                            className="bg-primary-color text-white hover:bg-secondary-color rounded-sm  px-3 py-1"
                          >
                            Make Premium
                          </button>
                        ) : (
                          <span className=" px-3 py-1">Approved</span>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  )
                )}
              </Table.Body>
            </Table>
          )}
        </div>
      </SectionWrapperSmall>
    </section>
  );
};

export default ApprovePremiumRequests;
