import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProgramCard from '../components/Programs/ProgramCard';
import Footer from '../components/Footer/Footer';

const programs = [
  {
    title: "RISING PROFESSIONALS PROGRAMME",
    description: "Empowering Early Career Success",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
    features: [
      {
        icon: "💼",
        title: "Corporate Readiness",
        description: "Master workplace etiquette and build a strong first impression."
      },
      {
        icon: "📋",
        title: "Task Management",
        description: "Learn prioritization tools and streamline workflows with tools like Trello and Asana."
      },
      {
        icon: "💬",
        title: "Professional Communication",
        description: "Develop email etiquette, impactful pitches, and effective meeting strategies."
      }
    ],
    tools: [
      "Task Management Toolkit",
      "Corporate Culture Playbook",
      "AI-Powered Feedback Tools"
    ],
    outcomes: "Confident, efficient, and well-connected professionals ready to thrive in their first 100 days."
  },
  {
    title: "NEW MANAGERS PROGRAMME",
    description: "Transitioning from Individual Contributor to Leader",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800",
    features: [
      {
        icon: "👥",
        title: "Leadership Foundations",
        description: "Navigate the peer-to-leader shift with authority and empathy."
      },
      {
        icon: "🤝",
        title: "Team Dynamics",
        description: "Manage performance, resolve conflicts, and foster collaboration."
      },
      {
        icon: "🎯",
        title: "Strategic Thinking",
        description: "Use decision-making frameworks to lead with clarity and impact."
      }
    ],
    tools: [
      "Leadership Toolkits",
      "Behavioral Assessments",
      "Simulated Scenarios"
    ],
    outcomes: "Confident, empathetic managers capable of inspiring and driving team success."
  },
  {
    title: "EMERGING LEADERS PROGRAMME",
    description: "Preparing for Senior Leadership Roles",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800",
    features: [
      {
        icon: "💫",
        title: "Strategic Impact",
        description: "Drive initiatives aligned with organizational goals and manage multi-stakeholder environments."
      },
      {
        icon: "👥",
        title: "Advanced People Management",
        description: "Coach and mentor teams while fostering innovation and psychological safety."
      },
      {
        icon: "🔄",
        title: "Change Management",
        description: "Lead through organizational transitions and adapt leadership styles."
      }
    ],
    tools: [
      "Strategic Planning Frameworks",
      "Performance Dashboards",
      "Leadership Mastery Portal"
    ],
    outcomes: "Leaders equipped to handle complex challenges and drive organizational transformation."
  },
  {
    title: "LEGACY LEADERS PROGRAMME",
    description: "Shaping Organizational Transformation",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
    features: [
      {
        icon: "🎯",
        title: "Visionary Leadership",
        description: "Craft and communicate a compelling vision for long-term growth."
      },
      {
        icon: "📊",
        title: "Executive Decision-Making",
        description: "Navigate complexity with risk management and data-driven strategies."
      },
      {
        icon: "🌟",
        title: "Culture Building",
        description: "Embed values of inclusion, diversity, and high performance."
      }
    ],
    tools: [
      "Executive Leadership Toolkits",
      "360-Degree Feedback Tools",
      "Leadership Shadowing Opportunities"
    ],
    outcomes: "Transformational leaders who create lasting organizational impact and cultivate future leadership."
  }
];

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id='programmes' className="min-h-screen pt-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive learning journeys designed to transform professionals at every career stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                {...program}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Programs;