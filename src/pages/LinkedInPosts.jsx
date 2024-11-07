import { useEffect, useState } from 'react';

const LinkedInPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const hardcodedPosts = [
      {
        title: 'Understanding the Intricacies of Object-Oriented Programming',
        iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7241728522363244544',
      },
      {
        title: 'JavaScript Backbone for Modern Web Development',
        iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242069131632513025',
      },
      {
        title: 'The Rise of Progressive Web Apps',
        iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242546418144493568',
      },
      {
        title: 'Understanding Web3: The Next Evolution of the Internet',
        iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242810074849497091',
      },
      {
        title: 'Elevating Development with Python',
        iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7246503333144719360',
      },
      {
        title: 'Understanding JavaScript Memory Architecture',
        iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7253806072216403968',
      },
      {
        title: 'Unveiling the JavaScript Engine: Advanced Event Loop and V8 Internals',
        iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7254107439942266880',
      },
    ];

    setPosts(hardcodedPosts);
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">LinkedIn Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
              <iframe
                src={post.iframeUrl}
                width="100%"
                height="700" 
                frameBorder="0"
                allowFullScreen
                title={post.title}
                className="rounded-lg"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInPosts;
