'use client';
import Link from 'next/link'
import { useState } from 'react'

const Hero = ({ data }) => {

    
    // console.log(data.columns[0].components);
    const output = data ? data.columns[0].components : [];
    // console.log(output[2].data);
    const [searchterm, setSearchTerm] = useState('')
    const [placeholder, setPlaceHolder] = useState('Zoeken...')

    const content =  output[0].data.content;
    const componentStyles = output[0].data.styling;
    const enableSearch = true
    const suggestionsEnabled = true
    const suggestions = output[2] ? output[2].data.suggestions : []

    const handleSearch = (event) => {
        console.log(event);
        if (event.key === 'Enter'){
            console.log(event.target.value)
        } else {
            setSearchTerm(event.target.value)
        }
    }


    console.log(searchterm)
    // console.log(output);
    const terms = suggestions.map((s, i) => {
        return(
            <a key={i} className="bg-white text-black rounded-full drop-shadow items-center justify-center flex px-4 py-2" href={s.url}>
                <p>{s.text}</p>
            </a>
        ); 
    });

    return(

        <div className="w-full overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 relative md:px-6 lg:px-8" style={{ "backgroundImage": `url(${'https://d1gr3r269tafbs.cloudfront.net/extras/spc-builder/hero-background_1683534928.png'})`, "backgroundSize": "cover", "height": "600px", "backgroundPosition": "center center",  "backgroundAttachment": "scroll" }}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
                {/* <div className={`text-white`} dangerouslySetInnerHTML={{__html: content }} /> */}
                <section id="" className="block relative text">
                    <div className="flex flex-col text-white relative">
                        <h5 class="font-bold">420 jobs in 69 locations</h5><br />
                        <h1 className="text-white text-7xl font-bold tracking-tight pb-10">Join the grocery revolution</h1>
                    </div>
                </section>
                {enableSearch ? 
                      <input type={'text'} value={searchterm} placeholder={placeholder} className='md:w-[600px] w-full rounded drop-shadow p-3' onChange={handleSearch}/>
                 : '' }
                 <div className="flex md:w-[600px] w-full gap-2 flex-wrap mt-8">
                 {suggestionsEnabled ? terms : ''}
                </div>
            </div>


        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9089FC"></stop>
                    <stop offset="1" stopColor="#FF80B5"></stop>
                </linearGradient>
                </defs>
            </svg>
            </div>
        </div>

    )
}

export default Hero