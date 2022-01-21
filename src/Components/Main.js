import React, { useState } from 'react'
import Issue from './Issue'
import issue5 from '.././assets/images/backstagetalks_cover_issue_5.png'
import issue4 from '.././assets/images/backstagetalks_cover_issue_4.png'
import issue3 from '.././assets/images/backstagetalks_cover_issue_3.png'
import issue2 from '.././assets/images/backstagetalks_cover2017.png'
import issue1 from '.././assets/images/backstagetalks_cover2016_n.png'

const Main = () => {
    const [color, setColor] = useState('teal');
    const calcWindowFrames = (num) => {
        return (window.innerHeight * num) + (window.innerHeight * 0.6)
    }
    const changeBackground = () => {
        if (window.scrollY < calcWindowFrames(0)) {
            setColor('teal');
        } else if (window.scrollY >= calcWindowFrames(0) && window.scrollY < calcWindowFrames(1)) {
            setColor('orange');
        } else if (window.scrollY >= calcWindowFrames(1) && window.scrollY < calcWindowFrames(2)) {
            setColor('yellow');
        } else if (window.scrollY >= calcWindowFrames(2) && window.scrollY < calcWindowFrames(3)) {
            setColor('blue');
        } else if (window.scrollY >= calcWindowFrames(3) && window.scrollY < calcWindowFrames(4)) {
            setColor('red');
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <main className={color}>
            <Issue 
                img={issue5} 
                id="issue-5" 
                number="5" 
                available="true" 
            />
            <Issue 
                img={issue4} 
                id="issue-4" 
                number="4" 
                available="true" 
            />
            <Issue 
                img={issue3} 
                id="issue-3" 
                number="3" 
                available="true" 
            />
            <Issue 
                img={issue2} 
                id="issue-2" 
                number="2" 
                available="true" 
            />
            <Issue 
                img={issue1} 
                id="issue-1" 
                number="1" 
                available="false" 
            />
        </main>
    )
}

export default Main
