import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    brand: 'FYX',
    title: 'Social media marketing agency.',
    imageSrc: '/images/fyx.webp',
    tags: ['web', 'design', 'strategy'],
  },
  {
    id: 2,
    brand: 'Ciro',
    title: 'Online banking and trading platform.',
    imageSrc: '/images/bank.webp',
    tags: ['app', 'branding', 'strategy'],
  },
  {
    id: 3,
    brand: 'MAE',
    title: 'Affordable, market-leading online cashier.',
    imageSrc: '/images/e-commerce.webp',
    tags: ['web', 'development', 'e-commerce'],
  },
  {
    id: 4,
    brand: 'Coworking',
    title: 'Find the most suitable coworking space.',
    imageSrc: '/images/coworking.webp',
    tags: ['branding', 'strategy', 'design'],
  },
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <div className="featured-projects-title">
        <h2>
          featured <span>projects</span>
        </h2>
      </div>
      <div className="featured-projects-list">
        {projectsData.map((project) => (
          <div key={project.id} className="featured-projects-item">
            <div className="featured-projects-item-image">
              <Image src={project.imageSrc} layout="fill" />
            </div>
            <p>
              <b>{project.brand}</b> - {project.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
