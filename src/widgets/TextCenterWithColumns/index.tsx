import React from 'react';
import { ITextCenterWithColumns } from './TextCenterWithColumns.interface';
import AppConfig from '@/lib/AppConfig';

const TextCenterWithColumns: React.FC<ITextCenterWithColumns> = ({
  title,
  teaserText1,
  teaserText2
}) => {
  return (
    <div className="bg-[#e3e3e3]">
      <div className="container mx-auto px-4 pt-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] md:text-[4.2vw] font-light mb-6 uppercase">WHAT IS REMOTE CARE?</h2>
          <p className="text-[16px] md:text-[1.8vw] leading-[1.5] md:leading-[1.5] font-light text-[#000] max-w-[55vw] mx-auto">
            A remote exam is the same as a comprehensive eye exam experience, just in a remote fashion. The main difference is the patient is in the office and the doctor is remote (working from home).
          </p>
        </div>

        {/* Content Section */}
        <div className="prose sm:prose-textCenterWithColumns prose-textCenterWithColumnsMobile max-w-none">
          {AppConfig.html(teaserText1)}
          {teaserText2 && (
            <>
              <hr className="my-8 border-black" />
              {AppConfig.html(teaserText2)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextCenterWithColumns;
 