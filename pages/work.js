import Head from "next/head";

const jobs = [
  {
    company: "SwagUp",
    address: "Jersey, NY",
    startDate: "01/2020",
    endDate: "Current",
    title: "Frontend developer",
    responsabilities: [
      "Work alongside product managers, designers and backend developers to deliver a pleasant UX/UI to our dashboard customers in an agile and iterative development environment.",
      "Write maintainable React components.",
      "Maintain high-level expertise in React state management strategies, including Redux and React Query.",
      "Perform regular code reviews.",
    ],
  },
  {
    company: "Geocuba",
    address: "Pinar Del Rio, Pinar Del Rio",
    startDate: "09/2016",
    endDate: "01/2020",
    title: "Full-stack Developer",
    responsabilities: [
      "Work with corporate clients to create a clean and usable UI.",
      "Develop project concepts and maintain optimal workflow.",
      "Maintain and develop new features in older web applications.",
      "Full-stack development with ExtJS and Symfony frameworks.",
      "Carry out manual quality assurance tests to discover errors and optimize usability.",
    ],
  },
];

const Job = ({ company, address, startDate, endDate, title, responsabilities }) => (
  <div className="my-8">
    <p className="font-bold">
      {company} - <em>{title}</em>
    </p>
    <p className="text-gray-300 text-base">
      {address} • {startDate} - {endDate}
    </p>
    <ul className="ml-6 mt-2 text-justify dark:text-gray-200 text-gray-500 list-outside list-disc">
      {responsabilities.map((responsability, index) => (
        <li className="list-item" key={index}>
          {responsability}
        </li>
      ))}
    </ul>
  </div>
);

export default function Work() {
  return (
    <section>
      <Head>
        <title>Orlando J Vilau | Work Experience</title>
        <meta name="description" content="My work Experience since I obtained my B.S. in Computer Science" />
      </Head>
      {jobs.map((job, index) => (
        <Job key={index} {...job} />
      ))}
    </section>
  );
}
