import React from 'react';
import {Head} from "../seo/Head/Head";
import Nav from "../components/Header/Nav/Nav";
import {titan} from "./shop";
import Footer from "../components/Footer/Footer";

function Privacy() {
    return (
        <div>
            <Head title='Sherman Furniture - Privacy Policy' description='Modern furniture and design store'/>

            <div className='relative h-[60vh] '>
                <Nav/>
                <div className="absolute -z-10 top-0 left-0 header h-full w-full flex justify-center items-end">
                    <h1 className='text-4xl text-white z-50 font-bold' style={titan.style}> Privacy Policy </h1>
                </div>
            </div>

            <div className='spacing text-md text-gray-300 font-light'>
                <h2 className='font-semibold mb-8'>Last updated: January 03, 2023</h2>
                <div>
                    <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. </p>

                </div>

                <div className='my-6'>
                    <h4 className='font-bold text-white'>Data Collection and Use</h4>
                    <p className='my-2'>
                        For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
                    </p>
                </div>


                <div className='my-6'>
                    <h4 className='font-bold text-white'>Usage Data</h4>
                    <p className='my-2'>
                        We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
                    </p>
                </div>



                <div className='my-6'>
                    <h4 className='font-bold text-white'>Cookies</h4>
                    <p className='my-2'>
                        Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.
                    </p>
                    <p>
                        Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
                    </p>
                </div>


                <div className='my-6'>
                    <h4 className='font-bold text-white'>Service Providers</h4>
                    <p className='my-2'>
                        We may employ third-party companies and individuals due to the following reasons:
                    </p>
                    <p>To facilitate our Service</p>
                    <p>To provide the Service on our behalf</p>
                    <p>To perform Service-related services</p>
                    <p>To assist us in analyzing how our Service is used.</p>
                    <p className='my-2'>
                        We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                    </p>
                </div>


                <div className='my-6'>
                    <h4 className='font-bold text-white'>Security</h4>
                    <p className='my-2'>
                        We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                    </p>
                </div>



                <div className='my-6'>
                    <h4 className='font-bold text-white'>Links to Other Sites</h4>
                    <p className='my-2'>
                        Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                    </p>
                    <p className='font-medium mt-3'>
                        Children’s Privacy
                    </p>
                    <p className='my-2'>
                        Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
                    </p>
                </div>

                <div className='my-6'>
                    <h4 className='font-bold text-white'>Changes to This Privacy Policy</h4>
                    <p className='my-2'>
                        We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
                    </p>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default Privacy;