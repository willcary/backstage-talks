import React from 'react'
import Issue from './Issue'
import issue5 from '.././assets/images/backstagetalks_cover_issue_5.png'
import issue4 from '.././assets/images/backstagetalks_cover_issue_4.png'
import issue3 from '.././assets/images/backstagetalks_cover_issue_3.png'
import issue2 from '.././assets/images/backstagetalks_cover2017.png'
import issue1 from '.././assets/images/backstagetalks_cover2016_n.png'
import COLORS from ".././assets/js/colors.js"

const Main = () => {
    return (
        <main>
            <Issue 
                img={issue5} 
                id="issue-5" 
                number="5" 
                available="true" 
                data-background-color={COLORS.teal}
            />
            <Issue 
                img={issue4} 
                id="issue-4" 
                number="4" 
                available="true" 
                data-background-color={COLORS.orange}
            />
            <Issue 
                img={issue3} 
                id="issue-3" 
                number="3" 
                available="true" 
                data-background-color={COLORS.yellow}
                className='js-color-stop'
            />
            <Issue 
                img={issue2} 
                id="issue-2" 
                number="2" 
                available="true" 
                data-background-color={COLORS.blue}
            />
            <Issue 
                img={issue1} 
                id="issue-1" 
                number="1" 
                available="false" 
                data-background-color={COLORS.red}
            />
        </main>
    )
}

export default Main
