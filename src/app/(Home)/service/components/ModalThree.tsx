
"use client"
import { Button } from "@/app/components/Button";
import { Modal } from "@/app/components/Modal";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ModalPayThree from "../../sections/ModalPayThree";

interface ModalType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalThree = ({ open, setOpen }: ModalType) => {
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
            <h2 className="text-lg font-bold">Long-Term Partnership</h2>
            <p className="text-sm">
              This premium tier offers ongoing strategic collaboration for
              businesses seeking sustained growth, innovation, and leadership in
              their market. It provides end-to-end support tailored to your
              long-term vision.
            </p>
            <h3 className="mt-4 text-lg font-bold">Who It’s For</h3>
            <ul className="text-sm">
              <li>
                ● Established businesses with consistent revenue streams looking
                to maintain leadership and innovate.
              </li>
              <li>
                ● Companies aiming for market expansion, new product
                development, or operational excellence.
              </li>
              <li>
                ● Businesses seeking a trusted partner to provide continuous
                guidance and advisory.
              </li>
            </ul>
            <h3 className="mt-4 text-lg font-bold">Deliverables</h3>
            <ul className="text-sm">
              <li>
                <strong>Holistic Business Development Plan:</strong>
                <ul>
                  <li>
                    A multi-year strategy addressing market expansion,
                    product/service innovation, and operational excellence.
                  </li>
                  <li>Annual and quarterly goals with detailed milestones.</li>
                </ul>
              </li>
              <li>
                <strong>Continuous Advisory:</strong>
                <ul>
                  <li>Regular strategy sessions (monthly or quarterly).</li>
                  <li>
                    On-demand support for emerging challenges or opportunities.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Operational Optimization:</strong>
                <ul>
                  <li>In-depth reviews of processes and workflows.</li>
                  <li>
                    Implementation of best practices tailored to the wellness
                    industry.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Market Insights:</strong>
                <ul>
                  <li>
                    Quarterly reports on industry trends, customer behavior, and
                    competitive analysis.
                  </li>
                  <li>Recommendations for adapting to market changes.</li>
                </ul>
              </li>
              <li>
                <strong>Innovation & R&D Support:</strong>
                <ul>
                  <li>Feasibility studies for new products or services.</li>
                  <li>Support for pilot projects or testing new ideas.</li>
                </ul>
              </li>
              <li>
                <strong>Team Development:</strong>
                <ul>
                  <li>
                    Ongoing training programs for staff (e.g., leadership,
                    customer service, wellness integration).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Partnership Facilitation:</strong>
                <ul>
                  <li>
                    Facilitate connections with key industry players for
                    collaborations or joint ventures.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Comprehensive Reporting:</strong>
                <ul>
                  <li>
                    Detailed quarterly and annual reports tracking progress,
                    ROI, and strategic adjustments.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-primary flex gap-2"
            >
              Proceed <ArrowRight size={20} className="" />
            </Button>
          </div>
        </div>
      </Modal>
      <ModalPayThree open={isOpen} setOpen={setIsOpen} />
    </>
  );
};

export default ModalThree