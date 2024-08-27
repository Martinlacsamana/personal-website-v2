import React from "react"
import Image from "next/image"
import ExperienceCard from "./ExperienceCard"

const Experiences = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-12 pb-24 space-y-36">
            <ExperienceCard 
                hook="Backend Software Engineer"
                position="Metaverse HQ"
                children={
                    <div className="space-y-6 text-xs">
                        <p>
                            We all get too much email. The urgent buries the important. We don't reply to our team or VIPs. And we miss notifications from tools like Google Docs. As a result, we lose opportunities, block our teams, and damage our reputations.
                        </p>
                    </div>
                }
                textLeft={true}
                image="/MVHQ.png"
                year="Aug 2024"
            />


            <ExperienceCard 
                hook="Full-Stack Software Engineer"
                position="Elavize"
                children={
                    <div className="space-y-6 text-xs">
                        <p>
                            We all get too much email. The urgent buries the important. We don't reply to our team or VIPs. And we miss notifications from tools like Google Docs. As a result, we lose opportunities, block our teams, and damage our reputations.
                        </p>
                        <p>
                            With Split Inbox, you can instead focus on what needs your attention. Split out emails from your team, your VIPs, or your most used tools — Google Docs, Notion, Asana — or anything else. Even when your inbox is overflowing, you'll respond fast where it matters most.
                        </p>
                    </div>
                }
                textLeft={false}
                image="/ELAVIZE.png"
                year="Jun 2023 - Aug 2024"
            />

            <ExperienceCard 
                hook="Partnership & Devlopment Lead"
                position="Superlative Secret Society"
                children={
                    <div className="space-y-6 text-xs">
                        <p>
                            During the 2021 boom of NFTs, WEB3 became infamous for numerous NFT collections to boom. The urgent buries the important. We don't reply to our team or VIPs. And we miss notifications from tools like Google Docs. As a result, we lose opportunities, block our teams, and damage our reputations.
                        </p>
                        <p>
                            With Split Inbox, you can instead focus on what needs your attention. Split out emails from your team, your VIPs, or your most used tools — Google Docs, Notion, Asana — or anything else. Even when your inbox is overflowing, you'll respond fast where it matters most.
                        </p>
                    </div>
                }
                textLeft={true}
                image="/SuperlativeSecretSociety.png"
                year="2021"
            />

       
        </div>
    )
}

export default Experiences