"use client"
import { Button } from '@/app/components/Button';
import { Modal } from '@/app/components/Modal'
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import ModalProceedPayTwo from "../../sections/ModalProceedPayTwo";
interface ModalType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalTierTwo = ({ open, setOpen }: ModalType) => {
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
            <h2 className="text-lg font-bold">
              Full-Scale Business Development
            </h2>
            <p className="text-sm">
              This tier is designed for businesses ready to scale, refine their
              operations, and expand their market reach. It provides
              comprehensive support for strategic growth, helping you achieve
              long-term success with a hands-on approach.
            </p>
            <h3 className="mt-4 text-lg font-bold">Who It’s For</h3>
            <ul className="text-sm">
              <li>
                ● Growing businesses looking to scale operations or expand into
                new markets.
              </li>
              <li>
                ● Companies that need help with branding, marketing, or
                operational efficiency.
              </li>
              <li>● Businesses planning to launch new products or services.</li>
            </ul>
            <h3 className="mt-4 text-lg font-bold">Deliverables</h3>
            <ul className="text-sm">
              <li>
                <strong>Comprehensive Business Analysis:</strong>
                <ul>
                  <li>SWOT analysis with detailed insights.</li>
                  <li>Competitor analysis with benchmarking data.</li>
                  <li>
                    Customer insights report (based on surveys or reviews).
                  </li>
                  <li>Operational process evaluation.</li>
                </ul>
              </li>
              <li>
                <strong>Custom Strategic Plan:</strong>
                <ul>
                  <li>
                    Detailed roadmap covering:
                    <ul>
                      <li>Branding and marketing strategies.</li>
                      <li>Operational improvements.</li>
                      <li>
                        Financial planning (e.g., cost optimization, revenue
                        growth strategies).
                      </li>
                    </ul>
                  </li>
                  <li>6–12 month timeline with milestones and KPIs.</li>
                </ul>
              </li>
              <li>
                <strong>Implementation Support:</strong>
                <ul>
                  <li>
                    Assistance with executing selected strategies (e.g.,
                    rebranding, launching campaigns, process optimization).
                  </li>
                  <li>
                    Introductions to Tahwil’s network of wellness experts for
                    collaboration.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Workshops or Training:</strong>
                <ul>
                  <li>
                    Up to 2 customized training sessions (e.g., branding,
                    customer engagement, or operational efficiency).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Progress Monitoring:</strong>
                <ul>
                  <li>
                    Monthly or bi-weekly updates with performance tracking
                    (e.g., metrics dashboards, reports).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tools & Resources:</strong>
                <ul>
                  <li>
                    Templates for business operations, marketing plans, or
                    financial tracking.
                  </li>
                  <li>
                    Access to analytics or project management tools (if
                    applicable).
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <Button className="bg-primary flex gap-2">
              Proceed <ArrowRight size={20} className="" />
            </Button>
          </div>
        </div>
      </Modal>
      <ModalProceedPayTwo open={isOpen} setOpen={setIsOpen} />
    </>
  );
}

export default ModalTierTwo