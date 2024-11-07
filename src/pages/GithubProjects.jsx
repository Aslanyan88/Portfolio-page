import { useEffect, useState } from 'react';
import axios from 'axios';

const GithubProjects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/Aslanyan88/repos?sort=created&per_page=100'
        );
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Latest GitHub Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repo) => (
            <div key={repo.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3">{repo.name}</h3>
              <p className="text-gray-400 mb-3">{repo.description || 'No description available.'}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubProjects;
