import React,{useState} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
function Value() {
    return (       
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="/value.png" alt="" />
                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value we give to you</span>
                    <span className='secondaryText'>
                        we always provide best services<br/>
                        we believe good place to live makes life better
                    </span>
                    <Accordion
                    className='accordion'
                    allowMultipleExpanded={false}
                    preExpanded={[0]}>
                    {
                        data.map((item,id)=>{
                            const [className,setClassName] = useState("")
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={id} uuid={id}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                        <AccordionItemState>
                                            {({expanded})=>expanded?setClassName("expanded"):setClassName("collapsed")}
                                        </AccordionItemState>
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }

                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value
