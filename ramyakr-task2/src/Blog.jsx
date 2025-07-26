import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">The Evolution of DevOps in Modern Software Development</h1>
      <p className="blog-author">by Ramyak Ray • July 26, 2025</p>
      <div className="blog-content">
        <p>
          DevOps has become a cornerstone of modern software development, bridging the gap between development and operations teams.
          It focuses on automation, collaboration, and continuous delivery to ensure faster and more reliable deployments.
        </p>
        <p>
          Tools like Docker, Kubernetes, Jenkins, and Terraform have revolutionized the way software is built, tested, and deployed.
          Infrastructure as Code (IaC) allows teams to manage infrastructure using configuration files, enabling consistency across environments.
        </p>
        <p>
          As organizations continue to adopt cloud-native architectures, mastering DevOps practices is essential for delivering scalable,
          secure, and efficient software solutions in today's fast-paced world.
        </p>
      </div>
    </div>
  );
};

export default Blog;
