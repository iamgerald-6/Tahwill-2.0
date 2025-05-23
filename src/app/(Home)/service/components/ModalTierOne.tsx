"use client"
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/Button";
import { Modal } from "@/app/components/Modal";

import { useState } from "react";
import ModalProceedPayOne from "../../sections/ModalProceedPayOne";

interface ModalType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TierOne = ({ open, setOpen }: ModalType) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        title="Book an appointment"
        size="xl"
        setter="state"
      >
        <div className="mt-5">
          <div>
            <h2 className="text-lg font-bold">Basic Consultation</h2>
            <p className="text-sm">
              This tier is ideal for small businesses or startups seeking
              initial guidance to overcome specific challenges or identify
              opportunities. It’s perfect for clients who need actionable advice
              and quick solutions without a long-term commitment.
            </p>
            <h3 className="mt-4 text-lg font-bold">Who it is For</h3>
            <ul className="text-sm">
              <li>
                ● Startups or entrepreneurs in the ideation or early stages.
              </li>
              <li>● Small businesses with limited budgets.</li>
              <li>
                ● Companies seeking a one-time assessment or quick insights
              </li>
            </ul>
            <h3 className="mt-4 text-lg font-bold">Deliverables</h3>
            <ul className=" text-sm">
              <li className="mt-3">
                <strong>Initial Assessment</strong>
                <ul>
                  <li>
                    Diagnostic session to identify key challenges and
                    opportunities.
                  </li>
                  <li>SWOT analysis (3–5 key points in each category).</li>
                </ul>
              </li>
              <li>
                <strong>Quick-Win Strategy</strong>
                <ul>
                  <li>
                    Recommendations for 2–3 actionable, high-impact
                    improvements.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Action Plan</strong>
                <ul>
                  <li>
                    A one-page roadmap outlining immediate steps to address the
                    identified challenge.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Consultation Report</strong>
                <ul>
                  <li>
                    A summary document (1–3 pages) detailing findings and next
                    steps.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Follow-Up Session</strong>
                <ul>
                  <li>One follow-up session.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <Button onClick={()=>setIsOpen(true)} className="bg-primary flex gap-2">
              Proceed <ArrowRight size={20} className="" />
            </Button>
          </div>
        </div>
      </Modal>
      <ModalProceedPayOne open={isOpen} setOpen={setIsOpen} />
    </>
  );
}

export default TierOne