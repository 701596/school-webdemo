import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  X
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Contact: React.FC = () => {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    if (phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setPhone('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-[#004d61] py-16 px-4 md:px-8 border-b border-[#f0ad00]/10 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(240,173,0,0.04)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Contact Us
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light leading-relaxed">
              Have a question or looking to visit our campus? Reach out to us, and we will get back to you promptly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Contact Details & Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <ScrollReveal className="space-y-4">
              <span className="text-[#004d61] text-xs font-bold uppercase tracking-widest block">Connect With GPS</span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#004d61] leading-tight">
                Get In Touch Directly
              </h2>
              <p className="text-gray-650 text-sm leading-relaxed">
                We are here to assist you with admissions, curricula, and administrative details. Feel free to write, call, or visit.
              </p>
            </ScrollReveal>

            {/* Information Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <ScrollReveal delayClass="delay-50">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-150 flex gap-4 hover:border-[#f0ad00] transition-colors">
                  <div className="p-3 bg-[#004d61]/5 text-[#004d61] rounded-xl h-fit shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-slate-800 text-base leading-tight">Campus Address</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed font-medium">
                      141/142, Karmayogi Society 1, Opposite Kavita Hospital, <br />
                      Piyush Point, Pandesara, Surat, Gujarat - 394221
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Phone Card */}
              <ScrollReveal delayClass="delay-100">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-150 flex gap-4 hover:border-[#f0ad00] transition-colors">
                  <div className="p-3 bg-[#004d61]/5 text-[#004d61] rounded-xl h-fit shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-slate-800 text-base leading-tight">Telephone / Mobile</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                      Office: <a href="tel:+912612899533" className="text-[#004d61] font-bold hover:underline">+91 261 289 9533</a>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Admission Help: <a href="tel:+912612899533" className="text-[#004d61] font-bold hover:underline">+91 261 289 9533</a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Email Card */}
              <ScrollReveal delayClass="delay-150">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-150 flex gap-4 hover:border-[#f0ad00] transition-colors">
                  <div className="p-3 bg-[#004d61]/5 text-[#004d61] rounded-xl h-fit shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-slate-800 text-base leading-tight">Email Inquiries</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                      General & Admissions: <br />
                      <a href="mailto:geniuspublicschool15@gmail.com" className="text-[#004d61] font-bold hover:underline">geniuspublicschool15@gmail.com</a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Timing Card */}
              <ScrollReveal delayClass="delay-200">
                <div className="bg-slate-50 p-6 rounded-3xl border border-gray-200 flex gap-4">
                  <div className="p-3 bg-[#f0ad00]/10 text-[#004d61] rounded-xl h-fit shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-slate-800 text-base leading-tight">Office Hours</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-normal">
                      Monday to Saturday: <strong className="text-slate-700">8:00 AM – 1:30 PM</strong>
                    </p>
                    <span className="text-[10px] text-gray-400 block mt-1 font-medium">Closed on Sundays and Public Holidays.</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 w-full text-left">
            <ScrollReveal className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-150">
              <h3 className="font-sans font-extrabold text-2xl text-[#004d61] mb-1">Send a Message</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-6 font-medium">
                Have a query? Drop a message below, and our administration team will respond shortly.
              </p>

              {errorMsg && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-xl text-xs sm:text-sm mb-6 flex gap-2.5 items-center">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-gray-600 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-250 focus:border-[#004d61] focus:outline-none text-sm transition-colors"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-600 block">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-250 focus:border-[#004d61] focus:outline-none text-sm transition-colors"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-gray-600 block">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your queries..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-250 focus:border-[#004d61] focus:outline-none text-sm transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f0ad00] hover:bg-[#d49a00] text-white font-extrabold py-4 rounded-xl shadow-md transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Embed */}
      <section className="w-full bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <ScrollReveal>
              <span className="text-[#004d61] text-xs font-bold uppercase tracking-widest block">Interactive Directions</span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#004d61] mt-1">Find Us On Google Maps</h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delayClass="delay-100" className="w-full rounded-[var(--radius)] overflow-hidden shadow-lg border-4 border-white bg-slate-200 aspect-video md:aspect-[21/9]">
            <iframe
              src="https://maps.google.com/maps?q=Karmayogi%20Society%201,%20Opposite%20Kavita%20Hospital,%20Piyush%20Point,%20Pandesara,%20Surat,%20Gujarat&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Genius Public School Map Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </ScrollReveal>
        </div>
      </section>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative text-center border-t-8 border-green-500">
            <button 
              onClick={handleResetForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-sans font-extrabold text-2xl text-[#004d61] mb-2">Message Sent!</h3>
            <p className="text-gray-550 text-sm leading-relaxed mb-6 font-medium">
              Thank you, <strong>{name}</strong>. Your message has been sent to our desk. We will reach out to you on <strong>{phone}</strong> shortly.
            </p>
            <button
              onClick={handleResetForm}
              className="w-full bg-[#004d61] hover:bg-[#003847] text-white font-extrabold py-3.5 rounded-xl shadow-md transition-colors"
            >
              Okay, Great
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
