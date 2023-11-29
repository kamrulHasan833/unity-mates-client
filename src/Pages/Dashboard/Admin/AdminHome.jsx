import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useDocumentSize from "../../../hooks/useDocumentSizes";
import PieChartAdmin from "../Common/PieChartAdmin";
import StatsBoxes from "../Common/StatsBoxes";
const AdminHome = () => {
  const { sizes, isLoading } = useDocumentSize();
  const axiosPrivate = useAxiosPrivate();
  const [revenue, setRevenue] = useState(0);
  const statsPartial =
    !isLoading && sizes
      ? sizes.map(({ size, title }) => ({ data: size, title }))
      : null;

  const stats =
    !isLoading && statsPartial && revenue
      ? [{ data: revenue.revenue, title: revenue.title }, ...statsPartial]
      : null;

  useEffect(() => {
    axiosPrivate
      .get("/unity-mates/v1/requests/revenue")
      .then(({ data }) => {
        setRevenue(data);
      })
      .catch(() => {});
  }, [axiosPrivate]);

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

export default AdminHome;
