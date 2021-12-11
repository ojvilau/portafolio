import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section>
      <Head>
        <title>Orlando J Vilau | Contact</title>
        <meta name="description" content="My work Experience since I obtained my B.S. in Computer Science" />
      </Head>
      <p className="mb-4">
        Email me:&nbsp;
        <a href="mailto:ojvilau@gmail.com" className="text-blue-500">
          ojvilau@gmail.com
        </a>
      </p>
      <a
        href="https://www.linkedin.com/in/orlando-j-vila%C3%BA-41577891/"
        target="_blank"
        rel="noreferrer external"
        className="mr-4"
      >
        <Image alt="LinkedIn profile" src={`/images/contact/linkedin-${theme}.svg`} width={40} height={40} />
      </a>
      <a href="https://github.com/ojvilau" target="_blank" rel="noreferrer external">
        <Image alt="Github profile" src={`/images/contact/github-${theme}.svg`} width={40} height={40} />
      </a>
    </section>
  );
}
