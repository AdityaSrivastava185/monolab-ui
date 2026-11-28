import React from 'react'
import FooterCta from './FooterCta'
import Border from '../(utility)/utility/Border'
import FooterItems from './FooterItems'
import PatternContainer from '../(utility)/utility/PatternContainer'
import FooterInstructions from './FooterInstructions'

const Footer = () => {
    return (
        <div className='w-full'>
            <Border />
            <FooterCta />
            <Border />
            <div className="container">
                <PatternContainer>
                    <FooterItems />
                </PatternContainer>
            </div>
            <FooterInstructions />
        </div>
    )
}

export default Footer
