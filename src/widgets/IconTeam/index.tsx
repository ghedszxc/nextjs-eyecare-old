"use client";

// Modules
import { useEffect, useState } from "react";
import { IIconTeam } from "./IconTeam.interface";
import useResponsive from "@/hooks/useResponsive";

// Components
import IconTeamItem from "./IconTeamItem";

const IconTeam = ({ title, subtitle, countryList }: IIconTeam) => {
  // Hooks
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const { is } = useResponsive();
  const isTablet = is("tablet", ">");
  const isLaptop = is("desktop", ">");
  const isDesktop = is("desktop-l", ">");

  // Variables
  // Functions
  const onSelectCountry = (e: any) => {
    e.preventDefault();
    const getCurrentValue = e.target.value;
    const getDataValue = countryList.find((find: any) => find.countryName == getCurrentValue);
    
    if (getCurrentValue != '-- Select your location --') {
      setSelectedCountry(getDataValue);
    } else {
      setSelectedCountry(null)
    }
    
  };

  // Effects
  useEffect(() => {
    if (window.location.hash == '#eyecare-team') {
      // document.getElementById("eyecare-team")?.scrollIntoView();
      window.scrollTo({ top: isDesktop ? 1100 : isLaptop ? 1070 : isTablet ? 1070 : 1000, behavior: 'smooth' });
    }
  })

  return (
    // id="eyecare-team"
    <div style={{ background: '#dfdfe1' }}>
      <div className="w-full lg:w-[50%] xl:w-[40%] py-16 lg:py-24 m-auto text-center">
        {
          title && (
            <h2 className="text-[30px] md:text-[5.34vw] lg:text-[4.94vw] xl:text-[4.44vw] font-[100] tracking-[5px]">
              { title }
            </h2>
          )
        }
        
        {
          subtitle && (
            <p className="text-[14px] lg:text-[1.6vw] font-[100] tracking-[.09em]">
              { subtitle }
            </p>
          )
        }

        <select className="w-[70%] md:w-[38%] lg:w-[55%] xl:w-[50%] mt-12 mb-8 p-3 border rounded-sm text-[19px] font-[100]"
          defaultValue={countryList[0]?.countryName}
          onChange={(e) => onSelectCountry(e) }>
          
          {
            countryList.map((itm, index) => (
              <option value={itm?.countryName} key={index} className="font-[100]">
                { itm?.countryName }
              </option>
            ))
          }
        </select>

        {
          selectedCountry && (
            <IconTeamItem {...selectedCountry} />
          )
        }
      </div>
    </div>
  );
};
export default IconTeam;
