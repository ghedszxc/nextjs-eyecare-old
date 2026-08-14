"use client";
import Script from "next/script";

declare global {
  interface Window {
    _sp_queue: any[];
    _sp_: {
      globalcmp: any;
      config: {
        accountId: number;
        baseEndpoint: string;
      };
    };
  }
}

const SourcePoint = () => {
  return (
    <>
      <Script id="privacy-script-config">
        {`
          window._sp_queue = [];
          window._sp_ = {
              config: {
                propertyHref: "https://uat.essilorluxotticaeyecare.com",
                accountId: 1977,
                baseEndpoint: 'https://cdn.privacy-mgmt.com',
                globalcmp: { },
                events: { 
                  onMessageReady: function() {
                    console.log('[event] onMessageReady', arguments);
                  },
                  onMessageReceiveData: function() {
                    console.log('[event] onMessageReceiveData', arguments);
                  },
                  onSPReady: function() {
                    console.log('[event] onSPReady', arguments);
                  },
                  onError: function() {
                    console.log('[event] onError', arguments);
                  },
                  onMessageChoiceSelect: function() {
                    console.log('[event] onMessageChoiceSelect', arguments);
                  },
                  onConsentReady: function(consentUUID, euconsent) {
                    console.log('[event] onConsentReady', arguments);
                  },
                  onPrivacyManagerAction: function() {
                    console.log('[event] onPrivacyManagerAction', arguments);
                  },
                  onPMCancel: function() {
                    console.log('[event] onPMCancel', arguments);
                  } 
                }
              }
          }
        `}
      </Script>
      <Script
        src="https://cdn.privacy-mgmt.com/unified/wrapperMessagingWithoutDetection.js"
        async
      />
    </>
  );
};

export default SourcePoint;
