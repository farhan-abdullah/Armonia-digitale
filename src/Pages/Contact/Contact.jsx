import emailjs from "@emailjs/browser"; // SDK corretto :contentReference[oaicite:1]{index=1}
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_53u00c3",
        "template_42jr4ms",
        form.current,
        "JWxZsrFCvLmY0tnGZ" // metti la tua public key tra virgolette
      )
      .then(() => {
        toast.success("Email inviata con successo");
        form.current.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Invio email non riuscito");
      });
  };
  return (
    <div className="bg-primary">
      <div class="md:w-[80%] mx-auto p-5  grid gap-x-5 md:grid-cols-2">
        <div className="">
          <div className="mb-5 text-white">
            <div className="space-y-5 mb-8  max-w-[600px]">
              <p className="text-mezenda tracking-wider	">Contact</p>
              <h1 className="text-[white] text-3xl font-semibold">
                Contact us
              </h1>
              {/* <p>
                        Commodo elementum, sed imperdiet nunc euismod etiam
                        aliquet viverra enim. Adipiscing nunc condimentum risus
                        id. Aquam mattis magna facilisi
                     </p> */}
                     <p>Chiamaci a questo numero +393896686583 o scrivici per essere ricontatto 24/7.</p>
            </div>
          </div>
        </div>
        <div className=" bg-secondary p-10">
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full md:py-5 pt-5 md:pt-0"
            >
              <div className="flex flex-col gap-2">
                <input
                  className="w-full h-[56px] border-mezenda/50 text-white text-[20px] border-b-[1px] border-spacing-1 p-2 focus:outline-none   bg-transparent "
                  name="name"
                  placeholder="Nome..."
                  required
                  type="text"
                  id="name"
                />
              </div>

              <div className="flex flex-col my-4 gap-2">
                <input
                  id="email"
                  className="w-full h-[56px]  text-white text-[20px] border-mezenda/50 border-b-[1px] border-spacing-1 p-2 focus:outline-none   bg-transparent"
                  type="email"
                  placeholder="Indirizzo email"
                  name="email"
                  required
                />
              </div>

              <div className="flex flex-col my-4 gap-2">
                <textarea
                  className="w-full  text-white text-[20px] h-[56px] border-mezenda/50 border-b-[1px] border-spacing-1 p-2 focus:outline-none   bg-transparent"
                  rows="3"
                  name="message"
                  required
                  id="message"
                  placeholder="Messaggio"
                ></textarea>
              </div>

              <input
                className="md:my-3 2xl:my-2 hover:bg-mezenda cursor-pointer bg-mezenda/50 duration-500 tracking-widest px-3 py-3 rounded-md font-bold text-white uppercase w-full"
                type="submit"
                value="Invio"
              />
            </form>
            <ToastContainer position="bottom-right" autoClose={5000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
