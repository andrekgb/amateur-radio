import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HomePage = () => {
    return (
        <div>
            <h1>Amateur Radio</h1>
            <p className={'text-left'}>
                Hi, my name is André. I'm a software engineer and Amateur Radio Operator.
            </p>
            <p className={'text-left'}>
                I made this small page to answer the questions people ask me the most about this hobby of mine, Amateur Radio. Also knows as Ham Radio.
            </p>
            <div>
                <Accordion disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6">What is Amateur Radio?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={'accordion-content'}>
                            <p>According to the FCC (Federal Communication Commission) Amateur Radio is:</p>
                            <div className={'quote'}>
                                <cite>
                                    The amateur service is for qualified persons of any age who are interested in radio technique solely with a personal aim and without pecuniary interest
                                </cite>
                            </div>
                            <p>It's a hobby which consists of contacting other amateur radio operators and/or technical experimentation. </p>
                            <p>
                                The range of these radios can be only local (inside the city, state or country) or global.&nbsp;
                                It all depends on the frequency used, antenna and especially the ionosphere conditions.&nbsp;
                                The ionosphere conditions are important because it "bounces" the radio signals back to earth. See image below:
                            </p>
                            <p>
                                <a href={'images/ionosphere.gif'} target={'_blank'}>
                                    <img src={'images/ionosphere.gif'} style={{ width: '100%' }}/>
                                </a>
                                You can click to see the full image. We use what they call "low frequency".
                            </p>
                            <p>
                                Since this type of frequencies depends so much on the ionosphere,&nbsp;
                                it's not considered reliable enough for commercial use. Thus these frequencies are used by&nbsp;
                                amateurs for experimentation and friendly communications.
                            </p>
                            <p>
                                Every conversation on Amateur Radio frequencies can be heard by anyone anywhere on the planet! No military or espionage around here!
                            </p>
                            <p><b>In this page I'll teach you how to listen to it via the internet. Keep reading!</b></p>

                            <p>Below an example of a Amateur Radio contact. From Montreal to Israel, close to the Lebanon border:</p>

                            <div className={'youtube-container'}>
                                <iframe src="https://www.youtube.com/embed/MpDwmtWG1Gw"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6">What are these "contacts"?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={'accordion-content'}>
                            <p>To understand better the stuff I'm going to explain below, you may need to be
                                aware of the <a href={'images/phonetic_alphabet.png'} target={'_blank'}>Phonetic Alphabet</a>,&nbsp;
                                <a href="images/q_codes.png" target={'_blank'}>Q-Codes</a> and&nbsp;
                                <a href={'images/cw_abbreviations.png'} target={'_blank'}>Morse Code Abbreviations</a>.
                            </p>
                            <p>
                                These contacts, we also call it "QSO", are simply conversations via radio. Basically we
                                stop at a certain frequency and broadcast our presence. Other Amateur Radio Operators who listen to it can reply to the call.&nbsp;
                                They can be in the context of a friendly conversation, trying to get a contact with a specific country (with the objective of talking
                                to all the countries on the planet) or competitions (number of contacts x number of countries = final score).
                            </p>
                            <p>
                                These conversations can be via:
                                <ul>
                                    <li>
                                        <b>Audio:</b> To be able to establish a voice contact both station involved in the conversation need to have a good output power&nbsp;
                                        (watts) so both sides can completely understand all the nuances of the human voice. <a href={'https://youtu.be/p7pzlb5074c'} target={'_blank'}>Here's another example of it</a><br/><br/>
                                    </li>
                                    <li>
                                        <b>Morse Code:</b> Yep, people still use it. It's the most effective way of communication via Radio, without a computer because people&nbsp;
                                        hearing it do not need to understand all the nuances of the human voice. They just need to understand the "beep", thus making it possible&nbsp;
                                        for Amateur Radio Operators to use less power output and compromised antennas.
                                        Each letter of the alphabet has a sound. The amateur Radio Operator listens and writes down the letters, or just keep in his mind,
                                        until it forms a word.<br/><br/>
                                        Some people also use decoders, when learning or trying to improve the receiving speed. Decoders are software that transform the sounds into letters, but they&nbsp;
                                        fail a lot when the transmission is made by a human or there is too much noise on the frequency.&nbsp;
                                        Morse Code is an amazing mindfulness practice that helps alleviate anxiety.<br/><br/>

                                        <div className={'youtube-container'}>
                                            <iframe src="https://www.youtube.com/embed/iEmcNjtnMec"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen></iframe>
                                        </div>
                                        <br/>
                                        Above on example of a Morse Code conversation.&nbsp;
                                        You will realize that the subtitles don't make any sense ... it's because in morse code we uses a lot of abbreviations.
                                        In the video you will see HNY (Happy new year), TU (thank you), 5NN (it's a signal strength measure) and some
                                        other letters we call "callsigns".
                                        <br/><br/>
                                    </li>
                                    <li>
                                        <b>Digital:</b> when a computer uses radio waves to transmit information. Just like your phone does, but in a much lower rate.
                                        All digital communication inside the Amateur Radio frequencies are made via open protocol, it means that anyone listening to
                                        it with the proper software can decode it. There's no cryptography here!&nbsp;
                                        <a href={'https://youtu.be/ASr7UoqwU-8'} target={'_blank'}>Here's an example</a> of a contact made via a digital mode.
                                    </li>
                                </ul>
                            </p>

                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6">What is a callsign?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={'accordion-content'}>
                            <p>
                                A callsign is an unique identifier of a properly licensed individual. To get a Amateur Radio callsign&nbsp;
                                you have to pass a test. This test is not hard and its goal is to make sure you are completely&nbsp;
                                capable of operating your equipment and making sure that you understand the ethical aspects of operating an&nbsp;
                                Amateur Radio station.
                            </p>
                            <p>
                                Depending on the radio waves propagation conditions, you can be heard in the entire planet ...&nbsp;
                                so avoiding talking about religion and politics is a good example of ethics in Amateur Radio.
                            </p>
                            <p>
                                A callsign has the information of your location plus a few letters you can choose.&nbsp;
                                Example: VE2ZDX , means:
                                <ul>
                                    <li><b>VE:</b> code for Canada</li>
                                    <li><b>2:</b> Quebec</li>
                                    <li><b>ZDX:</b> letters chosen by the callsign owner</li>
                                </ul>
                                Another example: PP5AX
                                <ul>
                                    <li><b>PP:</b> code for Brazil</li>
                                    <li><b>5:</b> State of Santa Catarina</li>
                                    <li><b>AX:</b> letters chosen by the callsign owner</li>
                                </ul>
                                A country can have more than one "code". Canada can be VE, VA, VO, etc... Brazil can be PU, PP, PR, PY, etc..
                            </p>
                            <p>
                                When we do a contact we can go to some websites where Amateur Radio Operators themselves&nbsp;
                                register their information. The most famous one is <a href={'https://www.qrz.com/'} target={'_blank'}>QRZ.com</a>.&nbsp;
                                Check it out and type one of the examples above in the search.
                            </p>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6">Tell me about your equipment</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={'accordion-content'}>
                            <p>The equipment necessary to practice this hobby is basically:</p>
                            <ul>
                                <li><b>Transceiver:</b> a Radio that is able to listen and transmit. Your FM radio only receives radio frequencies, this one can also transmit.</li>
                                <li><b>Antenna:</b> the antenna you need to receive and transmit.</li>
                                <li><b>Power supply:</b> 12 volts battery or a power supply that outputs 12 volts.</li>
                            </ul>
                            <p>
                                These equipments are not very expensive, they cost about the same of a cell phone.
                                But there's a problem with them: they are very hard to sell (practically impossible if you're not an Amateur Radio Operator).
                                Thus, Amateur Radio Operators are very careful when choosing/buying their equipment.
                            </p>
                            <p>
                                The good thing about them is that a Radio from 1950 does the same thing that a new top-of-the-line radio does.&nbsp;
                                Of course, it's nice to have a pretty and modern radio with all the filters, but in essence they do the same thing.&nbsp;
                                What really matters is the antenna.
                            </p>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6">Why do it at a park?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={'accordion-content'}>
                            <p>There are some very good reasons for that:</p>
                            <ul>
                                <li><b>HOA:</b>&nbsp;the Home Owners Association, which prevents the installation of
                                    external antennas. Specially the antennas we consider ideal for Amateur Radio,&nbsp;
                                    <a href={'images/example_antenna.jpg'} target={'_blank'}>click here for an example</a>, leaving us without any other option.<br/><br/></li>
                                <li>
                                    <b>Electrical noise:</b>&nbsp;appliances of many different types generates noise in Amateur Radio and other frequencies too.&nbsp;
                                    Going to a park is a way to avoid high levels of electrical noise.<br/><br/>
                                </li>
                                <li>
                                    <b>POTA:</b>&nbsp;there are some programs created to encourage the practice of the hobby. One of them is the Park On The Air or just POTA.&nbsp;
                                    In this program parks have an ID and the goal is to confirm contact with people transmitting from these parks. There's also SOTA (Summits on the air), IOTA (Islands on the Air) and so on...
                                </li>
                            </ul>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6">Listen to it online</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={'accordion-content'}>
                            <p>
                                You can hear the amateur radio frequencies online via Web SDR.&nbsp;
                                <a href={'http://rx.linkfanel.net/'} target={'_blank'}>This link</a> (or just look for "Kiwi SDR" on Google) will take you to a list of Web SDRs of the Kiwi platform.&nbsp;
                                Pick one of the stations in the map to listen to. You will see a water fall display, you just need to click where you see a station. You will understand when you see it..
                            </p>
                            <p>
                                Here are some I like to use:
                                <ul>
                                    <li><a href={'http://websdr4.sdrutah.org:8904/m.html'} target={'_blank'}>Northern Utah</a></li>
                                    <li><a href={'http://ve3hoa.ddns.net:8073/'} target={'_blank'}>Ontario</a></li>
                                    <li><a href={'http://na5b.com:8901/'} target={'_blank'}>Washington</a></li>
                                </ul>
                            </p>
                            <p>
                                There are many frequencies you can listen to, the most populated ones are:
                            </p>
                            <ul>
                                <li>
                                    <b>21 Mhz:</b> start your search at 21200.00 mode USB. This frequency is more populated during the start of the day.
                                </li>
                                <li>
                                    <b>14 Mhz:</b> start your search at 14200.00 mode USB. This frequency is more populated during the afternoon.
                                </li>
                                <li>
                                    <b>7 Mhz:</b> start your search at 7150.00 mode LSB. This frequency is more populated during the evening.
                                </li>
                                <li>
                                    <b>3 Mhz:</b> start your search at 3900.00 mode LSB. This frequency is more populated later at night.
                                </li>
                            </ul>
                            <p>
                                Remember the <a href={'https://www.qrz.com/'} target={'_blank'}>QRZ.com</a>? If you hear a callsign you can look for it in there and see who's transmitting!
                            </p>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6">Learn more about it</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={'accordion-content'}>
                            <p>
                                Regarding the license, <a href={'https://www.rac.ca/how-to-begin/'} target={'_blank'}>Radio Amateurs of Canada</a> is a great place to start.
                            </p>
                            <p>
                                If you would like to watch more people practicing the hobby:
                                <ul>
                                    <li><a href={'https://www.youtube.com/@K3JRZOnTheAir'} target={'_blank'}>K3JRZ</a> - USA</li>
                                    <li><a href={'https://www.youtube.com/@COASTALWAVESWIRES'} target={'_blank'}>K4OGO</a>  - USA</li>
                                    <li><a href={'https://www.youtube.com/@AmateurRadioUK'} target={'_blank'}>M0GQC</a> - United Kingdom </li>
                                    <li><a href={'https://www.youtube.com/@OM0ET'} target={'_blank'}>OM0ET</a> - Slovak Republic </li>
                                    <li><a href={'https://www.youtube.com/@ThomasK4SWL'} target={'_blank'}>K4SWL</a>  - USA</li>
                                    <li><a href={'https://www.youtube.com/@KD2YDN'} target={'_blank'}>KD2YDN</a>  - USA</li>
                                    <li><a href={'https://www.youtube.com/@sotacwec7zt426'} target={'_blank'}>EC7ZT</a>  - Spain</li>
                                </ul>
                            </p>

                        </div>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
}

export default HomePage;