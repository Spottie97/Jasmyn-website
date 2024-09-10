import React from 'react';
import { Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What are your opening hours?',
    answer: 'We are open from 8:00 AM to 6:00 PM, Monday through Saturday, and from 9:00 AM to 3:00 PM on Sundays.'
  },
  {
    question: 'Do you offer delivery services?',
    answer: 'Yes, we offer delivery services within a 20km radius. Please contact us for more details.'
  },
  {
    question: 'Are your products organic?',
    answer: 'Many of our products are organic, but not all. Each product is clearly labeled with its organic status.'
  },
  // Add more FAQs as needed
];

const FAQ: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;
