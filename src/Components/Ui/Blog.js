import React from 'react'
import '../Styles/Blog.css'
import videImg from '../images/video.png'
import articleImg from '../images/article.png'
import caseStudy from '../images/case-study.png'
const Blog = () => {
  const blogData = [
    {
      imgUrl: videImg,
      title: 'Video',
      desc: 'To know about work, watch some videos f...',
      linkUrl: '#',
    },
    {
      imgUrl: articleImg,
      title: 'Articles',
      desc: 'To know about work, watch some videos f...',
      linkUrl: '#',
    },
    {
      imgUrl: caseStudy,
      title: 'Case Study',
      desc: 'Boost your converstation with us...',
      linkUrl: '#',
    },
  ]
  return (
    <section>
      <div className="container">
        <div className="blog_top-content">
          <h6 className="subtitle"> Our Blogs</h6>
          <h2>
            Lets Have a loot from{' '}
            <span className="hightlight"> recent blog</span>
          </h2>
        </div>
        <div className="blog_wrapper">
          {blogData.map((item, index) => (
            <div className="blog_item">
              <h3>{item.title}</h3>
              <div className="blog_img">
                <img src={item.imgUrl} alt="" />
              </div>
              <p className="blog_desc">{item.desc}</p>
              <div>
                <a href={item.linkUrl} className="learn_more">
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
