import React, { useState} from "react";
import "./CSS/Help.scss";

const Help = () => {
  const [expanded, setExpanded] = useState({});

  const toggleAccordion = (index) => {
    setExpanded(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="wrap">
      <div className="help_wrap">
        <div className="top">
          <h2>Help</h2>
          <div className="p">Frequently Asked Questions and Answers</div>
        </div>
        <div className="middle">
          <div className="content">Shiba Inu Issues</div>
          <div className="content">Event Participation Queries</div>
          <div className="content">Purchasing product inquiries</div>
        </div>
        <p>Understanding Shiba Inu related issues</p>

        <Question
          question="What are the standard height and weight of dogs?"
          answer="The standard height and weight of Shiba Inu are as follows: Male: 38-41cm, 9-11kg Female: 35-38cm, 7-9kg"
          index={1}
          expanded={expanded[1]}
          toggleAccordion={toggleAccordion}
        />

        <Question
          question="What is the personality of dogs?"
          answer="Dogs is loyal and emotional towards its owner, but has an independent personality and generally doesn't like to be clingy."
          index={2}
          expanded={expanded[2]}
          toggleAccordion={toggleAccordion}
        />

        <Question
          question="Are dogs easy to train?"
          answer="Dogs puppies are quick learners and easy to train, but as adults, their independent nature and strong sense of self can make them less receptive to training."
          index={3}
          expanded={expanded[3]}
          toggleAccordion={toggleAccordion}
        />

        <Question
          question="Are dogs prone to illness?"
          answer="Dogs are generally robust and not prone to many hereditary diseases. However, their double coat makes them susceptible to skin issues in Taiwan's hot and humid climate, often giving the impression of poor skin health in Shiba Inu."
          index={4}
          expanded={expanded[4]}
          toggleAccordion={toggleAccordion}
        />

        <Question
          question="Do dogs shed?"
          answer="Healthy dogs typically shed during spring and autumn as a natural response to cope with extreme temperatures."
          index={5}
          expanded={expanded[5]}
          toggleAccordion={toggleAccordion}
        />

        <Question
          question="How long does the shedding period last for dogs?"
          answer="Dogs are clean and easy to maintain. They typically do not get very dirty, so bathing once or twice a week is sufficient. In winter, bathing every 1-2 weeks is also suitable."
          index={6}
          expanded={expanded[6]}
          toggleAccordion={toggleAccordion}
        />
        <p>Event Registration and Participation Questions</p>
        <Question
          question="How often are dog gatherings held per year?"
          answer="Dog gatherings are currently held at least once a month."
          index={7}
          expanded={expanded[7]}
          toggleAccordion={toggleAccordion}
        />

        <Question
          question="Is there a fee for attending dog gatherings?"
          answer="We primarily aim for dog enthusiasts to gather, so fees are only for venue and material costs."
          index={8}
          expanded={expanded[8]}
          toggleAccordion={toggleAccordion}
        />

        <Question
          question="Which cities hold dog gatherings?"
          answer="Currently, gatherings are only held in Taipei City and Taichung City."
          index={9}
          expanded={expanded[9]}
          toggleAccordion={toggleAccordion}
        />

        <Question
          question="What should I bring to the gatherings?"
          answer="Bring your dog, proof of ticket purchase, and a happy attitude."
          index={10}
          expanded={expanded[10]}
          toggleAccordion={toggleAccordion}
        />

        <Question
          question="What should I do if my dog defecates at the venue?"
          answer="Plastic bags and cleaning agents are provided at our venues. Please clean up after your dog."
          index={11}
          expanded={expanded[11]}
          toggleAccordion={toggleAccordion}
        />

      <p>Product Purchase Questions</p>

      <Question
        question="Is there a shipping fee?"
        answer="Shipping costs 60 yuan, but shipping is free for purchases over 1000 yuan."
        index={12}
        expanded={expanded[12]}
        toggleAccordion={toggleAccordion}
      />
      <Question
        question="Can products be returned?"
        answer="Products can be returned within seven days if unopened."
        index={13}
        expanded={expanded[13]}
        toggleAccordion={toggleAccordion}
      />
      </div>
    </div>
  );
};

const Question = ({ question, answer, index, expanded, toggleAccordion }) => {
  return (
    <div>
      <button className="accordion" onClick={() => toggleAccordion(index)}>
        Q &nbsp; {question}
      </button>
      <div
        style={{
          maxHeight: expanded ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.2s ease-out'
        }}
      >
        <p className="panel">{answer}</p>
      </div>
    </div>
  );
};

export default Help;
