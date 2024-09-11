import React from 'react'
import { motion } from "framer-motion"
import PageTitle from '../components/common/pageTitle'
import LeaveReplay from '../components/sections/leaveReplay'
import Comments from '../components/sections/comments'
import SideBar from '../components/sections/sideBar'
import { Link, ScrollRestoration } from 'react-router-dom'
import { slideUp } from '../utlits/slideUp'
import blog_img from "../assets/images/blog/blog-26.jpg"
import { blogData } from '../utlits/fackData/blogData'

const BlogDetails = () => {
  return (
    <>
      {/* <PageTitle link={"Blog Details"} pageName={"Blog Details"} /> */}
      <div className="blog-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <SideBar dActive={true} />
            </div>
            <div className="col-lg-8">
              <motion.div className="blog-details-right-sidebar"
                initial="offscreen"
                whileInView="onscreen"
                variants={slideUp(1)}
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div className="blog-info"
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={slideUp(1)}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {
                    blogData.map(({ author, date, thumb, title, description  }) => {
                      return (
                        <>
                          <ul className="list-unstyled ps-0">
                            <li className="d-inline-block">
                              <i className="ri-calendar-2-line"></i>
                              <small className="text-decoration-none">{author}</small>
                            </li>
                            <li className="d-inline-block">
                              <i className="ri-calendar-2-line"></i>
                              {date}
                            </li>
                          </ul>
                          <h1>{title}</h1>
                          <p>{description}</p>
                          <motion.div className="image"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(1)}
                            viewport={{ once: true, amount: 0.1 }}
                          >
                            <img src={thumb} alt="blog-image" />
                          </motion.div>
                          <motion.blockquote
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(1)}
                            viewport={{ once: true, amount: 0.1 }}
                          >                            
                          </motion.blockquote>
                          </>
                      )
                    })
                  }
                </motion.div>
                {/* <Comments /> */}
                {/* <LeaveReplay /> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default BlogDetails