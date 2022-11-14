export type Description = {
  text?: string
}

export type DescriptionTitle = {
  title?: string
  contain?: Description[]
  text?: string
}

export interface DataLegalTerms {
  title: string
  description: Description[]
}
export interface DataLegalPrivacy {
  title: string
  description: DescriptionTitle[]
}

export const termOfUse: DataLegalTerms[] = [
  {
    title: 'Acceptance of Terms of Use',
    description: [
      {
        text: `These terms and conditions are entered into by and between you, the user of this website ('you') and Monks, LLC as operator of this website (“Company”) The following terms and conditions (“Terms of Use”) govern your access and use of monksearth.com, (“Website”) including any content, functionality and services offered on or through monksearth.com.`
      },
      {
        text: `By using the Website, you accept and agree to be bound to and abide by these Terms of Use and our Privacy Policy, found at monksearth.com/legal, which is incorporated herein by reference. If you do not agree to any of these Terms of Use or the Privacy Policy, you must not access or use the Website.These Terms of Use apply to all users of the Website, including users who are also contributors of any content, photos, video, audio, information, and other materials or services on the Website. `
      },
      {
        text: ` The Website may contain links to third party websites or content that are not owned or controlled by Company. Company has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third-party websites. In addition, Company will not and cannot censor or edit the content of any third-party site. By using the Website, you expressly relieve Company from any and all liability arising from your use of any third-party website or content thereon. Accordingly, we encourage you to be aware when you link to third-party content and websites and to read the terms and conditions and privacy policies of such other websites.`
      }
    ]
  },
  {
    title: 'Changes to the Terms of Use',
    description: [
      {
        text: `Company may revise and update the Terms of Use from time to time in its sole discretion, with or without notice. All changes are effective immediately when posted and apply to all access to and use of the Website thereafter. Your continued use of the Website following the revised Terms of Use acknowledges your acceptance and agreement to any such changes thereto.`
      }
    ]
  },
  {
    title: 'Accessing the Website',
    description: [
      {
        text: `Company reserves the right to amend or withdraw this Website and any service or material provided on the Website in its sole discretion and without notice. Company will not be liable if, for any reason, all or part of the Website is unavailable at any time. From time to time, Company may restrict access to certain portals of the Website, or the entire Website, to all users.`
      },
      {
        text: ` In order to access some features of the Website, you may be asked to provide certain registration details or other information in creating an account. You may never use another person's account without permission. When creating your account, you must provide accurate and complete information. By creating your account, you agree that all information you provide to register with the Website or otherwise is governed by our Privacy Policy (monksearth.com/privacy-policy), and you consent to all actions Company takes with respect to your information consistent with the Privacy Policy.`
      },
      {
        text: `You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. You acknowledge that your account is personal to you, and you agree not to provide any other person with access to the Website or portions of it using your user name, password or other security information. You must notify Company immediately of any breach of security or unauthorized use of your account. You agree that Company will not be liable for losses caused by any unauthorized use of your account, and you may be liable for the losses Company or others incur due to such unauthorized use.`
      },
      {
        text: `Company reserves the right to disable any username, password or other identifier, whether chosen by you or provided by Company, at any time in its sole discretion if in its opinion you have violated any provision of these Terms of Use.`
      }
    ]
  },
  {
    title: 'Intellectual property Rights',
    description: [
      {
        text: `The Website and its content, features and functionality including without limitation, the text, software, scripts, graphics, photos, sou music, ßvideos, interactive features and the like (“Content”) and the trademarks, service marks and logos contained therein, are owned by or licensed to Company, subject to copyright, trademark, and other intellectual property rights under the United States and foreign laws and international conventions. Content on the Website is provided to you AS IS for your information and personal use only and may not be used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes whatsoever without the prior written consent of the respective owners. Company reserves all rights not expressly granted in and to the Website and the Content. You agree not to engage in the use, copying, or distribution of any of the Content other than expressly permitted herein obtained through the Website for any commercial purposes. If you download or print a copy of the Content for personal use, you must retain all copyright and other proprietary notices contained therein. You agree not to circumvent, disable or otherwise interfere with security related features of the Website or features that prevent or restrict use or copying of any Content or enforce limitations on use of the Website or the Content therein. Any use of the Website not expressly permitted by these Terms of Use constitutes a breach of the Terms of Use and may violate copyright, trademark and other laws.`
      }
    ]
  },
  {
    title: 'Prohibited Uses',
    description: [
      {
        text: `You may use this Website only for lawful purposes and in accordance with the Terms of Use.`
      },
      {
        text: `You agree that, while using the Website, you will not upload, post or transmit to or distribute or otherwise publish through the Website any materials that: (a) are in breach of any part of these Terms of Use (b) restrict or inhibit any other user from using and enjoying the Website, (c) constitute or encourage conduct that would constitute a criminal offence or give rise to civil liability, or (d) contain a virus or other harmful component, advertising of any kind, or false or misleading indications of origin or statements of fact.`
      },
      {
        text: `You also warrant and agree that you will not: (a) impersonate, or misrepresent your affiliation with any other person or entity; (b) upload, post, publish, transmit, reproduce, distribute or in any way exploit any information or other material obtained through the Website for commercial purposes (other than as expressly permitted by the provider of such information or other material); (c) engage in spamming or flooding (including through the use of any automated system, including without limitation “robots,” “siders,” “offline readers,” etc.); (d) attempt to gain unauthorized access to other computer systems through the Website; or (e) use the Website for any commercial solicitation purposes. Except as otherwise expressly permitted herein, you may not upload, post, publish, reproduce, transmit or distribute in any way any component of the Website itself or derivative works with respect thereto, as the Website is protected by copyright.`
      },
      {
        text: `You will not facilitate or encourage any violations of this Terms of Use or our policies. Company reserves the right to remove posts by, and accounts of, users of the Website who do not comply with these Terms of Use.`
      }
    ]
  },
  {
    title: 'DMCA Takedown Notices',
    description: [
      {
        text: `It is the policy of Company to respond to notices of alleged copyright infringement in compliance with the DMCA. In particular, if you are a copyright owner or an agent thereof and believe that any content on the website infringes upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act (“DMCA”) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):`
      },
      {
        text: `A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;`
      },
      {
        text: `Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;`
      },
      {
        text: `Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to permit Company to locate the material;`
      },
      {
        text: `Information reasonably sufficient to permit Company to contact you, such as an address, telephone number, and, if available, an electronic mail;`
      },
      {
        text: `A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and`
      },
      {
        text: `A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.`
      },
      {
        text: `The United States Copyright Office provides basic information, online, at http://www.loc.gov/copyright/circs/circ1.html, which can assist one in determining whether an exception or defense, such as fair use, may apply to the use of your copyrighted work.`
      },
      {
        text: `You acknowledge that if you fail to comply with all of the takedown notice requirements of this Section, your DMCA notice may not be valid. Upon proper service of a takedown notification as contemplated hereunder and in accordance with the DMCA Company will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged content from the Site. PLEASE NOTE THAT, IF YOU KNOWINGLY MISREPRESENT THAT ONLINE CONTENT IS INFRINGING, YOU MAY BE SUBJECT TO CIVIL PENALTIES. THESE PENALTIES MAY INCLUDE MONETARY DAMAGES, COURT COSTS, AND ATTORNEYS FEES INCURRED BY COMPANY, BY ANY COPYRIGHT OWNER, OR BY ANY COPYRIGHT OWNER’S LICENSEE THAT IS INJURED BY A RESULT OF OUR RELYING UPON YOUR MISREPRESENTATION.`
      }
    ]
  },
  {
    title: '6.1 COUNTER-NOTIFICATION: Restoration of Material',
    description: [
      {
        text: `Company will immediately remove any infringing content on the Website. If you have received a notice that material has been taken down pursuant to a copyright infringement claim, you may provide us with a counter notification in an effort to have the material in question restored to the site. Said notification must be given in writing to our DMCA Agent and must contain substantially the following elements pursuant to 17 USC Section 512(g)(3):`
      },
      {
        text: `Your physical or electronic signature;`
      },
      {
        text: `Your name, address, and phone number;`
      },
      {
        text: `Identification of the material and its location before it was removed;`
      },
      {
        text: `A statement under penalty of perjury that the material was removed by mistake or misidentification;`
      },
      {
        text: `Your consent to the jurisdiction of a federal court in the district where you live (if you are in the U.S.), or your consent to the jurisdiction of a federal court in the district where your service provider is located (if you are not in the U.S.); and`
      },
      {
        text: `Your consent to accept service of process from the party who submitted the takedown notice.`
      }
    ]
  },
  {
    title: 'Monitoring and Enforcement; Termination',
    description: [
      {
        text: `Company reserves the right to: (a) disclose your identity or other information about you to any third party who claims that material posted by you violates their rights, including their intellectual property rights or their right to privacy; (b) take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of the Website; and (c) terminate or suspend your access to all or part of the Website for any or no reason, including without limitation, any violation of these Terms of Use.`
      },
      {
        text: `Without limiting the foregoing, Company has the right to fully cooperate with any law enforcement authorities or court order requesting or directing Company to disclose the identity or other information of anyone posting any materials on or through the Website. YOU WAIVE AND HOLD HARMLESS COMPANY AND ITS AFFILIATES, LICENSEES AND SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING PARTIES DURING OR AS A RESULT OF ITS INVESTIGATIONS AND FROM ANY ACTIONS TAKEN AS A CONSEQUENCE OF INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.`
      }
    ]
  },
  {
    title: 'Reliance on Website Information',
    description: [
      {
        text: `The information presented on or through the Website is made available solely for general information purposes. Company does not warrant the accuracy, completeness or usefulness of this information. Any reliance you place on such information is strictly at your own risk. Company disclaims all liability and responsibility arising from any reliance placed on such materials by you or by anyone who may be informed of any of the Website’s contents.`
      },
      {
        text: `This Website may include content provided by third parties, including materials provided by other users, bloggers and third-party licensors, syndicators, aggregators and/or reporting services. All statements and/or opinions expressed in these materials, and all articles and responses to questions and other content, other than the content provided by Company, are solely the opinions and the responsibility of the person or entity providing those materials. These materials do not necessarily reflect the opinion of Company. Company is not responsible, or liable to you or any third party, for the content or accuracy of any materials provided by any third parties.`
      }
    ]
  },
  {
    title: 'Third-party Links in Website',
    description: [
      {
        text: `The Website contains links to third-party sites and resources, which are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. Company has no control over the contents of such third-party sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them. Your access of any of the third party websites linked to this Website is at your own risk and subject to the terms and conditions of use for such websites.`
      }
    ]
  },
  {
    title: 'Disclaimer of Warranties',
    description: [
      {
        text: `YOU AGREE THAT YOUR USE OF THE WEBSITE SHALL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE WEBSITE AND YOUR USE THEREOF. COMPANY MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THIS WEBSITE’S CONTENT OR THE CONTENT OF ANY SITES LINKED TO THIS SITE AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OFFENSES TAKEN OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR WEBSITE, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR WEBSITE, (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH OUR WEBSITE BY ANY THIRD PARTY, AND/OR (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT LINKED TO, POSTED, UPLOADED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA WEBSITE. COMPANY DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE WEBSITE OR ANY HYPERLINKED WEBSITE OR FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND COMPANY WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.`
      }
    ]
  },
  {
    title: 'Third-party Links in Website',
    description: [
      {
        text: `The Website contains links to third-party sites and resources, which are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. Company has no control over the contents of such third-party sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them. Your access of any of the third party websites linked to this Website is at your own risk and subject to the terms and conditions of use for such websites.`
      }
    ]
  },
  {
    title: 'Limitation of Liability',
    description: [
      {
        text: `IN NO EVENT SHALL COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR WEBSITE, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR WEBSITE, (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR WEBSITE BY ANY THIRD PARTY, AND/OR (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT UPLOADED, POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE WEBSITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION. YOU SPECIFICALLY ACKNOWLEDGE THAT COMPANY SHALL NOT BE LIABLE FOR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH YOU.`
      },
      {
        text: `The Website is controlled and offered by Company from its facilities in the United States of America. Company makes no representations that the Website is appropriate or available for use in other locations. Those who access or use the Website from other jurisdictions do so at their own volition and are responsible for compliance with local law.`
      },
      {
        text: `You understand that when using the Website, you will be exposed to content from a variety of sources, and that Company is not responsible for the message, accuracy, usefulness, safety, or appropriateness of or relating to such content. You further understand and acknowledge that you may be exposed to content that is inaccurate, offensive, indecent, or objectionable, and you agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against Company with respect thereto, and agree to indemnify and hold Company, its owners/operators, affiliates, and/or licensors, harmless to the fullest extent allowed by law regarding all matters related to your use of the Website. Company permits you to link to materials on the Website for personal, non-commercial purposes only.`
      }
    ]
  },
  {
    title: 'Indemnification',
    description: [
      {
        text: `You agree to defend, indemnify and hold harmless Company, its affiliates, officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s fees) arising from: (i) your use of and access to the Website; (ii) your violation of any term of these Terms of Use; (iii) your violation of any third party rights, including without limitation any copyright, property, or privacy right. This defense and indemnification obligation will survive these Terms of Use and your use of the Website.`
      }
    ]
  },
  {
    title: 'Capacity; Not Intended for Children',
    description: [
      {
        text: `You affirm that you are either 18 years of age or above, an emancipated minor, or possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms of Use, and to abide by and comply with these Terms of Use. In any case, you affirm that you are over the age of 13, as the Website is not directed toward nor intended for children under 13. If you are under 13 years of age, then please do not use the Website.`
      }
    ]
  },
  {
    title: 'Assignment',
    description: [
      {
        text: `These Terms of Use, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Company without restriction.`
      }
    ]
  },
  {
    title: 'Governing Law and Jurisdiction',
    description: [
      {
        text: `All matters relating to the Website and these Terms of Use and any dispute or claim arising therefrom or related thereto shall be governed and construed in accordance with the laws of the State of California, without effect to any choice or conflict of law provision or rule. You agree that: (i) the Website shall be deemed solely based in California; and (ii) the Website shall be deemed a passive website that does not give rise to personal jurisdiction over Company, either specific or general, in jurisdictions other than California. Any claim or dispute between you and Company that arises in whole or in part from the Website shall be decided exclusively by a court of competent jurisdiction located in Los Angeles, California.`
      },
      {
        text: `YOU AND COMPANY AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE WEBSITE MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.`
      }
    ]
  },
  {
    title: 'Entire Agreement',
    description: [
      {
        text: `These Terms of Use, together with the Privacy Policy at and any other legal notices published by Company on the Website, shall constitute the entire agreement between you and Company concerning the Website. If any provision of these Terms of Use is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms of Use, which shall remain in full force and effect. No waiver of any term of this these Terms of Use shall be deemed a further or continuing waiver of such term or any other term, and Company’s failure to assert any right or provision under these Terms of Use shall not constitute a waiver of such right or provision.`
      }
    ]
  },
  {
    title: 'Intellectual Property Agent',
    description: [
      {
        text: `If you believe that any use of intellectual property on the Website violates your copyright, please provide the following information, in writing, to the Copyright Agent for Company at team@monks.us:`
      },
      {
        text: `Your address, telephone number, and email address;`
      },
      {
        text: `A description of the copyrighted work that you claim has been sinfringed;`
      },
      {
        text: `A description of the alleged infringing activity and where the alleged infringing material is located;`
      },
      {
        text: `A statement by you that you have a good faith belief that the disputed use is not authorized by you, the copyright owner, its agent, or the law;`
      },
      {
        text: `An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest; and`
      },
      {
        text: `A statement by you, made under the penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner’s behalf.`
      }
    ]
  }
]

export const privacyPolicy: DataLegalPrivacy[] = [
  {
    title: 'Information We Collect',
    description: [
      {
        title: 'Information We Collect',
        contain: [
          {
            text: `Personal information is any information that can be used to identify, locate or contact you. We collect the following types of personal information:`
          },
          {
            text: `Contact information that allows us to communicate with you, such as your name, username, mailing address, telephone numbers, country of residence, billing information, email address or other addresses that allow us to send you emails or messages.`
          },
          {
            text: `Any portfolio items or other materials made available to Company by you may be used on Company’s website, blog, social media, or other platforms for promotional purposes.`
          },
          {
            text: `Transaction information about how you interact with Company, including your purchase history and customer account information.`
          },
          {
            text: `Relationship Information that helps us do business with you, such as your age, demographics and interests as well as your brand and marketing preferences.`
          },
          {
            text: `Usage Information about how you use the Website, to give us a better idea of how you interact with our brands and content.`
          },
          {
            text: `We may ask you for personal information when you interact with Company, such as subscribing to the Website, “liking”, promoting, or sharing our content on social media, or signing up to receive e-mail newsletters.`
          }
        ]
      },
      {
        title: 'Information Collected Automatically',
        contain: [
          {
            text: `Examples of the automatic information we collect and analyze include the Internet Protocol (IP) address used to connect your computer to the Internet; login information; e-mail address(es); password; computer and connection information such as browser type, version, and time zone setting, and browser plug-in types and versions, operating system, and platform. We may associate such automatic information with the personal information you provide.`
          }
        ]
      },
      {
        title: '1.2.1 Use of Cookies',
        contain: [
          {
            text: `We may also use browser data such as cookies, Flash cookies (also known as Flash Local Shared Objects), or similar data on certain parts of the Website for fraud prevention and other purposes to help us better serve users with information relevant to their particular desires, needs and/or interests.`
          },
          {
            text: `“Cookies” are text files placed on your computer to collect Internet log information and visitor behavior information.`
          }
        ]
      },
      {
        title: '1.2.2 Mobile',
        contain: [
          {
            text: `When using the Website on your mobile device, additional information, such as your location, may be automatically collected. Most mobile devices provide users with the ability to disable location services. Most likely, these controls are located in the device&amp;aposs settings menu. If you have questions about how to disable your device&amp;aposs location services, we recommend you contact your mobile service carrier or your device manufacturer.`
          }
        ]
      },
      {
        title: '1.2.3 Information from Social Media',
        contain: [
          {
            text: `If you access or log-in to our Website through a social media service or use Company’s social media services (including but not limited to Facebook, Twitter, Instagram, Google+, LinkedIn, Pinterest, or YouTube), the information we collect may also include your user ID and/or user name associated with that social media service, any information or content you have permitted the social media service to share with us, including but not limited to your profile picture, email address or friends lists, and any information you have made public in connection with that social media service. When you access the Website through social media, you are authorizing Company to collect, store, and use such information and content in accordance with this Privacy Policy.`
          }
        ]
      }
    ]
  },
  {
    title: 'Use of information Collected',
    description: [
      {
        title: '2.1 How your Information is Used',
        contain: [
          {
            text: `Company may use your information to:`
          },
          {
            text: `Deliver personalized content to you;`
          },
          {
            text: `Provide you with marketing communications from Company and, in some cases, our business and marketing partners;`
          },
          {
            text: `Administer surveys and other promotional events that you may voluntarily choose to join;`
          },
          {
            text: `Keep you signed in to your account on our Website;`
          },
          {
            text: `Understand how you use our Website based on your preferences, interests, purchasing history and browsing behavior so we can personalize your experience. This could include what language you prefer, the advertisements you watch and the location you are in.`
          },
          {
            text: `Manage our everyday business needs, such as payment processing and financial account management, product development, contract management, website administration, forum management, fulfillment, analytics, security and fraud prevention, corporate governance, reporting and legal compliance.`
          },
          {
            text: `If Company intends to use your Personal Information in a manner materially different than as set out in this Privacy Statement, Company will provide you with information on that other purpose prior to that use.`
          }
        ]
      },
      {
        title: '2.2 Sharing of Personal Information',
        contain: [
          {
            text: `Company limits its sharing of your information to third parties, and may share your information with:`
          },
          {
            text: `Company’s affiliates, who may only use your information in compliance with this Privacy Policy;`
          },
          {
            text: `Company’s service providers, who are instructed to only use your information in accordance with our instructions;`
          },
          {
            text: `Unaffiliated joint marketing partners, but only if you give Company your consent; and`
          },
          {
            text: `Other parties or entities where needed to affect the sale or transfer of business assets, in connection with a bankruptcy proceeding, to enforce our rights, protect our property, or protect the rights, property or safety of others, or as needed support external auditing, compliance and corporate governance functions. Company may also disclose information when required to do so by law, such as in response to a subpoena, including to law enforcement agencies and courts in the countries where we operate.`
          },
          {
            text: `Please note that Company may also use and disclose information about you that is not personally identifiable (i.e. personal information in an aggregate form that no longer identifies you).`
          },
          {
            text: `If Company intends to use your information in a manner materially different than as set out in this Privacy Policy, Company will provide you with information on that other purpose prior to that use.`
          }
        ]
      }
    ]
  },
  {
    title: 'Security of Personal Information',
    description: [
      {
        text: `We take commercially reasonable steps to protect the security of your Personal Information by providing physical, electronic, and procedural safeguards to protect information. Please be aware that, although we endeavor to provide reasonable security for information we process and maintain, no website, internet transmission, computer system or wireless connection is completely secure and we cannot prevent all potential security breaches. We cannot guarantee that unauthorized access, hacking, data loss, or other breaches will not occur. Your use of the Website is at your own risk.`
      }
    ]
  },
  {
    title: 'External Links',
    description: [
      {
        text: `We are committed to your right to privacy. However, please note that this Privacy Policy only applies to this Website and not to any other websites or applications that you may access from the Website, each of which may have privacy policies that are materially different from this Privacy Policy. We encourage you to be aware when you leave the Website and to read the privacy policies of each and every other website and/or application, as Company is not responsible or liable for the commitments and obligations made to you in any privacy policy or the terms and conditions of any such website or application.`
      }
    ]
  },
  {
    title: 'Consent to Processing in the United States',
    description: [
      {
        text: `The Website is operated in the United States. By providing any information to us, all users, including, without limitation, users in the member states of the European Union, Canada, China or elsewhere outside of the United States, fully understand and consent to this Privacy Policy. By using the Website, participating in any of our services and/or providing us with your information, you consent and agree to the collection, transfer, storage and processing of your in the United States.`
      }
    ]
  },
  {
    title: 'Children',
    description: [
      {
        text: `This Website is not designed for children under the age of 13. Except where otherwise indicated, we do not knowingly collect or store any personal information from children. If a parent or guardian becomes aware that his or her child has provided us with information without his or her consent, he or she should contact us at team@monks.us. As required by law, we will use commercially reasonable efforts to delete such personal information from our files within a reasonable time.`
      }
    ]
  },
  {
    title: 'Data Retention',
    description: [
      {
        text: `Company will retain your information for as long as your account is active, or as long as needed for the business purposes described in this Privacy Policy, in accordance with applicable legal standards. Company will process your personal data for no longer than is necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or allowed by law.`
      },
      {
        text: `To determine the appropriate retention period for personal data, Company considers the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements. In some circumstances Company may anonymize your personal data (so that it can no longer be associated with you) for research or statistical purposes in which case Company may use this information indefinitely without further notice to you.`
      }
    ]
  },
  {
    title: 'California Privacy Rights',
    description: [
      {
        text: `If you are a California resident, the California Consumer Privacy Act (“CCPA”) requires the following additional rights:`
      },
      {
        text: `Disclosures About Your Information: We collect the information as described under Section 1 entitled “INFORMATION WE COLLECT”. Company uses this information as described under Section 2.1 entitled “HOW YOUR INFORMATION IS USED”`
      },
      {
        text: `Right to Know: California residents may request information regarding the following: the categories of personal information we have collected about you, the categories of sources from which the personal information was collected, the business or commercial purpose for collecting or selling personal information, the categories of third parties with whom the business shares personal information and the specific pieces of personal information it has collected about that consumer.`
      },
      {
        text: `Right to Delete: You may request that Company delete the personal information that we have collected about you. Note that Company may retain some information as required or permitted by applicable law. Please note that, although we do our best to remove information or content, Company cannot guarantee complete removal (i.e. when content or information has been reposted by a third party user).`
      },
      {
        text: `Right to Non-Discrimination: Company will not discriminate against you for exercising any of these above-mentioned rights.`
      },
      {
        text: `Online Tracking and Do Not Track Disclosures: Please note that third parties other than Company may collect personal data about the activities of users of the Website over time and across different websites. Do Not Track (“DNT”) is a privacy setting available by most browsers.`
      },
      {
        text: `We do not and will not sell personal data as the term “sell” is defined by the CCPA.`
      },
      {
        text: `Please note your right to know and right to delete are subject to certain exceptions under the CCPA. You may authorize an agent to exercise these rights on your behalf by providing a notarized power of attorney evidencing that you have authorized this agent to exercise your rights under the CCPA.`
      },
      {
        text: `If you are a California resident that would like to exercise any of your above rights, please contact us at: team@monks.us. Disclosure and delivery of the requested information is free of charge and shall be delivered within 45 days of receiving a verifiable request from you. The disclosure shall cover the 12-month period preceding your verifiable requests.`
      }
    ]
  },
  {
    title: 'Policy Changes',
    description: [
      {
        text: `Company reserves the right to modify, alter or otherwise update this Privacy Policy from time to time, so you are encouraged to review this Privacy Policy from time to time. Your continued use of the Website following the posting of such modifications, alterations or updates will signify your acceptance thereof. Please note that each time you use the Website, the current version of this Privacy Policy will apply.`
      },
      {
        text: `If Company changes its Privacy Policy, Company will date and post those changes on the Website so that you are always aware of what information we collect, how such information is used and under what circumstances, if any, such information is disclosed. Any and all changes to the Privacy Policy will also be reflected on this page. Unless we obtain your express consent, any revised Privacy Policy will apply only to information collected after such time as the revised Privacy Policy takes effect. If at any point Company decides to use information in a manner different from that stated at the time it was collected, Company will notify you and you will then have a choice of whether or not Company can use such information in this different manner.`
      }
    ]
  },
  {
    title: 'Cookie Policy',
    description: [
      {
        text: `This Cookie Policy applies to all of Monks, LLC’s (“Monks”) websites and mobile applications (the “Websites”) and any other platforms Monks owns or controls and makes available. This Cookie Policy also applies to any other linked pages or blogs, features, content (including any information, text, graphics, photos, comments, reviews, links, or other materials uploaded, downloaded or appearing on, or linked to the Services), or applications offered from time to time by Monks in connection therewith (collectively the "Content").`
      },
      {
        text: `1. What are “Cookies”?`
      },
      {
        text: `A cookie is a small text file or pixel tag that is stored on your computer or mobile device  when you visit certain websites. We use cookies to  understand how  you interact with our Website and distinguish you from other users of our services. Among other benefits, this allows us to make improvements to the information and design of the services and to provide you with better customer experience.`
      },
      {
        text: `It is easy to change your cookie settings. Please see Section 3 “OPT OUT OF COOKIES” for further information on how to do this. However please be aware that if you delete, disable or opt-out of cookies, your online experience with the Services may be affected and some features or areas of the Glooks Platforms and Services may be limited.`
      },
      {
        text: `2. What type of cookies do we use and why?`
      },
      {
        text: `We use the following categories of cookies on the Website:`
      },
      {
        text: `Required cookies: These cookies are necessary to allow us to operate the Services that you have requested. For example, we use required cookies for site security and site  integrity,account authentication, privacy  preferences, maintenance data, to make the site work correctly for browsing and transactions, and for tracking user conversions on the Website.`
      },
      {
        text: `Site Customization cookies: These cookies are used to improve your experience of our services and operate according to your preferences. For example, they remember your login details and certain choices  that you make on the Website including content that you have viewed previously. Without these technologies, features like personalized recommendations or account preferences may not work correctly.`
      },
      {
        text: `Analytical/performance cookies: These cookies allow us to recognize and count the number of visitors and to see how visitors move around our Services when they are using them. This helps us to improve the way our services work, for example, by ensuring that users are finding what they are looking for easily. These cookies collect anonymous information only and do not show personal details.`
      },
      {
        text: `Personalized Advertising cookies: These cookies are used to make our Services more relevant to you and to personalize advertising online that may be of interest to you. For example, they personalize features such as (i) product searches and offers, (ii) recommended content, and (iii) adverts. They do not increase the amount of content that you will be shown, but they will help limit the number of times you see the same content.`
      },
      {
        text: `Third-party cookies: Third parties (for example, advertising networks and providers of external services like web traffic analysis services) may also store cookies on your device. These cookies are used by third parties to provide services to us, such as analytics/performance monitoring, or personalized advertising which may also include third parties using their cookies to show you adverts based on your past visits to the Sites. This means you may be shown different products based on what you appear to be interested in and what you have viewed on the Sites as well as other products deemed relevant to your browsing activity. In this way, advertising can be made as relevant and as useful to you as possible.`
      },
      {
        text: `Note that we do not control cookies owned by third parties and it is your responsibility to configure your preferences for third-party cookies based on your individual targeting and tracking preferences.`
      },
      {
        text: `3. Opt Out of Cookies`
      },
      {
        text: `Cookie settings on the Site: You can adjust your cookie preferences on the Site via the ‘Cookie Settings’ link available at the bottom of most of our Site pages. If you opt out cookies, we set an opt out cookie in your browser so that we can remember that you opted out.`
      },
      {
        text: `Browser settings:`
      },
      {
        text: `Block cookies: You can adjust your cookie preferences by activating the setting on your browser that allows you to refuse the setting of all or some cookies. The "Help" feature on most browsers will tell you how to stop your browser from accepting new cookies. It should also tell you how to set up the browser to notify you when you receive a new cookie and how to disable cookies entirely. You can also disable or delete similar data used by browser add-ons, such as flash cookies, by changing the add-ons settings or visiting the website of the browser manufacturer. Visit www.allaboutcookies.org for more information about how to manage cookies on your particular browser.`
      },
      {
        text: `Delete cookies: Your browser will also allow you to delete cookies that are currently set on your device. Please note that if you delete all of your cookies, all of your existing cookie preferences will also be lost. This means that you will see the cookie banner again when you next visit our Site and you will need to reset your cookie preferences.`
      },
      {
        text: `Device settings: You  may  also be able to adjust your cookie preferences in the settings of your device. However, the settings you choose will not apply across your devices. This means that if you want to opt out of cookies on all devices, you must adjust your settings individually on each device and browser on which you use the Services.`
      },
      {
        text: `Third parties: You can also adjust your third-party cookie preferences directly with the relevant third party.`
      }
    ]
  },
  {
    title: 'Acceptance of Terms',
    description: [
      {
        text: `By using the Website, you hereby accept all of the terms set forth in our Privacy Policy. If you do not agree to accept all or any portion of such terms, then you are respectfully asked not to use the Website.`
      }
    ]
  }
]
