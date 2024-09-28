import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
    {
        label: "TV Shows",
        href: '/tv', // Ensure the path matches your router
        icon: <PiTelevisionFill />
    },
    {
        label: "Movies",
        href: '/movie', // Ensure the path matches your router
        icon: <BiSolidMoviePlay />
    }
];

export const mobileNavigation = [
    {
        label: "Home",
        href: "/",
        icon: <MdHomeFilled />
    },
    ...navigation,
    {
        label: "Search",
        href: "/search",
        icon: <IoSearchOutline />
    }
];
