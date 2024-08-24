import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ConfettiComponent from './../intro/confetti';
import { checkForUpdates, VersionDetails } from './checkforupdates';
import settings from '../../../src/content/_settings.json';

const DevelopmentNotice: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [hasShownConfetti, setHasShownConfetti] = useState<boolean>(false);
    const [versionDetails, setVersionDetails] = useState<VersionDetails | null>(null);
    const [autoupdatecheck, setAutoupdatecheck] = useState<boolean | null>(null);
    const [hideContent, setHideContent] = useState<boolean>(false);
    const [showNewPlayer, setShowNewPlayer] = useState<boolean>(false);
    const [timerRemaining, setTimerRemaining] = useState<number | null>(null);

    

    if (!showPopup) {
        return (
            <>
                {hasShownConfetti && isVerified && <ConfettiComponent />}
            </>
        );
    }

    return 
        
    
};

export default DevelopmentNotice;
