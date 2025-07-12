import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS_ITEMS } from "@/constants";

function FAQs() {
  return (
    <section className="min-h-fit container py-20 flex flex-col gap-12">
      <div className="text-center w-4/12 mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-primary tracking-wide font-serif">
          Frequently Asked Questions
        </h2>
        <p>
          Find answers to frequently asked questions about our services and
          facilities
        </p>
      </div>
      <Accordion type="multiple" className="w-6/12 mx-auto space-y-3">
        {FAQS_ITEMS.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="border border-border px-4 rounded-lg shadow-sm"
          >
            <AccordionTrigger className="font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQs;
