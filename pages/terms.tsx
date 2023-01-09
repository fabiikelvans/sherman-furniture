import React from 'react';
import {Head} from "../seo/Head/Head";
import Nav from "../components/Header/Nav/Nav";
import {titan} from "./shop";
import Footer from "../components/Footer/Footer";

function Terms() {
    return (
        <div>
            <Head title='Sherman Furniture - Terms & Conditions' description='Modern furniture and design store'/>

            <div className='relative h-[60vh] '>
                <Nav/>
                <div className="absolute -z-10 top-0 left-0 header h-full w-full flex justify-center items-end">
                        <h1 className='text-4xl text-white z-50 font-bold' style={titan.style}>Terms & Conditions</h1>
                </div>
            </div>

            <div className='spacing text-md text-gray-300 font-light'>
                <h2 className='font-semibold mb-8'>Last updated: January 03, 2023</h2>
            <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use www.shermanfurniture.com's website if you do not accept all of the terms and conditions stated on this page.</p>

                <p className='mt-4'>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: “Client”, “You” and “Your” refers to you, the person accessing this website and accepting the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of Kenya. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
            </div>

                <div className='my-6'>
                    <h4 className='font-bold text-white'>Cookies</h4>
                    <p className='my-2'>Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.</p>
                </div>

                <div className='my-6'>
                    <h4 className='font-bold text-white'>Linking to this Website</h4>
                    <p className='my-2'>
                        You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists. You must not establish a link from any website that is not owned by you. This Website must not be framed on any other site, nor may you create a link to any part of this Website other than the home page. We reserve the right to withdraw linking permission without notice.
                    </p>
                    <p>
                        Disclaimer as to ownership of trade marks, images of personalities and third party copyright
                        Except where expressly stated to the contrary all persons (including their names and images), third party trade marks and content, services and/or locations featured on this Website are in no way associated, linked or affiliated with www.shermanfurniture.com and you should not rely on the existence of such a connection or affiliation. Any trade marks/names featured on this Website are owned by the respective trade mark owners. Where a trade mark or brand name is referred to it is used solely to describe or identify the products and services and is in no way an assertion that such products or services are endorsed by or connected to www.shermanfurniture.com

                    </p>
                </div>


                <div className='my-6'>
                    <h4 className='font-bold text-white'>Indemnity</h4>
                    <p className='my-2'>
                        You agree to indemnify, defend and hold harmless www.shermanfurniture.com its directors, officers, employees, consultants, agents, and affiliates, from any and all third party claims, liability, damages and/or costs (including, but not limited to, legal fees) arising from your use this Website or your breach of the Terms of Service.
                    </p>
                </div>


                <div className='my-6'>
                    <h4 className='font-bold text-white'>Invalidity</h4>
                    <p className='my-2'>
                        If any part of the Terms of Service is unenforceable (including any provision in which we exclude our liability to you) the enforceability of any other part of the Terms of Service will not be affected all other clauses remaining in full force and effect. So far as possible where any clause/sub-clause or part of a clause/sub-clause can be severed to render the remaining part valid, the clause shall be interpreted accordingly. Alternatively, you agree that the clause shall be rectified and interpreted in such a way that closely resembles the original meaning of the clause /sub-clause as is permitted by law.
                    </p>
                </div>

                <div className='my-6'>
                    <h4 className='font-bold text-white'>Complaints</h4>
                    <p className='my-2'>
                        We operate a complaints handling procedure which we will use to try to resolve disputes when they first arise, please let us know if you have any complaints or comments.
                    </p>
                </div>


                <div className='my-6'>
                    <h4 className='font-bold text-white'>Waiver</h4>
                    <p className='my-2'>
                        If you breach these conditions and we take no action, we will still be entitled to use our rights and remedies in any other situation where you breach these conditions.
                    </p>
                </div>

                <div className='my-6'>
                    <h4 className='font-bold text-white'>Entire Agreement</h4>
                    <p className='my-2'>
                        The above Terms of Service constitute the entire agreement of the parties and supersede any and all preceding and contemporaneous agreements between you and www.shermanfurniture.com. Any waiver of any provision of the Terms of Service will be effective only if in writing and signed by a Director of www.shermanfurniture.com.
                    </p>
                </div>



            </div>

            <Footer/>
        </div>

    );
}

export default Terms;