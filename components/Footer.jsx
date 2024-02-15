import Link from "next/link";
import React from "react";
import {
    AppleIcon,
    Appleicon,
    FacebookIcon,
    Facebookicon,
    InstaIcon,
    Instaicon,
    PlaystoreIcon,
    Playstoreicon,
    TwitterIcon,
    Twittericon,
    YoutubeIcon,
    Youtubeicon,
} from "./Icon";
import Image from "next/image";
import logo2 from '../public/img/logo2.png'
const KajariyaFooter = () => {
    return (
        <>
            <div className=" text-white bg-black pt-6 pb-8 flex flex-wrap gap-12  px-4 justify-evenly">
                <div className=" flex flex-col gap-y-3">
                    <Link href="">
                         <Image src={logo2 }  width={200} height={80}/>
                    </Link>
                    <div>
                        <Link href="">
                            <p>call</p>
                        </Link>
                        <Link href="">
                            <p className=" hover:text-">1800092686</p>
                        </Link>
                    </div>
                    <div>
                        <Link href="">
                            <p>connect</p>
                        </Link>
                        <div className=" flex gap-4 mt-3">
                            <Link href="">
                                <Facebookicon />
                            </Link>
                            <Link href="">
                                <Instaicon />
                            </Link>
                            <Link href="">
                                <Twittericon />
                            </Link>
                            <Link href="">
                                <Youtubeicon />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Email</h3>
                        <Link href="">
                            <p className=" mt-3">info@Kajariaceramics.com</p>
                        </Link>
                    </div>
                    <div>
                        <Link href="">
                            <h1 className=" mt-3">Download Our App</h1>
                        </Link>
                        <div className="flex flex-col gap-y-4 mt-3">
                            <Link href="">
                                <div className=" hover:bg-gray-600 flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                                    <Appleicon />
                                    <div>
                                        <h1>Available on the</h1>
                                        <h1>App Store</h1>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className=" hover:bg-gray-600 flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                                    <Playstoreicon />
                                    <div>
                                        <h1>Get It On</h1>
                                        <h1>Google Play Store</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Quick links</h1>
                    <div className=" flex flex-col gap-y-2 mt-3">
                        <Link href="">
                            <h3>Mattalic Ceramic Tiles</h3>
                        </Link>
                        <Link href="">
                            <h3>Wood wall tiles</h3>
                        </Link>
                        <Link href="">
                            <h3>Restic wall tiles</h3>
                        </Link>
                        <Link href="">
                            <h3>where to buy</h3>
                        </Link>
                        <Link href="">
                            <h3>Corpurat Office</h3>
                        </Link>
                        <Link href="">
                            <h3>Display Center</h3>
                        </Link>
                        <Link href="">
                            <h3>Blog</h3>
                        </Link>
                        <Link href="">
                            <h3>Login</h3>
                        </Link>
                    </div>
                </div>
                <div>
                    <h1>About Us</h1>
                    <div className=" flex flex-col gap-y-2 mt-3">
                        <Link href="">
                            <h3>Company Information</h3>
                        </Link>
                        <Link href="">
                            <h3>Chairman Message</h3>
                        </Link>
                        <Link href="">
                            <h3>Our Exports</h3>
                        </Link>
                        <Link href="">
                            <h3>Awards & Certifications</h3>
                        </Link>
                        <Link href="">
                            <h3>Rustic Wall Tiles</h3>
                        </Link>
                        <Link href="">
                            <h3>Tiles</h3>
                        </Link>
                        <Link href="">
                            <h3>Metalies tiles </h3>
                        </Link>
                        <Link href="">
                            <h3>Manufaclity faclity </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default KajariyaFooter;