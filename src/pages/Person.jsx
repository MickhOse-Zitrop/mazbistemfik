import { useParams } from 'react-router-dom';
import { members } from '../data/data';
import { useEffect, useState } from 'react';

export default function Person() {
    const { person } = useParams();
    const [currentPerson, setCurrentPerson] = useState({});

    useEffect(() => {
        members.map((member) => {
            if (member.id == person) setCurrentPerson(member);
        });
    }, []);

    var l = window.location;
    console.log(
        l.protocol +
            '//' +
            l.hostname +
            (l.port ? ':' + l.port : '') +
            l.pathname
    );

    return (
        <div className="main-page">
            <div className="main-page-block">
                <div className="main-page-block-content">
                    <h2 className="main-page-block-title">
                        {currentPerson.title}
                    </h2>
                    <p className="main-page-block-text">
                        The Mazbistemifk gang was created on 18.07.2018. The
                        founders of the gang were Adeyl, Big Sloune, Kary,
                        MickhOse Zitrop, Mort Flame and TiNaki. The idea to
                        create a channel came when we were talking about our
                        YouTube channel. We decided whether we should create it,
                        because for 4 years we have been creating channel after
                        channel again and again, but everything was
                        unsuccessful. In the end, we created the "Канал
                        Ра3нообра3ий" on 17.06.2018. At that time, we started
                        inventing nicknames for ourselves. Already on July 16,
                        we decided to create our gang. The name Mazbistemfik was
                        created from our nicknames: "M"-MickhOse, "A"-Adeyl,
                        "Z"-Zitrop, "B"-Big, "I", "S"-Sloune, "T"-TiNaki, "E",
                        "M"-Mort, "F"-Flame, "I", "K"-Kary. And on July 18, our
                        "Канал Ра3нообра3ий" turned into "Gang Mazbistemfik".
                        However, our first video clip ("A short film about the
                        Great Patriotic War") appeared on July 1, and at that
                        time, as far as you remember, the gang did not exist
                        yet. Our first video, at the time of the existence of
                        Mazbistemfik, was released as early as January 4, 2019.
                        Its title is "An overview of our USUAL day when it
                        snows". Now Mazbistemfik includes quite a lot of people,
                        but those 6 people who created the gang are called
                        Founders. Our gang is getting bigger and bigger, and
                        soon we will take over the whole world!
                    </p>
                </div>
            </div>
        </div>
    );
}
