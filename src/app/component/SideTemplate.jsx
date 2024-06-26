import TemplateDesign from "./TemplateDesign"
import "./component.css"
import createTemplateIcon from "../../images/create_template_icon.gif"
import Link from "next/link"
import certificate1 from "../../images/certificates/certificate1.png"
import certificate2 from "../../images/certificates/certificate2.png"
import certificate3 from "../../images/certificates/certificate3.png"
import certificate4 from "../../images/certificates/certificate4.png"
import certificate5 from "../../images/certificates/certificate5.png"
export default function SideTemplate({ setPrevImage }) {

    return (
        <>
            <div className="sidebar-template">
                <Link href={"/customizetemplate"} className="create-card">
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/add--v1.png" alt="add--v1"/>                </Link>

                <TemplateDesign setPrevImage={setPrevImage} templateimg={certificate1.src} />
                <TemplateDesign setPrevImage={setPrevImage} templateimg={certificate2.src} />
                <TemplateDesign setPrevImage={setPrevImage} templateimg={certificate3.src} />
                <TemplateDesign setPrevImage={setPrevImage} templateimg={certificate4.src} />
                <TemplateDesign setPrevImage={setPrevImage} templateimg={certificate5.src} />

            </div>
        </>
    )
}