import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { MFButton } from "../common/MFButton";
import CloseIcon from "../icons/CloseIcon";
import { Event } from "../services/CalendarSection";
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDateRange?: { start: Date; end: Date };
  onConfirm?: (event: Event) => void;
}
const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedDateRange,
  onConfirm,
}) => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (selectedDateRange) {
      const startHour = selectedDateRange.start.getHours();
      const endHour = selectedDateRange.end.getHours();
      setMessage(
        `Vreau sa fac o programare pe data de ${selectedDateRange.start.toLocaleDateString()} intre orele ${startHour} si ${endHour}.`
      );
    }
  }, [selectedDateRange]);

  const handleContactSubmit = () => {
    const event: Event = {
      id: Date.now().toString(),
      title: "Programare în așteptare",
      start: selectedDateRange!.start,
      end: selectedDateRange!.end,
      color: "#588577",
    };
    onConfirm?.(event);
    window.location.href = `mailto:youremail@example.com?subject=Contact from ${email}&body=${message}`;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center ">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Contact Me
            </Dialog.Title>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <CloseIcon />
            </button>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Feel free to reach out via email or WhatsApp:
              </p>
              <div className="my-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email:
                </label>
                <input
                  placeholder="Emailul tau..."
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="my-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message:
                </label>
                <textarea
                  placeholder="Mesajul tau.."
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 p-2 w-full border rounded-md"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://wa.me/yourPhoneNumber" // replace with your phone number in international format
                  className="block mt-3 text-green-500 hover:underline"
                >
                  Chat on WhatsApp
                </a>
                <MFButton className="mt-4" onClick={handleContactSubmit}>
                  Send Email
                </MFButton>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal;
