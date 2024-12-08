import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Campaign from "../../../public/Create campaign-JNMbkEOr.gif";

const accordionData = [
  {
    id: "item-1",
    title: "Set your research goals:",
    content:
      "Define your research objectives and key questions using Elzo's user-friendly dashboard, either using templates or from scratch.",
  },
  {
    id: "item-2",
    title: "Launch AI Interviews:",
    content:
      "Our AI conducts in-depth interviews with your target audience, gathering valuable insights and feedback.",
  },
  {
    id: "item-3",
    title: "Get actionable insights:",
    content:
      "Receive comprehensive analysis and actionable recommendations based on the interview data collected.",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full bg-foreground space-y-8 p-3 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="text-4xl font-bold text-white">How it works ✅</h2>
              </div>
              <p className="text-xl text-gray-300">
                Streamline Your Workflow with ELZO's Simple Process
              </p>

              <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
                {accordionData.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border-b border-slate-500">
                    <AccordionTrigger className="text-white hover:text-white hover:no-underline text-xl font-medium">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <Image src={Campaign} alt="Campaign" className="w-fit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
