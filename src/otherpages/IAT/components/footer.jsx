import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import IATBulb from "../assets/IATBulb.svg?react";

const MailLink = ({ email, label }) => (
  <a href={`mailto:${email}`} className="hover:text-white transition">
    {label}
  </a>
);

const Footer = () => {
  const contactSections = {
    official: {
      title: "For Official",
      contacts: [
        { email: "president.edc@bitmesra.ac.in", label: "President" },
        { email: "team.edc@bitmesra.ac.in", label: "EDC Team" },
      ],
    },
    queries: {
      title: "For Queries",
      contacts: [
        {
          email: "btech10139.23@bitmesra.ac.in",
          label: "Abhinav Kumar Choudhary",
        },
        { email: "btech11011.23@bitmesra.ac.in", label: "Naveen Modi" },
      ],
    },
    enquiries: {
      title: "For Enquiries",
      contacts: [
        { email: "imh10062.23@bitmesra.ac.in", label: "Anuj Nayak" },
        { email: "btech10991.23@bitmesra.ac.in", label: "Rishi Agarwal" },
        { email: "btech10851.23@bitmesra.ac.in", label: "Ashish Kumar" },
      ],
    },
  };
  return (
    <footer className="bg-gradient-to-b from-[#0F0F1B] to-black text-gray-400 px-6 md:px-20 py-16 font-hanken">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <IATBulb className="w-12 h-12" />
              <h2 className="text-white font-bold">Innovate-A-Thon</h2>
            </div>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/edcbitmesra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl hover:text-white transition" />
              </a>
              <a
                href="https://www.linkedin.com/company/edcbitmesra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl hover:text-white transition" />
              </a>
            </div>

            <div className="pt-8 text-sm leading-relaxed text-gray-400">
              <p>
                Innovate-A-Thon is East India's biggest hackathon, fostering
                innovation and entrepreneurship by bringing together brilliant
                minds from across the country.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">For Official</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <MailLink
                email={contactSections.official.contacts[0].email}
                label="President"
              />
            </li>
            <li>
              <MailLink
                email={contactSections.official.contacts[1].email}
                label="EDC Team"
              />
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">For Queries</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <MailLink
                email={contactSections.queries.contacts[0].email}
                label="Abhinav Kumar Choudhary"
              />
            </li>
            <li>
              <MailLink
                email={contactSections.queries.contacts[1].email}
                label="Naveen Modi"
              />
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Brochure
              </a>
            </li>
            <li>
              <a
                href="https://unstop.com/p/innovate-a-thon-30-bit-mesra-ranchi-1529762"
                className="hover:text-white"
              >
                Unstop
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        ©2025 EDC, BIT Mesra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
