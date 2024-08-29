import { useEffect, useState } from "react";
import Heading from "@/components/common/Heading";
import Layout from "@/components/layout/Layout";
import MainLayout from "@/components/layout/MainLayout";
import { endpoints } from "@/components/common/Endpoint";
import Image from "next/image";

const image = "https://kspp.edu.in/GovernanceExcellenceInitiative-Kautilya.jpg";

const data = {
  title: "About Kautilya - Governance Excellence Initiative",
  description: "Learn about our initiative to promote governance excellence.",
  keywords: "Kautilya, GIMSR, GITAM, Hospital",
  img: image,
};

const About = ({ initialTeamData, deanData, advisoryBoardData, data }) => {
  const [teamData, setTeamData] = useState(initialTeamData);
  const [dean, setDean] = useState(deanData);
  const [advisoryBoard, setAdvisoryBoard] = useState(advisoryBoardData);
  const imagePath =
    "https://guprojects.gitam.edu/kautilya-admin/public/ourteam/";

  // Fetch updated data on the client-side after initial page load
  useEffect(() => {
    const fetchData = async () => {
      const [teamRes, deanRes, advisoryRes] = await Promise.all([
        fetch(endpoints.foundingTeamApi),
        fetch(endpoints.deanDataApi),
        fetch(endpoints.advisoryboardApi),
      ]);

      const [newTeamData, newDeanData, newAdvisoryBoardData] =
        await Promise.all([teamRes.json(), deanRes.json(), advisoryRes.json()]);

      setTeamData(newTeamData);
      setDean(newDeanData);
      setAdvisoryBoard(newAdvisoryBoardData);
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <MainLayout
      title={data.title}
      description={data.description}
      keywords={data.keywords}
      img={data.img}
    >
      <div className="py-12">
        <Layout layoutwidth="true">
          <Heading title={"Founding Team"} />
          <div className="grid grid-cols-2 gap-4 my-24">
            {teamData.data.map((data) => (
              <div className="bg-white shadow-md p-4 border" key={data.id}>
                <Image
                  src={`${imagePath}${data.profile}`}
                  width={"100"}
                  height={"100"}
                  alt={data.name}
                />
                <h2>{data.name}</h2>
              </div>
            ))}
          </div>
          <Heading title={"Dean"} />
          <div className="grid grid-cols-2 gap-4 my-24">
            {dean.data.map((data) => (
              <div className="bg-white shadow-md p-4 border" key={data.id}>
                <Image
                  src={`${imagePath}${data.profile}`}
                  width={"100"}
                  height={"100"}
                  alt={data.name}
                />
                <h2>{data.name}</h2>
              </div>
            ))}
          </div>
          <Heading title={"Advisory Board"} />
          <div className="grid grid-cols-5 gap-4 my-24">
            {advisoryBoard.data.map((data) => (
              <div className="bg-white shadow-md p-4 border" key={data.id}>
                <Image
                  src={`${imagePath}${data.profile}`}
                  width={"100"}
                  height={"100"}
                  alt={data.name}
                />
                <h2>{data.name}</h2>
              </div>
            ))}
          </div>
        </Layout>
      </div>
    </MainLayout>
  );
};

export default About;

export async function getStaticProps() {
  const [teamRes, deanRes, advisoryRes] = await Promise.all([
    fetch(endpoints.foundingTeamApi),
    fetch(endpoints.deanDataApi),
    fetch(endpoints.advisoryboardApi),
  ]);

  const [initialTeamData, deanData, advisoryBoardData] = await Promise.all([
    teamRes.json(),
    deanRes.json(),
    advisoryRes.json(),
  ]);

  return {
    props: { initialTeamData, deanData, advisoryBoardData, data },
  };
}
