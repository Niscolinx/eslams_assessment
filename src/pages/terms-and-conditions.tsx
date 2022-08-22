import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function TermsAndConditions() {
    return (
        <div className='grid justify-center mt-2 gap-5 pb-10 px-4 md:mx-20'>
            <AnimationOnScroll
                animateOnce={true}
                initiallyVisible={true}
                animateIn='animate__slideInDown'
            >
                <h1 className='text-center px-2 py-5 text-3xl font-semibold mb-5 uppercase '>
                    Terms and Conditions
                    <span className=' text-sm block capitalize'>
                        1960Token Terms and Conditions of Use
                    </span>
                </h1>
            </AnimationOnScroll>
            <div className='grid gap-4'>
                <ol className='list-decimal list-inside grid gap-4'>
                    <AnimationOnScroll
                        animateOnce={true}
                        animateIn='animate__slideInDown'
                    >
                        <li className='text-justify'>
                            By accessing this Website, accessible from
                            https://www.1960token.com/, you are agreeing to be
                            bound by these Website Terms and Conditions of Use
                            and agree that you are responsible for the agreement
                            with any applicable local laws. If you disagree with
                            any of these terms, you are prohibited from
                            accessing this site. The materials contained in this
                            Website are protected by copyright and trade mark
                            law.
                        </li>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateOnce={true}
                        animateIn='animate__slideInDown'
                    >
                        <li className='text-justify'>
                            1960Token has not reviewed all of the sites linked
                            to its Website and is not responsible for the
                            contents of any such linked site. The presence of
                            any link does not imply endorsement by 1960Token of
                            the site. The use of any linked website is at the
                            user’s own risk.
                        </li>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateOnce={true}
                        animateIn='animate__slideInDown'
                    >
                        <li className='text-justify'>
                            1960Token may revise these Terms of Use for its
                            Website at any time without prior notice. By using
                            this Website, you are agreeing to be bound by the
                            current version of these Terms and Conditions of
                            Use.
                        </li>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateOnce={true}
                        animateIn='animate__slideInDown'
                    >
                        <li className='text-justify'>
                            All the materials on 1960Token Website are provided
                            "as is". 1960Token makes no warranties, may it be
                            expressed or implied, therefore negates all other
                            warranties. Furthermore, 1960Token does not make any
                            representations concerning the accuracy or
                            reliability of the use of the materials on its
                            Website or otherwise relating to such materials or
                            any sites linked to this Website
                        </li>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateOnce={true}
                        animateIn='animate__slideInDown'
                    >
                        <li className='text-justify'>
                            1960Token or its suppliers will not be hold
                            accountable for any damages that will arise with the
                            use or inability to use the materials on 1960Token
                            Website, even if 1960Token or an authorize
                            representative of this Website has been notified,
                            orally or written, of the possibility of such
                            damage. Some jurisdiction does not allow limitations
                            on implied warranties or limitations of liability
                            for incidental damages, these limitations may not
                            apply to you.
                        </li>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateOnce={true}
                        animateIn='animate__slideInDown'
                    >
                        <li className='text-justify'>
                            The materials appearing on 1960Token Website may
                            include technical, typographical, or photographic
                            errors. 1960Token will not promise that any of the
                            materials in this Website are accurate, complete, or
                            current. 1960Token may change the materials
                            contained on its Website at any time without notice.
                            1960Token does not make any commitment to update the
                            materials.
                        </li>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateOnce={true}
                        animateIn='animate__slideInDown'
                    >
                        <li className='text-justify'>
                            Any claim related to 1960Token Website shall be
                            governed by the laws without regards to its conflict
                            of law provisions.{' '}
                        </li>
                    </AnimationOnScroll>
                </ol>

                <AnimationOnScroll
                    animateOnce={true}
                    animateIn='animate__slideInDown'
                >
                    <div className='grid justify-center justify-items-center'>
                        <h3 className='font-semibold text-2xl'>
                            Social Handles
                        </h3>
                        <ul className='flex list-disc justify-evenly min-w-90'>
                            <li className='text-justify'>Facebook</li>
                            <li className='text-justify'>Telegram</li>
                            <li className='text-justify'>Youtube</li>
                        </ul>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default TermsAndConditions
