import { HiHome } from "react-icons/hi2";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

export const navigation = [
    {
        label : "TV Shows",
        href : 'tv',
        icon : <PiTelevisionFill/>
    },
    {
        label : "Movies",
        href : 'movie',
        icon : <BiSolidMoviePlay/>
    }
]

export const mobileNavigation = [
    {
        label : "Home",
        href : "/",
        icon :<HiHome/>
    },
    ...navigation,
    {
        label : "Search",
        href : "/search",
        icon : <IoSearch/>
    }
]