import ProgramPage from '../minipages/ProgramPage';
import Footer from '../../components/Footer/Footer';

const EmergingLeadersProgram = () => {
  const programData = {
    title: "*EMERGING* LEADERS PROGRAMME",
    subtitle: "Preparing for Senior Leadership Roles",
    backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: [
      {
        title: "Strategic Impact",
        description: "Drive initiatives aligned with organizational goals and manage multi-stakeholder environments.",
        icon: "🎯"
      },
      {
        title: "Advanced People Management",
        description: "Coach and mentor teams while fostering innovation and psychological safety.",
        icon: "👥"
      },
      {
        title: "Change Management",
        description: "Lead through organizational transitions and adapt leadership styles.",
        icon: "🔄"
      },
      {
        title: "Innovation and Influence",
        description: "Align teams around goals and encourage creative problem-solving.",
        icon: "💡"
      }
    ],
    tools: [
      "Strategic Planning Frameworks",
      "Performance Dashboards",
      "Leadership Mastery Portal",
      "Change Management Toolkit"
    ],
    outcome: "Leaders equipped to handle complex challenges and drive organizational transformation."
  };
  return (
    <>
      <ProgramPage {...programData} />
      <Footer />
    </>
  );

};

export default EmergingLeadersProgram;