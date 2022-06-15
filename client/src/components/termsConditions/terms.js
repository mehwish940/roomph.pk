import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../header/Topbar";
import { BiMap } from "react-icons/bi";
import Footer from "../footer/Footer";
import './terms.css';

var monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export class Terms extends Component {
    myFunction = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    render() {
        return (
            <section className="">
                <Topbar />
                <Container fluid>
                    <Row className="p-2" style={{ backgroundColor: "white", borderRadius: "0px 0px 0px 0px", border: "1px solid rgb(205, 206, 206)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)" }}>
                        {/* For larger Screens */}
                        <Col className="d-none d-md-block" xs={10} style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                            <Row className="p-2">
                                <Col>
                                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none', textTransform: 'capitalize' }}>Islamabad</button>
                                    <div >
                                        <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>12-13 </button>
                                        {/* <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {(new Date()).toLocaleString('default', { month: 'short' })} - {this.props.match.params.checkout.substring(7)}th {(new Date()).toLocaleString('default', { month: 'short' })} </button> */}
                                        <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{' '} . 2 guests</button>
                                    </div>
                                </Col>
                                <Col xs={2} className="my-auto mx-auto">
                                    <img className="searchLogo float-right" src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
                                </Col>
                            </Row>
                        </Col>
                        {/* For Smaller Screens */}
                        <Col xs={8} className="d-md-none" style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                            <Row className="">
                                <Col>
                                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none', textTransform: 'capitalize' }}>Islamabad</button>
                                    <div style={{ height: '15px' }}>

                                    </div>
                                    <div style={{ position: 'absolute', top: '15px' }}>
                                        <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>10th - 12th Jun </button>
                                        <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{' '} . 2 guests</button>
                                    </div>
                                </Col>
                                <Col xs={2} className="my-auto mx-auto">
                                    <img className="searchLogo float-right" src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
                                </Col>
                            </Row>
                        </Col>
                        <Col className='my-auto mx-auto'>
                            <div className="iitem float-right">
                                <BiMap className="mapPic" />
                                <span className="ccaption">Map</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col className="m-0 p-0">
                            <h4 className="terms"><span className="termsText">Terms and<br /> <span className="conditionText">Conditions</span></span></h4>
                            <p className="termsConditions mb-1 pb-1">The terms “we”, “us”, “our”, “Company” and “Roomph” refers to Tech Pvt. Ltd, a company registered under the Corporate Laws of Pakistan, having its Registered Office at No.7, Third Floor, Meridian Software Technology, Opposite Rehmanabad Main Metro Station, Murree Road, Rawalpindi and Principal Office at 13-Y, Chaudhry Plaza, Jinnah Super, F-7 Markaz, Islamabad., its affiliates and/or their respective suppliers and providers and “you”, “User(s)”, “your” and/or “yourself” refers to the individual person creating an account with us and/or the customer booking a reservation though us directly through this website, or indirectly through any of our affiliates through whom we provide services.<br />
                                The Terms shall govern the use of the website, mobile application, call centers (collectively referred to as “ROOMPH Platform/Platform”) which enables the User to connect with us in relation to the services offered through the ROOMPH Platform (“Services”).<br /><br />
                                <b>PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING, USING, OBTAINING OR AVAILING ANY PRODUCTS OR SERVICES BY ROOMPH. BY ACCESSING AND/OR USING THE ROOMPH PLATFORM (OTHER THAN TO READ THESE TERMS OF USE FOR THE FIRST TIME) YOU ARE AGREEING TO COMPLY WITH THESE TERMS OF USE, WHICH MAY BE CHANGED/MODIFIED FROM TIME TO TIME WITHOUT ANY NOTICE AT SOLE DISCRETION OF ROOMPH. USE OF PLATFORM BY YOU SIGNIFY YOUR ACCEPTANCE TO ALL SUCH TERMS, CONDITIONS, AND NOTICES. IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS OF USE, YOU MAY DISCONTINUE ACCESS OR USE OF THE PLATFORM.THESE CONDITIONS MUST BE READ IN CONJUNCTION WITH ANY OTHER APPLICABLE TERMS AND CONDITIONS GOVERNING THE USE OF ROOMPH PLATFORM AND SERVICES.</b><br /><br />
                                You agree that these Terms of Use are supported by good and valuable consideration the receipt and sufficiency of which you hereby acknowledge. Such consideration includes your use of the Platform and the information and content available on the same.<br />
                                The Platform is only made available to users 18 years of age or above. While individuals under the age of 18 may utilize/browse the ROOMPH Platform, but they shall do so only with the involvement, guidance and supervision of their parents and / or legal guardians, under such parent /legal guardian’s registered account. ROOMPH reserves the right to terminate User’s access and refuse to provide User with access to the ROOMPH Platform if ROOMPH discovers that User is under the age of 18 years. Your use of this Platform is at your own risk and initiative and you shall be responsible for compliance with any applicable local or international laws.<br />
                                By using this Platform and/or participating in any Platform activities thereby providing us with your personal information, you (i) consent to the transfers and processing of any information you provide to the Platform, (ii) understand that this Platform will use your information only for the purposes of the Services provided by Roomph and shall be given the requisite protection and care during use of the same (iii) Unless you have elected to remain anonymous through your device and/or platform settings, we reserve the right to combine personally identifiable information with publicly available information or information obtained from third parties or affiliates automatically and (iv) You may accept or decline the cookies when you access ROOMPH Platform. It is the User’s responsibility to set his browser to alert him to accept or to reject cookies.<br /><br />
                                <b>Disclaimer</b><br /><br />
                                The information on the Platform is published in good faith and for general information/guideline purposes only. We aim to present the most accurate information possible but make no claims or guarantees about the veracity of anything here, and we accept no liability. ROOMPH do not guarantee the accuracy of the ratings. ROOMPH may make improvements and/or changes on this website at any time. Any reliance you place on such information is therefore strictly at your own risk.<br />
                                In no event shall ROOMPH be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of, or in any way connected with, the use of this website or with the delay or inability to use this website, or for any information, products and services obtained through this website, or otherwise arising out of the use of this website, whether based on contract, tort, strict liability, or otherwise.<br />
                                In no event shall ROOMPH be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of, or in any way connected with, the use of this website or with the delay or inability to use this website, or for any information, products and services obtained through this website, or otherwise arising out of the use of this website, whether based on contract, tort, strict liability, or otherwise.<br />
                                <b>A. PURPOSE AND SCOPE</b><br />
                                ROOMPH through the ROOMPH Platform connects Users with third parties to use ROOMPH branded properties managed and/or owned by third parties (“Channel Partners”) or ROOMPH as the case may be to help the Users avail the Services. ROOMPH Platform offers Services to its Users by offering its products (“ROOMPH Products”) which shall include but shall not be limited to:<br />
                                a. ROOMPH Rooms<br />
                                b. ROOMPH Premium<br />
                                <b>B. USE OF THE SERVICE</b><br />
                                You may access the Platform by registering to create an account ("Account") through ROOMPH ID and password or other log-in ID and password (collectively, the "Account Information"). The registration and use of the Account are limited solely for the purposes of acquiring the Services offered at the Platform and is subject to the Terms of Use. You will be responsible for maintaining the confidentiality of the Account Information and are fully responsible for all activities that occur under Your Account.<br />
                                ROOMPH also allows restricted access to the ROOMPH Platform for unregistered users. At the time of registration, you shall ensure that the Account Information provided by you in the ROOMPH Platform registration form is complete, accurate and up to date. Use of another user’s account information is expressly prohibited.<br />
                                <b>C. ACCEPTABLE USE</b><br />
                                You may not access our Platform or avail Services in any way that violates any applicable local, national or international law, rules or regulations. You agree not to access without authority, interfere with, damage or disrupt any part of our Platform or our Service or any equipment used in the provision of our Service. We reserve the right to take appropriate legal action against anyone who is found engaged in activities that hinder other people’s access of the Platform, makes improper use of our support services or submit false reports of abuse or misconduct and/or carries out any prohibited activity according to the local community standards and as determined by Roomph in its sole discretion.<br /><br />
                                You agree to <b>(a)</b> immediately notify ROOMPH of any unauthorized use of your Account Information or any other breach of security, <b>(b)</b> ensure that you exit/log out from the Account at the end of each session <b>(c)</b> not disclose your password to any third party and <b>(d)</b> you will take responsibility for any activities or actions under your Account, whether or not you have authorized such activities or actions. ROOMPH cannot and shall not be liable for any loss or damage arising out of your failure to comply with this clause. You may be held liable for losses incurred by ROOMPH or any other customer or visitor to the ROOMPH Platform due to authorize or un-authorize use of your account as a result of your failure in keeping its Account Information secure and confidential.<br />
                                As a pre-condition of use of the ROOMPH Platform the User agrees, acknowledges, confirms and undertakes that the registration data, information/data provided or uploaded onto the ROOMPH Platform by the User:<br />                                <b>a.</b> shall not be false, inaccurate, misleading or incomplete; or<br />
                                <b>b.</b> shall not be fraudulent or involve the use of counterfeit or stolen Credit Cards; or<br />
                                <b>c.</b> shall not infringe any third party's intellectual property, trade secret or other proprietary rights or rights of publicity or privacy; or<br />
                                <b>d.</b> shall not be defamatory, libelous, unlawfully threatening or unlawfully harassing; or<br />
                                <b>e.</b> shall not create liability for ROOMPH or cause ROOMPH to lose (in whole or in part) the services of ROOMPH’s ISPs or other service providers/suppliers. If the User contravenes the foregoing or ROOMPH has reasonable grounds to suspect that the User has contravened the foregoing, ROOMPH has the right to indefinitely deny or terminate User's access to the ROOMPH Platform and to refuse to honor the User's request(s).<br />
                                <b>D. RESERVATION/BOOKING TERM</b><br />
                                The User agrees, acknowledges and confirms that before placing any order on the ROOMPH Platform, the User shall check the Service description and price carefully and by placing an order for a Service you agree to be bound by these terms including the Services’ description. You shall only place the order after fully satisfying yourself with the price, description, look as has been displayed on ROOMPH Platform. ROOMPH shall not be responsible for unsatisfactory or delayed performance of services or damages or delays as a result of Channel Partner’s act’s or omissions. The User does hereby agree, promise, declare, confirm, covenant, undertake and represent & warrant to ROOMPH:<br />
                                <b>a.</b> prevents/may prevent the User from: (i) entering into a valid contract under the applicable laws; and (ii) making valid payment to ROOMPH for Services ordered by the User.<br />
                                <b>b.</b> In the event of detecting any suspicious activity from User’s account, ROOMPH reserves the right to cancel all pending and future orders owing to any such incident without any liability to the User.<br />
                                <b>c.</b> In a credit card transaction; you must use your own credit card for which User has full right & authority to validly use such Credit Card for making payment to ROOMPH. ROOMPH shall not be liable for any credit card fraud. The liability to use a card fraudulently will be on the User and the onus to 'prove otherwise' shall be exclusively on User.<br />
                                <b>d.</b> While using the ROOMPH Platform User shall always strictly comply with the payment procedure and the terms mentioned herein in their entirety.<br />
                                <b>e.</b> Your use of the Service shall be deemed that you are fully satisfied with the description, look and design of the accommodation and usage fee of the accommodation as has been displayed on ROOMPH's Platform.<br />
                                <b>f.</b> The User agrees and acknowledges that in the ROOMPH Platform all Services are offered only at the sole discretion of ROOMPH.<br />
                                <b>5. Terms specifically applicable to Customer:</b><br />
                                Users availing Services and ROOMPH Products via the ROOMPH Platform (hereinafter referred to as “Customers”) shall be governed by the following terms and conditions:
                                <span id="dots" className="pl-1">...</span><br /><span id="more">
                                    <b>E. PAYMENT & USAGE FEE</b><br />
                                    The price of the Products and Services are listed on the Platform. Prices will either be inclusive or exclusive of taxes, as stated on the Platform. The prices are subject to change at any time without any notice. You hereby agree and understand that you will have to pay the usage fee as mentioned on the ROOMPH Platform for the concerned Services via the payment mode provided on the ROOMPH Platform upon which User’s requested reservation will be confirmed. Once the reservation has been confirmed, ROOMPH will debit the usage fee from the payment mode selected by the User. The User agrees and acknowledges that the payment procedure may call for and require additional verification of or information from the User and the User undertakes to provide complete, correct and proper information.<br />
                                    ROOMPH uses third party payment providers to receive payments from User. ROOMPH is not responsible for delays or erroneous transaction execution or cancellation of reservation due to payment issues. ROOMPH takes utmost care to work with third party payment providers, but does not control their systems, processes, technology and work flows, hence cannot be held responsible for any fault at the end of payment providers.<br />
                                    User making payments for Services provided via the ROOMPH Platform, would be making payments to the entities mentioned as per the link mentioned in the tab named Payment for Services.<br />
                                    <b>F. TERMINATION</b><br />
                                    We reserve the right in our sole discretion and at any time to terminate or suspend your use of and/or block your access to the Platform for any reason including without limitation, failure to comply with the letter and spirit of the these Terms of Use.<br />
                                    <b>G. No Warranty</b><br />
                                    The information, materials, Services available on the ROOMPH Platform are on an “As is” basis and may inadvertently include inaccuracies, typographical errors, or outdated information, ROOMPH is not responsible for and shall not be bound to honor typographical or pricing errors on the ROOMPH Platform. ROOMPH reserves the right to refuse or cancel orders at any time, including but not limited to the orders that contain incorrect prices or product descriptions, orders in which ROOMPH believes the User has violated applicable laws or these terms, orders that ROOMPH believes are harmful to ROOMPH or orders that ROOMPH believes are fraudulent or based on illegal, fraudulent or deceitful use/furnishing of information or based on false information.<br />
                                    It is hereby further clarified that ROOMPH and Channel Partners are separate and independent entities and ROOMPH does not work as representative or agent of the Channel Partner. By making a reservation/booking at the listed Accommodations the User enters into commercial/ contractual terms as offered by and agreed to between Channel Partner and the User alone.<br />
                                    By using the ROOMPH Platform you hereby acknowledge and agree that ROOMPH is not a hotel/guest house owner/ and has no control over the conduct or behavior of the management of any property or the quality, fitness or the suitability of the services provided by third party offering services. Commentary and other materials posted on our Service are not intended to amount to advice on which reliance should be placed. We therefore disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to our Service, or by anyone who may be informed of any of its contents.<br />
                                    ROOMPH expressly disclaims any warranties whether express or implied about the accuracy, completeness, correctness, suitability, reliability, availability, timeliness, quality, continuity, performance, error free or uninterrupted operation/functioning, fitness for a particular purpose, workmanlike effort, non-infringement, lack of viruses or other harmful components of the Services and/or products.<br />
                                    ROOMPH shall not be responsible for the delay or inability to use the ROOMPH Platform unrelated functionalities, the provision of or failure to provide functionalities, or for any information, software, Services, functionalities and related graphics obtained through the ROOMPH Platform, or otherwise arising out of the use of the ROOMPH Platform, whether based on contract, tort, negligence, strict liability or otherwise. Further, ROOMPH shall not be held responsible for non-availability of the ROOMPH Platform during periodic maintenance operations or any unplanned suspension of access to the ROOMPH Platform that may occur due to technical reasons or for any reason beyond ROOMPH’s control. The User understands and agrees that any material or data downloaded or otherwise obtained through the ROOMPH Platform is done entirely at their own discretion and risk and they will be solely responsible for any damage to their computer systems or loss of data that results from the download of such material or data. ROOMPH accepts no liability for any errors or omissions, with respect to any information provided to the User.<br />
                                    <b>H. Third Party Links</b><br />
                                    The ROOMPH Platform may at ROOMPH’s sole discretion, contain links to ROOMPH Platforms owned and maintained by persons or entities other than ROOMPH. ROOMPH may also provide links to the other sites for purpose of enabling the User to make payment to ROOMPH. Any of the aforementioned links do not constitute an endorsement by ROOMPH of any such sites and are provided only as a convenience. ROOMPH is not responsible for the content or links displayed on such sites. ROOMPH is not responsible for the privacy practices of such sites which ROOMPH does not own, manage or control. Similarly, ROOMPH does not regularly review, and makes no warranty or representation regarding materials posted, or Services or services offered, on the sites to which this ROOMPH Platform may be linked and ROOMPH shall not be responsible for any deficiency thereof. ROOMPH does not endorse any or all of the materials, Services, and services available on such linked sites, and ROOMPH expressly disclaims responsibility for the contents of any linked site, the accuracy of any information contained in a linked site, and the quality of the Services and services offered at any linked site. Any decision to view the contents of any linked site is solely the responsibility of User and is made at User’s own risk.<br />
                                    If there is a dispute between the User(s) and any third party, you understand and agree that we are under no obligation to become involved. If there is such a dispute, you hereby release Roomph, our Affiliate Companies, officers, directors, employees and distribution partners etc. (collectively, the “Indemnified Entities”) from claims, demands and damages of any kind or nature, arising out of, relating to, or in any way connected with such dispute.<br />
                                    <b>I. Intellectual Property</b><br />
                                    ROOMPH is either the owner or the licensee of all intellectual property rights on the Platform and in the content published on the Platform. All artwork, advertisement pictures, branding, text, graphics, designs, brand logos, audio, video, interfaces and /or any other information is subject to third party proprietary rights. You may not modify, publish, copy, transmit, transfer, sell, reproduce, modify create derivative works from, license, distribute, frame, hyperlink, download, repost, perform, translate, mirror, display or commercially exploit the same in any way.<br />
                                    The User agrees that any feedback, comments, ideas, suggestions, information, or any other content which User contributes to ROOMPH or ROOMPH Platform (including the name you submit with any content) will be deemed to include a royalty-free, perpetual, irrevocable, nonexclusive right and license for ROOMPH to adopt, publish, reproduce, disseminate, transmit, distribute, copy, use, create derivative works from, display worldwide, or act on such content without additional approval or consideration in any form, media, or technology now known or later developed for the full term of any rights that may exist in such content, and you waive any claim to the contrary. The User represents and warrants that User owns or otherwise controls all the rights to the content that he/she may contribute to this ROOMPH Platform and that use of his/her content by ROOMPH shall not infringe upon or violate the rights of any third party.<br />
                                    Additionally, all of our trademarks, service marks, trade names that may appear on the Platform are owned by us or our Channel Partners and/or Affiliated Companies. Except for the limited use rights granted to you in these Terms of Use, you shall not acquire any right, title or interest in the Platform or any Platform content. Any rights not expressly granted in these Terms of Use are expressly reserved.<br />
                                    <b>J. Indemnification</b><br />
                                    Without prejudice to and in addition to any other remedies, reliefs or legal recourses available to ROOMPH herein or any applicable laws or otherwise, User agrees to indemnify, defend and hold harmless including the Indemnified Entities from and against any and all losses, liabilities, claims, damages, demands, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) that may arise in connection with (i) your access to or use of the Platform; (ii) any actual or alleged violation or breach by you of these Terms; (iii) any actual or alleged breach of any representation, warranty or covenant that you have made to us; or (iv) your acts or omissions. You agree to cooperate fully with us in defense of any claim that is the subject of your obligations hereunder.<br />
                                    <b>K. Limitation of Liability</b><br />
                                    Under no circumstances shall the Indemnified Entities be liable for any damages of any kind whatsoever including but not limited to direct, indirect, incidental, punitive, exemplary and consequential damages, damages for loss of use, data or profits, or other intangible losses, arising out of, relating to, or in any way connected with the Platform or these Terms of Use.<br />
                                    Your sole remedy for dissatisfaction with the Platform including, without limitation, the Platform content is to stop using the Platform. Such limitation shall also apply with respect to the damages incurred by reason of Services received through or advertised in connection with the Platform or any links on the Platform. Such limitation shall also apply with respect to damages incurred by reason content posted by a third-party or conduct of a third party on the Platform.<br />
                                </span>
                            </p>
                            <button onClick={this.myFunction} id="myBtn" className="readMore mb-3">Read More</button>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </section>
        );
    }
}

export default Terms;