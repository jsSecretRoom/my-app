
import ImgLinkComponent from "@/components/ImgLinkComponent";

import YouTubeIco from '@/public/YouTube.svg'
import FacebookIco from '@/public/Facebook.svg'
import InstagramIco from '@/public/Instagram.svg'
import TelegramIco from '@/public/Telegram.svg'
import TwitterIco from '@/public/Twitter.svg'

const ClabFooter = () => {
    return ( 
        <footer className="">
            <section>
                <ul>
                    <ImgLinkComponent socialimg={FacebookIco} socialimgURL={"https://www.linkedin.com/in/%D1%80%D1%83%D1%81%D0%BB%D0%B0%D0%BD-%D0%B3%D1%83%D0%B1%D0%BA%D1%96%D0%BD-a0754824a/"}/>
                    <ImgLinkComponent socialimg={InstagramIco} socialimgURL={"https://www.instagram.com/ruslan_gubkin"}/>
                    <ImgLinkComponent socialimg={TelegramIco} socialimgURL={"https://t.me/ruslangubkin"}/>
                    <ImgLinkComponent socialimg={TwitterIco} socialimgURL={"https://t.me/ruslangubkin"}/>
                    <ImgLinkComponent socialimg={YouTubeIco} socialimgURL={"https://www.youtube.com/channel/UCqZaF_DPbcqCBKAnOZKmjdQ"}/>
                </ul>
            </section>
            <section>
                <ul>
                    111
                </ul>
            </section>
        </footer>
    );
}
 
export default ClabFooter;