import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import useAuth from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useDocumentSizes from "../../../hooks/useDocumentSizes";
import PieChartAdmin from "../Common/PieChartAdmin";
import StatsBoxes from "../Common/StatsBoxes";
const UserHome = () => {
  const { user } = useAuth();
  const email = user?.email;
  const { sizes, isLoading } = useDocumentSizes();
  const axiosPrivate = useAxiosPrivate();
  const [expense, setExpense] = useState(0);
  const statsPartial =
    !isLoading && sizes
      ? sizes.map(({ size, title }) => ({ data: size, title }))
      : null;

  const stats =
    !isLoading && statsPartial && expense
      ? [{ data: expense?.expense, title: expense?.title }, ...statsPartial]
      : null;

  useEffect(() => {
    if (email) {
      axiosPrivate
        .get(`/unity-mates/v1/requests/expense?email=${email}`)
        .then(({ data }) => {
          setExpense(data);
        })
        .catch(() => {});
    }
  }, [axiosPrivate, email]);

  return (
    <section>
      <SectionWrapperSmall>
        <SectionHeader title="Overall Statistics" />
        {isLoading ? (
          <p>loading...</p>
        ) : !isLoading && !stats ? (
          <p>no data found</p>
        ) : !isLoading && stats ? (
          <>
            <StatsBoxes stats={stats} />
            <PieChartAdmin stats={sizes} />
          </>
        ) : (
          <p>An error occurs</p>
        )}
      </SectionWrapperSmall>
    </section>
  );
};

export default UserHome;
