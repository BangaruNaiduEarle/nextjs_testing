import Layout from "@/components/layout/Layout";
import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
  const image =
    "https://kspp.edu.in/images/govtExcellenceInitivies/gei_dec_2022_1.jpg";

  return (
    <MainLayout
      title={
        "Home Kautilya - Master's Program in Public Policy (MPP), Kautilya School of Public Policy, Best MPP Program"
      }
      description={
        "KAUTILYA OPINION A Divided Victory: Erdogan's Third Term and its Consequences By, Piyush Mittal - Executive Assistant to the Dean, Kautilya In spite of the growing inflation, the worsening economy, and the public anger over the government's response to the earthquake that hit Turkey in February, the results of the Turkish Elections saw a 3rd-time"
      }
      keywords={"Kautilya, GIMSR, GITAM, Hospital"}
      img={image}
    >
      <Layout layoutwidth="true">
        <h2>Working</h2>
      </Layout>
      <Layout layoutwidth="">
        <h2 className="bg-primary">Working</h2>
      </Layout>
      <div className="mx-auto container h-96 bg-green-100 px-5"></div>
    </MainLayout>
  );
}
