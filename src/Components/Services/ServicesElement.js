import styled from 'styled-components'

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 800px;
  background: #010606;

  @media screen and (max-width: 480px) {
    height: 1300px;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
`;

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  `

export const ServicesCard = styled.div`
  background: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
  color: #ffff;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2= styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;


export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;