import Link from 'next/link';

const NextProject = ({ href }) => (
  <section className="next-project">
    <Link href={href}>
      <a className="hover-link reversed">Next case</a>
    </Link>
  </section>
);

export default NextProject;
