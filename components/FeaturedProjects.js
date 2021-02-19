import Link from 'next/link';
import Image from 'next/image';
import { isSafari } from 'react-device-detect';
import Tilt from 'react-tilt';

const projectsData = [
  {
    id: 1,
    brand: 'FYX',
    slug: 'fyx',
    title: 'Social media marketing agency.',
    imageSrc: '/images/fyx.webp',
    tags: ['web', 'design', 'strategy'],
  },
  {
    id: 2,
    brand: 'Ciro',
    slug: 'ciro',
    title: 'Online banking and trading platform.',
    imageSrc: '/images/bank.webp',
    tags: ['app', 'branding', 'strategy'],
  },
  {
    id: 3,
    brand: 'MAE',
    slug: 'mae',
    title: 'Affordable, market-leading online cashier.',
    imageSrc: '/images/e-commerce.webp',
    tags: ['web', 'development', 'e-commerce'],
  },
  {
    id: 4,
    brand: 'Coworking',
    slug: 'coworking',
    title: 'Find the most suitable coworking space.',
    imageSrc: '/images/coworking.webp',
    tags: ['branding', 'strategy', 'design'],
  },
];

const FeaturedProjects = () => (
  <section className="featured-projects">
    <div className="featured-projects-title">
      <h2>
        featured <span>projects</span>
      </h2>
    </div>
    <div className="featured-projects-list">
      {projectsData.map((project) => (
        <Link key={project.id} href={`/projects/${project.slug}`}>
          <a className="featured-projects-item">
            <Tilt className="Tilt" options={{ max: 5, scale: 1.01 }}>
              <div className="featured-projects-item-image">
                <Image
                  src={project.imageSrc}
                  height={500}
                  width={500}
                  alt={project.brand}
                />
              </div>
            </Tilt>
            <div className="featured-projects-item-brand">
              <p>
                <b>{project.brand}</b> - {project.title}
              </p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  </section>
);

export default FeaturedProjects;
