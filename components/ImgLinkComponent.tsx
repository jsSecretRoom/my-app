import Link from "next/link";

interface LinkProp {
    socialimg: string,
    socialimgURL: string,
}

const ImgLinkComponent = ({socialimg, socialimgURL}: LinkProp) => {
    return ( 
        <li>
            <Link href={socialimgURL}><img src={socialimg} alt="" /></Link>
        </li>
    );
}
 
export default ImgLinkComponent;