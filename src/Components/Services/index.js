import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElement'
import Icon1 from '../../Images/image2.svg'
import Icon2 from "../../Images/image1.svg";
import Icon3 from "../../Images/image3.svg";

const Services = () => {
    return (
      <div>
        <ServicesContainer id="services">
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1} />
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>
                We help reduce your fees and increase your overall revenue.
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2} />
              <ServicesH2>Virtual offices</ServicesH2>
              <ServicesP>
                You can access our platform online anywhere in the world.
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon3} />
              <ServicesH2>Premium Benefits</ServicesH2>
              <ServicesP>
                Unlock our special memebership card that returns 5% cash back.
              </ServicesP>
            </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>
      </div>
    );
}

export default Services
