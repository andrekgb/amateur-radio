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
                If you landed at this page it's probably because you have met someone at a park using an Amateur Radio, also known as Ham Radio.<br/>
                This page was created to answer some of the questions you might have about it.
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
                            <p>Translating to understandable terms, It's a service that the majority of its users use as a hobby. This hobby consists basically of talking to other Amateur Radio Operators over the radio and/or technical experimentation.</p>
                            <p>All the communication using the frequencies allocated to Amateur Radio are public. It means that everyone can hear or decode it (in case of Morse Code or Digital modes).</p>
                            <p><b>I'll teach you how to listen to it via the internet in one of these questions</b></p>

                            <p>Below an example of a Amateur Radio contact:</p>

                            <div className={'youtube-container'}>
                                <iframe src="https://www.youtube.com/embed/b0009QY5X2s"
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
                                stop at a certain frequency and broadcast our presence. Other Amateur Radio Operators who listen to it can reply to your call.&nbsp;
                                They can be in the context of a friendly conversation, trying to get a contact with a specific country (with the objective of talking
                                to all the countries on the planet) or competitions (number of contacts x number of countries = final score).
                            </p>
                            <p>
                                These conversations can be via:
                                <ul>
                                    <li>
                                        <b>Audio:</b> or voice. <a href={'https://youtu.be/p7pzlb5074c'} target={'_blank'}>Here's another example of it</a>.
                                        To be able to establish a voice contact both station involved in the conversation need to have a good output power
                                        (watts) so both sides can completely understand all the nuances of the human voice.<br/><br/>
                                    </li>
                                    <li>
                                        <b>Morse Code:</b> Yep, people still use it. It's the most effective way of doing Amateur Radio, without a computer because people&nbsp;
                                        hearing it do not need to understand all the nuances of the human voice. They just need to understand the "beep", thus making it possible&nbsp;
                                        for Amateur Radio Operators to use less power output and compromised antennas.
                                        Each letter of the alphabet has a sound. The amateur Radio Operator listens and writes down the letters, or just keep in his mind,
                                        until it forms a word. Some people also use decoders, which are software that transform the sounds into letters, but these
                                        decoders fail a lot when the transmission is made by a human, and not via software. <br/><br/>
                                        Morse Code is an amazing mindfulness practice that helps alleviate anxiety.&nbsp;
                                        <a href={'https://youtu.be/iEmcNjtnMec'} target={'_blank'}>Here's an example</a> of a Morse Code conversation. <br/>
                                        You will realize that the subtitles don't make any sense ... it's because in morse code we uses a lot of abbreviations.
                                        In the video you will see HNY (Happy new year), TU (thank you), 5NN (it's a signal strength measure) and some
                                        other letters we call "callsigns". I'll explain them later.
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
                                A callsign is an unique identifier for a properly licensed individual. To get a Amateur Radio callsign&nbsp;
                                you have to pass a test. This test is not hard and the goal of this test is to make sure you are completely&nbsp;
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
                                <li><b>Transceiver:</b> it's just a fancy word for a Radio that is able to listen and transmit. You know the radios you use to listen to music? It's like that but you can also transmit and be heard by other people.</li>
                                <li><b>Antenna:</b> the antenna you need to receive and transmit.</li>
                                <li><b>Power supply:</b> 12 volts battery or a power supply that outputs 12 volts.</li>
                            </ul>
                            <p>
                                These equipments are not expensive, they cost about the same of a cell phone.
                                But there's a problem with them: they are very hard to sell (practically impossible if you're not a Amateur Radio Operator).
                                So Amateur Radio Operators are very careful when choosing their equipment.
                            </p>
                            <p>
                                The good thing about them is that a Radio from 1950 does absolutely the same thing of a top-of-the-line radio recently released.&nbsp;
                                Of course it's nice to have a pretty and modern radio with all the filters, but in essence it does the same things that the 70 years old radio does.&nbsp;
                                The important part of the system is the antenna!
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
                                <li><b>HOA:</b> the Home Owners Association, which prevents the installation of
                                    external antennas. Specially the antennas we consider ideal for Amateur Radio,&nbsp;
                                    <a href={'images/example_antenna.jpg'} target={'_blank'}>click here for an example</a>, leaving us without any other option.<br/><br/></li>
                                <li>
                                    <b>Electrical noise:</b>&nbsp;appliances of many different types generates noise in Amateur Radio and other frequencies too.&nbsp;
                                    Sometimes when operating from home you cannot hear most of the station that are transmitting due to electrical noise. Going to a park&nbsp;
                                    allows you to be a bit further from electrical noise.. the altitude of a location helps too.
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
                                    <li><a href={'https://www.youtube.com/@K3JRZOnTheAir'} target={'_blank'}>K3JRZ</a> </li>
                                    <li><a href={'https://www.youtube.com/@COASTALWAVESWIRES'} target={'_blank'}>K4OGO</a> </li>
                                    <li><a href={'https://www.youtube.com/@AmateurRadioUK'} target={'_blank'}>Amateur Radio UK</a> </li>
                                    <li><a href={'https://www.youtube.com/@ThomasK4SWL'} target={'_blank'}>K4SWL</a> </li>
                                    <li><a href={'https://www.youtube.com/@KD2YDN'} target={'_blank'}>KD2YDN</a> </li>
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