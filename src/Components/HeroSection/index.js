import React, {useState} from 'react'
import Video from "../../Video/video.mp4"
import {Button} from '../ButtonElement'
import { 
HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight
} from "./HeroElement"

const Hero = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}
    return (
      <div>
        <HeroContainer>
          <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
          </HeroBg>
          <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
              Sign up for a new account today and receive ₦5000 in credit
              towards your next payment.
            </HeroP>
            <HeroBtnWrapper>
              <Button 
              to="signup" 
              onMouseEnter = {onHover}
               onMouseLeave = {onHover}
               primary = 'true'
               dark = 'true'
               >
                Get Started {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
          </HeroContent>
        </HeroContainer>
      </div>
    );
}

export default Hero
