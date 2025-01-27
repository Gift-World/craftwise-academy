import ProgramPage from '../minipages/ProgramPage';
import Footer from '../../components/Footer/Footer';

const RisingProfessionalsProgram = () => {
  const programData = {
    title: "RISING PROFESSIONALS PROGRAMME",
    subtitle: "Empowering Early Career Success",
    backgroundImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: [
      {
        title: "Corporate Readiness",
        description: "Master workplace etiquette and build a strong first impression.",
        icon: "👔"
      },
      {
        title: "Task Management",
        description: "Learn prioritization tools and streamline workflows with tools like Trello and Asana.",
        icon: "📋"
      },
      {
        title: "Professional Communication",
        description: "Develop email etiquette, impactful pitches, and effective meeting strategies.",
        icon: "💬"
      },
      {
        title: "Strategic Relationship-Building",
        description: "Build meaningful connections and enhance emotional intelligence.",
        icon: "🤝"
      },
      {
        title: "Delivering Value",
        description: "Tackle capstone projects to solve business problems and strengthen personal branding.",
        icon: "💎"
      }
    ],
    tools: [
      "Task Management Toolkit",
      "Corporate Culture Playbook",
      "AI-Powered Feedback Tools",
      "Communication Templates"
    ],
    outcome: "Confident, efficient, and well-connected professionals ready to thrive in their first 100 days."
  };

  return (
    <>
      <ProgramPage {...programData} />
      <Footer />
    </>
  );
};

export default RisingProfessionalsProgram;