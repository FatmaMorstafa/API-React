import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react'

function Single() {
    var myparameters = useParams();
    var id = myparameters.id;
    //console.log(id);
    const [posts,setPost] = useState([])
    useEffect(()=>{
        fetch("https://webeetec.com/itsharks24/blog/api/singlepost.php?id=" + id)
        .then((r) => r.json())
        .then((r)=>{
            //console.log(r)
            setPost(r)
        })
    },[])

    //var myparameters = useParams();
    //var dates = myparameters.date;
    //console.log(id);
    const [res,setLastPost] = useState([])
    useEffect(()=>{
        fetch("https://webeetec.com/itsharks24/blog/api/getrecentpost.php")
        .then((l) => l.json())
        .then((l)=>{
            //console.log("the last added"+l)
            setLastPost(l)
        })
    },[])

    //for(var i = 1; i < dates.length; i++) {
      //if ((dates[i]) < (dates[i+1]) )
        //latest = dates[i+1];
    //}
    //console.log(latest)
    return ( 
        <>
            <section className="container">
                <div className="wrapper clear">
                    {
                        posts.map((p)=>{
                            return(

                                <div className="contentLeft">
                                    <div className="singlePostMeta">
                                        <div className="singlePostTime">{p.date}</div>
                                        <h1>{p.title}</h1>
                                        <a href="#" className="singlePostCategory">{p.category}</a>
                                    </div>
                                    <div className="singlePostWrap">
                                        <div className="singlePostImg">

                                            <img src={"https://webeetec.com/itsharks24/blog/admin/"+ p.image} alt="Francoise img"/>
                                        </div>
                                        <p>{p.description}</p>
                                    </div>
                                </div>
                                
                            )
                        })
                        
                    }

                    <div className="sidebarRight">
                        <div className="sidebar-widget">
                            <h3>About us</h3>
                            <div className="aboutMeWidget">
                                <img src="/images/ourlogo.png" alt="Francoise img"/>
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
                <div className="ourInstagram">
                    <div id="sb_instagram">
                        <div className="sb_instagram_header">
                            <a href="#" className="sbi_header_link">Follow on instagram</a>
                        </div>
                        <div id="sbi_images">
                            <div className="sbi_item sbi_type_image">
                                <div className="sbi_photo_wrap">
                                    <a href="#" className="sbi_photo">
                                        <img src="/images/content/inst.jpg" alt="Francoise img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image">
                                <div className="sbi_photo_wrap">
                                    <a href="#" className="sbi_photo">
                                        <img src="/images/content/inst2.jpg" alt="Francoise img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image">
                                <div className="sbi_photo_wrap">
                                    <a href="#" className="sbi_photo">
                                        <img src="/images/content/inst3.jpg" alt="Francoise img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image">
                                <div className="sbi_photo_wrap">
                                    <a href="#" className="sbi_photo">
                                        <img src="/images/content/inst4.jpg" alt="Francoise img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image">
                                <div className="sbi_photo_wrap">
                                    <a href="#" className="sbi_photo">
                                        <img src="/images/content/inst5.jpg" alt="Francoise img"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Single;