import React, { useEffect, useRef } from 'react'
import Icon from '../global_elements/Icon/Icon'
import { ITeaserTargets } from '@/widgets/Carousel/Carousel.interface';
import AppConfig from '@/lib/AppConfig';
import Button from '../Button';
import { getAdapterCTA, getAdapterImage } from '@/lib/utilities';
import ResponsivePicture from '../Picture/ResponsivePicture';
import Presence from '../Animations/Presence';

interface Props {
  modal?: ITeaserTargets
  isActive: boolean
  onClose: () => void
}

const SignUpModal: React.FC<Props> = (props) => {
  const { modal, isActive, onClose } = props;
  const { html } = AppConfig;
  const cta = getAdapterCTA(modal?.teaserTargets || []);

  const img = getAdapterImage(modal?.pictures || []);
  return (
    <Presence
      render={isActive}
      initial="-translate-y-full opacity-0"
      animate="-translate-y-1/2 opacity-100"
      className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black bg-opacity-55"
    >
      <div className="relative flex flex-col justify-center items-center h-full p-[15px] lg:py-[4vh] lg:px-[15vw] m-auto">
      <div onClick={onClose}>
        <Icon type={"close"} className="w-[25px] lg:w-11 fill-white hover:opacity-50 absolute right-[4vw] lg:right-8 top-[4vw] lg:top-8 cursor-pointer z-[51]" />
      </div>
        <div className="w-[90px] mb-[40px] lg:mb-20">
          <ResponsivePicture name={'Icon'} type={'components'} url={img[0]} />
        </div>
        <h5 className="text-[18px] lg:text-[2.08333vw] leading-9 lg:leading-[1.42857143] text-white text-center font-medium">{html(modal?.teaserText.text)}</h5>
        <Button className="mt-[40px] lg:mt-[90px] px-[70px] lg:px-[7vw] py-[15px] lg:py-[1.4vw] text-[14px] lg:text-[1.45833vw] text-white  border border-white hover:bg-[#d8d8d833]" href={cta[0].url} isExternal={cta[0].isExternal}>{html(cta[0].label)}</Button>
      </div>
    </Presence>
  )
}

export default SignUpModal