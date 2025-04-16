import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-2xl md:text-5xl font-bold text-black">
          Have questions ?
        </div>
        <div className="  font-semibold text-2xl md:text-4xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Mercato?</AccordionTrigger>
            <AccordionContent>
              Mercato Agency is a full-service digital marketing agency that
              provides a range of services to help businesses grow online.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How can Mercato help?</AccordionTrigger>
            <AccordionContent>
            Mercato boosts your online visibility, attracts targeted customers, and drives sales through social media, and ads.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How to start ?</AccordionTrigger>
            <AccordionContent>
              You can start by contacting us. We will get back to you within 24
              hours.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger>Support ?</AccordionTrigger>
            <AccordionContent>
            We offer support for all our clients. We are here to help you with any issues or questions you may have. Feel free to reach out to us at <a href="mailto:support@mercato.agency">support@mercato.agency</a>.

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
