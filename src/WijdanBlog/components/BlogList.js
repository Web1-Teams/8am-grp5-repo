import React from 'react'
import BlogCard from './BlogCard'
import BlogPost1 from './BlogPost1'
import BlogPost2 from './BlogPost2'
import BlogPost3 from './BlogPost3'
import BlogPost4 from './BlogPost4'
import BlogPost5 from './BlogPost5'
import BlogPost6 from './BlogPost6'
import './root.css'
import './list.css'


const blogPosts = [
    BlogPost1,
    BlogPost2,
    BlogPost3,
    BlogPost4,
    BlogPost5,
    BlogPost6
];

const BlogList = () => {
    return (
        <section className="section blog" id="blog" aria-label="blog">
            <div className="container">
                <p className="section-subtitle text-center">المدونة</p>
                <h2 className="h2 section-title text-center">اخر المدونات &والاخبار</h2>
                <ul className="blog-list">
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            imgSrc={post.imgSrc}
                            imgAlt={post.imgAlt}
                            dateTime={post.dateTime}
                            title={post.title}
                            description={post.description}
                            link={post.link}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BlogList;