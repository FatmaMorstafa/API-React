import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react'
import {Link} from "react-router-dom";

function Category() {
    var myparameters = useParams();
    var name = myparameters.name;
    const [posts,setPost] = useState([])
    useEffect(()=>{
        fetch("https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category="+ name)
        .then((r) => r.json())
        .then((r)=>{
            console.log(r)
            setPost(r)
        })
    },[])

    const [res,setLastPost] = useState([])
    useEffect(()=>{
        fetch("https://webeetec.com/itsharks24/blog/api/getrecentpost.php")
        .then((l) => l.json())
        .then((l)=>{
            //console.log("the last added"+l)
            setLastPost(l)
        })
    },[])
    return ( 
        <>
            <section className="container">
                <div className="wrapper clear">
                    <div className="contentLeft">
                        {
                            posts.map((p)=>{
                                return(
                                    <>
                                        <div className="archivePageTitle"><span>{p.category}</span></div>
                                        <div className="archivePostWrap">
                                            <div className="archivePostItem">
                                                <div className="archivePostTime">{p.date}</div>
                                                <h3 className="archivePostTitle"><a href="#">{p.title}</a></h3>
                                                <a href="single.html" className="archivePostCategory">{p.category}</a>
                                                <Link to={'/Single/' +p.id} className="archivePostImg">
                                                    <img src={"https://webeetec.com/itsharks24/blog/admin/"+ p.image} alt="Francoise img" />
                                                </Link>
                                                <p>{p.description}</p>
                                                <div className="archivePostItemMeta">
                                                    <a href="#" className="archivePostItemComments">124 Comments</a>
                                                    <div className="archivePostItemShareLinks">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                                    </div>
                                                    <a href="single.html" className="archivePostReadMore">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        
                        <div className="postPagination">
                            <ul className="clear">
                                <li className="newPosts"><a href="#">New posts</a></li>
                                <li className="olderPosts"><a href="#">Older posts</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebarRight">
                        <div className="sidebar-widget">
                            <h3>About us</h3>
                            <div className="aboutMeWidget">
                                <img src="/images/ourlogo.png" alt="Francoise img" />
                                <p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <h3>follow me</h3>
                            <div className="followMeSocialLinks">
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <span></span>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <span></span>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <span></span>
                                <a href="#"><i className="fa fa-heart"></i></a>
                                <span></span>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                <span></span>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                            </div>
                        </div>
                        
                        {
                            res.map((L)=>{
                                return(
                                    <div className="sidebar-widget">
                                        <h3>Recent post</h3>
                                        <div className="popularPostsWidget">
                                            <div className="popularPostsWidgetItem">
                                                <a href="#" className="popularPostsItemImg"><img src={"https://webeetec.com/itsharks24/blog/admin/"+ L.image} alt="Francoise img"/></a>
                                                <time datetime="2015-05-15">{L.date}</time>
                                                <h4><a href="#">{L.title}</a></h4>
                                            </div>
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        
                    </div>
                </div>
                <div className="clear"></div>
                
            </section>
        </>
     );
}

export default Category;