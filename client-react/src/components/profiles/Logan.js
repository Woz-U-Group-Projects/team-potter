import React from "react";
import { Link } from "react-router-dom";
import MinifiedHeader from "../layouts/MinifiedHeader";
import Footer from "../layouts/Footer";
import Logan from "../../Images/Logan_2.jpg";

class LoganS extends React.Component {

    render() {
        return (
            <div>
                <MinifiedHeader />

                <div className="container logan">
                    <h1>Logan Sauer</h1>
                    <br />
                    <img id='Logan' src={Logan} alt="Logan" />
                    <br />
                    <br />
                    <p>
                        Hello everyone, my name is Logan but I also go by "Sig"! I'm one of the original site creators along side with Malik 
                        and Dickson, fellow Woz-U students. I just wanted to take a moment to introduce myself and give a brief look into who I am.

                        <br />
                        <br />

                        I'm first and most importantly, a husband, father to two children (3yr girl & 8mo boy), and an Air Force Veteran.
                        Since '96 I've always had a passion and the urge to study technology as a whole, from how they function and were built to what makes them run
                        and how they are able to process information. This has been the driving force for my paths taken in life.
                        I served overseas in Ramstein Germany for my entire time in the Air Force as a Network & Signal Analyst, which basically means
                        I would track and gain access to terrorist Networks to then compromise those systems for the purpose of gaining intelligence on
                        our enemies.

                        <br />
                        <br />

                        After getting out of the military in 2012 I met my wife and followed her up to Manhattan KS since she was attending KSU, we've
                        been living here ever since. I moved up here and was recruited by a cell phone company, but while working my full time job I also decided to
                        start up a side hustle where I would build, repair, and modify computers and gaming consoles. This was a defining moment because I started having
                        clients reach out to me for creating websites for them, which then lead to clients asking if I code program an application for them from scratch. Which
                        at that time I couldn't since I didn't know how. I started looking for schools to help with this and went through a couple colleges only to find out
                        the school in fact didnt' really touch programming other than one course that was more history than how to program. 
                        
                        <br />
                        <br />

                        So I stopped and started to just try to teach myself, this is when I received a call from Woz-U about an inquiry I submitted months prior. So I listened to
                        their pitch and in turn grilled them about the programs by asking millions of questions to make sure this would get me where I wanted in life. Needless to say after
                        a few hours of listening and hard questioning, I took a chance and I'm incredibly happy that I took that chance. I enrolled, took the Full Stack course over several months,
                        and now graduated with the feeling of finally completing that step in path to becoming a developer/programmer.

                    </p>

                    <Link className="btn btn-primary" to={'/Creators/'}>
                        Go Back
                    </Link>

                </div>
                <Footer />
            </div>
        )
    }
};



export default LoganS;