import {Link} from "react-router-dom";
import {useState,useEffect} from 'react'

function Nav() {
    const [posts,setPost] = useState([])
    useEffect(()=>{
        fetch("https://webeetec.com/itsharks24/blog/api/getcategory.php")
        .then((r) => r.json())
        .then((r)=>{
            console.log(r)
            setPost(r)
        })
    },[])
    return ( 
        <>
            <header id="header">
                <div className="siteHeader">
                    <div className="wrapper clear">
                        <a href="index.html" className="mobile-logo">
                        </a>
                        <ul className="mainMenu clear">
                            <li>
                                <Link to={"./home"}>home</Link>
                            </li>
                            <li>
                                <a>Category</a>
                                <ul>
                                    {
                                        posts.map((p)=>{
                                            return(
                                                <li key={p.name}><Link to={'/Category/'+p.name}>{p.name}</Link></li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                            
                        </ul>
                        <div className="pull-right clear">
                            <div className="headerSocialLinks clear">
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-heart"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                            </div>
                            <div className="searchIcon"></div>
                        </div>
                        <span className="showMobileMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>	
                </div>
                <a href="#" className="logo">IT SHARKS 25</a>
            </header>
        </>
     );
}

export default Nav;