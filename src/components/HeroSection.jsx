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
        <section className="w-full h-full flex justify-center items-center">
            <div className="space-y-6 w-[60%]">
                <h3 className="font-sfmono text-lg text-coffee-100 font-bold">Hello, my name is</h3>

                <div>
                    <div className="flex items-center">
                        <h1 className="font-calibre font-semibold text-7xl text-beige-100 leading-2 h-16 bg-gradient-to-r from-beige-50 to-beige-200 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Liviu Cocianu</h1>
                        <a className="w-6 ml-4 mr-2" speed="normal" onClick={playSound}><FontAwesomeIcon className="text-lg text-beige-50 cursor-pointer" icon={!playStates.normal ? faVolumeLow : faVolumeHigh} /></a>
                        <a speed="slow" onClick={playSound}><Icon className={`text-beige-50 w-6 cursor-pointer${!playStates.slow ? "" : " animate-bounce"}`} path={mdiTortoise} /></a>
                    </div>

                    <h2 className="font-calibre font-semibold text-[2.2rem] text-beige-100">Front End React Developer</h2>
                </div>

                <p className="w-full font-calibre font-semibold text-lg text-beige-200 text-justify tracking-wider">
                    Web developer with an extensive background in Java and React.js<br />
                    Even so, I just love creating, no matter the programming language!
                </p>
            </div>
        </section>
    )
}

export default HeroSection