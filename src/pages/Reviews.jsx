const Reviews = () => {
  const reviews = [
    {
      name: 'Armen Gabrielyan',
      position: 'SEO at Develandoo | VP of Operations at Scylla',
      content:
        "I am delighted to recommend Arman for his outstanding contributions during his tenure at Develandoo. Arman has been a key team member, consistently delivering high-quality work and demonstrating exceptional expertise in front-end development.\n\nArman's ability to do data automation has greatly benefited the project, and his collaborative spirit and positive attitude have made him a pleasure to work with. His problem-solving skills and innovative thinking have been invaluable to our success.\n\nI have no doubt that Arman will excel in any future role he undertakes, and I wholeheartedly recommend him to any organization seeking a dedicated and skilled professional.",
    },
    {
      name: 'Hovhannes Khachatryan',
      position: 'Software Engineer at MFMSoft',
      content:
        "I had the pleasure of working with Arman on a Node.js automation project. Throughout our collaboration, Arman demonstrated exceptional conscientiousness, responsibility, and a strong desire to learn. He was always thorough and detail-oriented, ensuring our solutions were well-crafted and effective.\n\nArman's eagerness to acquire new skills and stay updated with the latest technologies was truly inspiring. His proactive approach significantly contributed to the project's success. Moreover, his sense of responsibility and commitment to meeting deadlines made him an invaluable team member.\n\nArman is a dedicated and skilled professional who would be a great asset to any team. I highly recommend him.",
    },
    {
      name: 'Alex Leigh',
      position: 'Technical Recruiter - Technology Optimization Manager at TEKsystems',
      content:
        'Arman is a talented and passionate Developer. He is not only proficient in coding, but also excels in problem-solving and project management. He consistently delivers high-quality work and gives great insight into the market and emerging technologies. I would absolutely work with Arman again and highly recommend him to anyone needing world-class IT solutions.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow flex items-center justify-center py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Reviews</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-1">{review.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{review.position}</p>
                <p className="text-gray-400 whitespace-pre-line">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
