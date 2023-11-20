import React from "react";
import ComingSoonText from "../ComingSoonItem/soon-item.component";
import './coming-soon-container.styles.css'

const ComingSoonContainer = () => {
    const info = [
            {
                id: 0,
                header: "Avatar The Last Airbender",
                paragraph: "Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.",
            },

            {
                id: 1,
                header: "3 Body problem",
                paragraph: "A fateful decision in 1960s China echoes across space and time to a group of scientists in the present, forcing them to face humanity's greatest threat.",

            },

            {
                id: 2,
                header: "Code 8 Part II",
                paragraph: 'In a world where superpowered people are heavily policed by robots, an ex-con teams up with a drug lord he despises to protect a teen from a corrupt cop.',
            },

            {
                id: 3,
                header: 'Squid Game: The Challenge',
                paragraph: 'Immersed in the world of "Squid Game," 456 real players put their skills — and character — to the ultimate test for a life-changing $4.56 million prize.',
            },

            {
                id: 4,
                header: 'Heeramandi',
                paragraph: 'Sanjay Leela Bhansali brings his majestic signature flair to stories of love and betrayal in the lives of courtesans in pre-independence India.',
            },

            {
                id: 5,
                header: 'YOH! Christmas',
                paragraph: 'Single, 30 and under pressure, Thando lies to her family that she has a boyfriend. Now she has 24 days to bring one home for Christmas. Can she do it?',
            },

            {
                id: 6,
                header: 'Yu Yu Hakusho',
                paragraph: 'After a selfless act costs him his life, teen delinquent Yusuke Urameshi is chosen as a Spirit Detective to investigate cases involving rogue yokai.',
            },

            {
                id: 7,
                header: 'Last Call for Istanbul',
                paragraph: 'A chance meeting at the airport leads two married people to an unforgettable night full of excitement, desire, and temptation in New York City.',
            },

    
    ];

    return(

        <div className="coming-soon-container">
            {
                info.map(inf => {
                    return(
                        <ComingSoonText key={inf.id} header={inf.header} paragraph={inf.paragraph} />
                    )
                })
            }   
        </div>
    );
};

export default ComingSoonContainer;