import React from 'react'
import Image from "next/image";

export default function InfoSection() {
    return (
        <div>
            <p className="font-sans text-text_basic md:text-2xl">Open an account with just <span className="font-bold md:text-2xl text-text_basic block md:inline">3 Carecoins*</span></p>
            <div className="flex gap-20 md:gap-40">
                <p className="font-sans text-text_basic md:p-6 mt-3 font-bold md:text-2xl">3 x coins = <span className="font-bold md:text-2xl  ml-2 text-bluish_violet">£99</span></p>
                <Image
                    src="/frame.png"
                    alt="Carecoins Example"
                    width={40}
                    style={{ objectFit: "contain" }}
                    height={40}
                />
            </div>

            <div className="mt-32">
                <p className="font-sans font-semibold text-xl">Benifits of using Carecoins</p>

                <div className="flex mt-10 gap-10 md:w-2/3" >
                    <p className="text-oranish_bg font-bold">✓</p>
                    <p className="font-sans md:text-xl text-text_basic"><span className="font-bold">Easy-to-use portal area</span> - Book and manage therapy or training sessions anytime, anywhere.</p>
                </div>

                <div className="flex mt-10 gap-10 md:w-2/3" >
                    <p className="text-oranish_bg font-bold">✓</p>
                    <p className="font-sans md:text-xl text-text_basic"><span className="font-bold">No subscriptions</span> - You decide how many coins you can afford and top up on your terms.</p>
                </div>

                <div className="flex mt-10 gap-10 md:w-2/3" >
                    <p className="text-oranish_bg font-bold">✓</p>
                    <p className="font-sans md:text-xl text-text_basic"><span className="font-bold">Longevity</span> - Carecoins are valid for two full years from the date of purchase.</p>
                </div>

                <p className="text-text_basic font-sans text-xs mt-10 md:w-2/3">
                    *One off payment of £99 required to open an account. This is not a subscription, top up coins can be purchased from your account area at £33 per coin.
                </p>
            </div>
        </div>
    )
}
