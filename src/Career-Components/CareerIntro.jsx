import React from 'react'
import Heading from '../Components/Heading'

const CareerIntro = () => {
    return (
        <div>
            <div className='marginal md:flex gap-6 mb-10 justify-between items-center'>
                <div className='md:w-[60%] mb-4 md:mb-0'>
                    <Heading title="THE PCPL FAMILY" color="black" />
                    <p className='mb-4 text-[#827E78] text-justify'>
                        Are you passionate about making a difference? Do you thrive in a collaborative environment where creativity and innovation are celebrated? If so, then a career at Pranav Construction might be the perfect fit for you.
                    </p>
                    <p className='text-[#827E78] text-justify'>
                        We are one of the leading real estate redevelopment companies based out of Mumbai dedicated to transforming spaces into vibrant communities. We go beyond bricks and mortar – we create places where people can live, work and connect.
                    </p>
                </div>
                <div className='md:w-[40%]'>
                    <img src="./careers/c-intro.png" alt="" />
                </div>
            </div>

            <div className='bg-[#004B8B] py-10 px-6'>
                <div className='text-center mb-6'>
                    <Heading title="WHY JOIN US?" color="white" />
                </div>
                <div className="marginal">
                <div className='md:flex gap-6 justify-evenly'>
                    <div className='md:w-[22%] mb-8 md:mb-0 text-white text-center '>
                        <div className='w-24 h-20 mx-auto mb-4'>
                            <img src="./careers/ci1.svg" className='h-full m-auto' alt="" />
                        </div>
                        <p className='text-[14px]'>
                            Join a team that is shaping the future of our Dream City, where your work makes a tangible impact on the lives of residents and businesses.
                        </p>
                    </div>
                    <div className='md:w-[22%] mb-8 md:mb-0 text-white text-center'>
                        <div className='w-24 h-20 mx-auto mb-4'>
                            <img src="./careers/ci2.svg" className='h-full m-auto' alt="" />
                        </div>
                        <p className='text-[14px]'>
                        Explore a diverse range of career paths with us, from development and construction to design, marketing and sustainability.
                        </p>
                    </div>
                    <div className='md:w-[22%] mb-8 md:mb-0 text-white text-center'>
                        <div className='w-24 h-20 mx-auto mb-4'>
                            <img src="./careers/ci3.svg" className='h-full m-auto' alt="" />
                        </div>
                        <p className='text-[14px]'>
                        We value teamwork and open communication. Join a team of passionate and talented professionals who share your commitment to excellence.
                        </p>
                    </div>
                    <div className='md:w-[22%] mb-8 md:mb-0 text-white text-center'>
                        <div className='w-24 h-20 mx-auto mb-4'>
                            <img src="./careers/ci4.svg" className='h-full m-auto' alt="" />
                        </div>
                        <p className='text-[14px]'>
                        We invest in our people. We offer ongoing training and mentorship opportunities to help you reach your full potential.
                        </p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default CareerIntro