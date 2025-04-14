import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import React from 'react';

const faqs = [
  {
    question: "How can I find a hospital or doctor?",
    answer: "Navigate to the Hospitals or Doctors section. You can filter by location, specialty, or treatment type to find the right match."
  },
  {
    question: "Is the information on the website up-to-date?",
    answer: "We regularly update our database to ensure accurate details about hospitals, doctors, and treatments. However, we recommend verifying with the hospital or doctor directly for the latest information."
  },
  {
    question: "How can I find a doctor with a specific specialization?",
    answer: "Go to the Doctors section and use filters like specialization (e.g., cardiology, orthopedics), location, or hospital affiliation to find the right doctor."
  },
  {
    question: "Can I book an appointment with a doctor through the website?",
    answer: "We provide contact details and, where available, links to hospital booking systems. Please use these to schedule appointments directly."
  },
  {
    question: "How do I know which treatment is right for me?",
    answer: "Treatment pages include descriptions, conditions treated, and potential risks. For personalized advice, consult a doctor through the contact details provided."
  },
];

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 mb-4 ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-heading font-bold">{question}</h3>
        <ExpandMoreIcon
          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </div>
      {isExpanded && (
        <div className="mt-2 font-text">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  return (
    <section className="grayish py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-black mb-6 text-center font-heading">Frequently <span className='text-teal-400'>Asked</span> Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
