import React, { useState } from 'react';
import SectionHeader from '../SectionHeader';
import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';

const FaqContainer = styled.div`
margin: 2% 2% 6%;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 1rem;
padding: 5% 10%;
background-color: #f3f5f6;
@media screen and (max-width: 768px) {
    padding: 5%; 
}
`
const EachFaq = styled.div`
background-color: #fff;
padding: 1%;
border-radius: 10px;
`

const AccordionContainer = styled.div`
  margin-bottom: 10px;
`;

const AccordionItem = styled.div`
  color: #000;
  transition: 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 16px; 
  padding: 10px;
    cursor: pointer;
  @media screen and (max-width: 768px) {
        font-size: 15px !important;
}
@media screen and (max-width: 500px) {
    font-size: 14px !important;
}
`;

const AccordionContent = styled.div`
  transition: 0.4s;
  line-height:  ${({ isOpen }) => (isOpen ? '25px' : '0px')};
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  color: #59595f;
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
  padding-bottom : ${({ isOpen }) => (isOpen ? '10px' : '0')};
  @media screen and (max-width: 768px) {
    font-size: 15px !important;
    line-height:  ${({ isOpen }) => (isOpen ? '20px' : '0px')};
}
@media screen and (max-width: 500px) {
    font-size: 14px !important;
    line-height:  ${({ isOpen }) => (isOpen ? '18px' : '0px')};
}
  `;

function Faq() {

    const items = [
        {
            title: 'How do I select the right color palette for my interior decor?',
            content: ' Consider your desired atmosphere, natural lighting, and existing elements to choose a harmonious color scheme.'
        },
        {
            title: ' What factors should I consider when choosing furniture for my space?',
            content: `Take into account the room's dimensions, functionality, style preferences, and desired comfort levels when selecting furniture pieces.`
        },
        {
            title: 'How can I make a small room appear larger through interior decor?',
            content: 'Utilize light colors, maximize natural light, incorporate mirrors, declutter, and employ space-saving furniture solutions to create an illusion of spaciousness.'
        },
        {
            title: 'What are some popular interior decor trends this season?',
            content: 'Current trends include incorporating natural elements, embracing minimalist designs, opting for sustainable materials, and blending textures for added depth.'
        },
    ];

    const [activeIndices, setActiveIndices] = useState([]);

    const handleItemClick = (index) => {
        if (activeIndices.includes(index)) {
            setActiveIndices(activeIndices.filter((i) => i !== index)); // Close the clicked item if it's already open
        } else { 
            setActiveIndices([...activeIndices, index]);
        }
    }

    return (
        <div>
            <SectionHeader title='FAQ”s' desc="Delve into our FAQ section, where you'll discover insightful responses that offer clarity and guidance for a seamless interior decor journey." />
            <FaqContainer>
                {items.map((item, index) => (
                    <AccordionContainer key={index}>
                        <EachFaq>
                            <AccordionItem index={index} onClick={() => handleItemClick(index)}>
                                {item.title}<AiOutlineRight style={activeIndices.includes(index) ? { transform: 'rotate(90deg)', transition: '0.4s' } : { transform: 'rotate(0deg)', transition: '0.4s', color: 'var(--primary-color)' }} />
                            </AccordionItem>
                            <AccordionContent isOpen={activeIndices.includes(index)}>
                                {item.content}
                            </AccordionContent>
                        </EachFaq>
                    </AccordionContainer>
                ))}
            </FaqContainer>
        </div>
    );
}

export default Faq;