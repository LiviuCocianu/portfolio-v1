import { useCallback, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from '@mdi/react';

import { faVolumeLow, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { mdiTortoise } from '@mdi/js';
import useSound from 'use-sound'

import nameNormal from "../assets/sounds/name_normal.mp3"
import nameSlow from "../assets/sounds/name_slow.mp3"

function HeroSection() {
    const [playStates, setPlayStates] = useState({
        normal: false,
        slow: false
    })

    const setPlayingFor = (speed, value) => setPlayStates(prev => {
        return {
            ...prev,
            [speed]: value
        }
    })

    const [playNormal] = useSound(nameNormal, { onend: () => setPlayingFor("normal", false) })
    const [playSlow] = useSound(nameSlow, { onend: () => setPlayingFor("slow", false) })

    const playPronounciation = useCallback((speed) => {
        if (speed == "normal") playNormal()
        else playSlow()
    }, [playNormal, playSlow])
    
    const playSound = useCallback((e) => {
        const speed = e.currentTarget.getAttribute("speed");

        if (Object.values(playStates).slice(0, 2).every(val => !val)) {
            playPronounciation(speed)
            setPlayingFor(speed, true)
        }
    }, [playStates, playPronounciation])

    return (
        <header className="flex items-center justify-center w-full h-full snap-start">
            <div className="space-y-6 w-[75%] md:w-[65%] flex flex-col items-center md:none md:items-start">
                <h3 className="text-lg font-bold font-sfmono text-coffee-100">Hello, my name is</h3>

                <div className="w-full">
                    <div className="relative flex flex-col items-center w-full md:flex-row">
                        <h1 className="font-calibre font-semibold text-5xl md:text-7xl text-beige-100 md:h-16 bg-gradient-to-r from-beige-50 to-beige-200 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Liviu Cocianu</h1>
                        
                        <div className="absolute flex mb-4 -translate-y-24 md:translate-y-0 md:mb-0 md:static md:ml-4">
                            <a className="w-6 mr-2" speed="normal" onClick={playSound}><FontAwesomeIcon className="text-lg cursor-pointer text-beige-50" icon={!playStates.normal ? faVolumeLow : faVolumeHigh} /></a>
                            <a className="w-6" speed="slow" onClick={playSound}><Icon className={`text-beige-50 w-6 cursor-pointer${!playStates.slow ? "" : " animate-bounce"}`} path={mdiTortoise} /></a>
                        </div>
                    </div>

                    <h2 className="font-calibre font-semibold text-center text-xl md:text-start md:text-[2.2rem] text-beige-100">React Web Developer</h2>
                </div>

                <p className="w-full text-lg font-semibold tracking-wider text-justify font-calibre text-beige-200">
                    Web developer with a background in React.js and sometimes Java<br />
                    I just love creating, no matter the programming language!
                </p>
            </div>
        </header>
    )
}

export default HeroSection
