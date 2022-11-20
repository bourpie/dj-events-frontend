import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Accordion() {
  const [disclosures, setDisclosures] = useState([
    {
      id: "disclosure-panel-1",
      isOpen: false,
      buttonText: "What is your refund policy?",
      panelText:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
    },
    {
      id: "disclosure-panel-2",
      isOpen: false,
      buttonText: "Do you offer technical support?",
      panelText: "No."
    }
  ]);

  const handleClick = (id) => {
    setDisclosures(
      disclosures.map((d) =>
        d.id === id ? { ...d, isOpen: !d.isOpen } : { ...d, isOpen: false }
      )
    );
  };

  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 space-y-2">
        {disclosures.map(({ id, isOpen, buttonText, panelText }) => (
          <React.Fragment key={id}>
            <button
              className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              onClick={() => handleClick(id)}
              aria-expanded={isOpen}
              {...(isOpen && { "aria-controls": id })}
            >
              {buttonText}
              <ChevronUpIcon
                className={`${
                  isOpen ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {panelText}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
