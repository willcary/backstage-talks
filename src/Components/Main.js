import React from 'react'
import Issue from './Issue'
import issue5 from '.././images/backstagetalks_cover_issue_5.png'
import issue4 from '.././images/backstagetalks_cover_issue_4.png'
import issue3 from '.././images/backstagetalks_cover_issue_3.png'
import issue2 from '.././images/backstagetalks_cover2017.png'
import issue1 from '.././images/backstagetalks_cover2016_n.png'

const Main = () => {
    return (
        <main>
            <Issue img={issue5} id="issue-5" number="5" available="true" />
            <Issue img={issue4} id="issue-4" number="4" available="true" />
            <Issue img={issue3} id="issue-3" number="3" available="true" />
            <Issue img={issue2} id="issue-2" number="2" available="true" />
            <Issue img={issue1} id="issue-1" number="1" available="false" />
        </main>
    )
}

export default Main
