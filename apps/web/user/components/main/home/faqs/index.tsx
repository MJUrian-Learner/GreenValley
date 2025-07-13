import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS_ITEMS, SECTION_TITLES } from "@/constants";
import {
  SectionTitle,
  SectionTitleDescription,
  SectionTitleHeader,
} from "@/components/common/section-title";

function FAQs() {
  return (
    <section className="min-h-fit container py-20 flex flex-col gap-12">
      <div className="w-4/12 mx-auto">
        <SectionTitle>
          <SectionTitleHeader>{SECTION_TITLES.faqs.title}</SectionTitleHeader>
          <SectionTitleDescription>
            {SECTION_TITLES.faqs.description}
          </SectionTitleDescription>
        </SectionTitle>
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
