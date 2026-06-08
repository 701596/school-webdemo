import React, { useState } from 'react';
import { 
  ClipboardList, 
  Users, 
  CheckCircle2, 
  FileText, 
  CreditCard, 
  AlertCircle, 
  PhoneCall, 
  CalendarDays, 
  X
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Admissions: React.FC = () => {
  // Form State
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [message, setMessage] = useState('');
  
  // Submission Status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const classesList = [
    'Nursery', 'LKG', 'UKG',
    'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!studentName.trim() || !parentName.trim() || !phone.trim() || !selectedClass) {
      setErrorMsg('Please fill in all required fields marked with an asterisk (*).');
      return;
    }

    if (phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Success State
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setStudentName('');
    setParentName('');
    setPhone('');
    setEmail('');
    setSelectedClass('');
    setMessage('');
    setIsSubmitted(false);
  };

  const steps = [
    {
      step: '01',
      icon: <ClipboardList className="w-8 h-8 text-[#004d61]" />,
      title: 'Inquiry & Registration',
      description: 'Fill out the online enquiry form below, or visit our Pandesara campus to collect the prospectus and admission brochure.'
    },
    {
      step: '02',
      icon: <Users className="w-8 h-8 text-[#004d61]" />,
      title: 'Parent-Student Interaction',
      description: 'Our academic advisors will schedule a meeting with you and your child to discuss curriculum choices and learning goals.'
    },
    {
      step: '03',
      icon: <CheckCircle2 className="w-8 h-8 text-[#004d61]" />,
      title: 'Verification & Enrollment',
      description: 'Submit the required records, complete the fee requirements, and secure your child’s enrollment for the academic year.'
    }
  ];

  const documents = [
    { title: 'Birth Certificate', desc: 'Official government record (original + copy) required for Nursery, LKG, and Class 1.' },
    { title: 'School Leaving Certificate (L.C.)', desc: 'Transfer certificate duly counter-signed by the education officer for Class 2 to 10.' },
    { title: 'Aadhar Cards', desc: 'Copy of Aadhar Cards of both the student and the primary parent/guardian.' },
    { title: 'Passport-Size Photos', desc: '3 recent passport-size color photographs of the student in proper clothing.' },
    { title: 'Previous Progress Report', desc: 'Term reports/mark sheets from the school last attended (for Class 2 onwards).' }
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-[#004d61] py-16 px-4 md:px-8 border-b border-[#f0ad00]/10 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(240,173,0,0.04)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Admissions Open 2025-26
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light leading-relaxed">
              Invest in your child’s tomorrow. Learn about our admission processes, documents checklist, and submit your inquiry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Admission Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="text-[#004d61] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#f0ad00]"></span> Enrollment Guide <span className="w-4 h-0.5 bg-[#f0ad00]"></span>
            </div>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl mt-2">
              Our Admission Procedure
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-3">
              We maintain a simplified, parent-friendly admission process. Follow these three easy stages.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <ScrollReveal key={idx} delayClass={`delay-${idx * 100}`}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-150 relative hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <span className="absolute top-6 right-8 font-sans font-extrabold text-5xl text-[#f0ad00]/30">
                  {item.step}
                </span>
                <div className="p-4 bg-[#004d61]/5 rounded-2xl w-fit text-[#004d61] mb-6">
                  {item.icon}
                </div>
                <h3 className="font-sans font-extrabold text-xl text-[#004d61] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. Form & Documents Grid */}
      <section className="bg-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Documents Checklist */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <ScrollReveal className="space-y-4">
              <span className="text-[#004d61] text-xs font-bold uppercase tracking-widest block">Important Checkpoints</span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#004d61] leading-tight">
                Required Records & Documents
              </h2>
              <p className="text-gray-650 text-sm leading-relaxed">
                Parents are requested to bring the following records (original and photocopy sets) for verification during final enrollment visits.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {documents.map((doc, idx) => (
                <ScrollReveal key={idx} delayClass={`delay-${idx * 50}`}>
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200/60 flex gap-4">
                    <div className="p-2.5 bg-[#f0ad00]/10 text-[#004d61] rounded-xl h-fit shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-extrabold text-slate-800 text-sm sm:text-base leading-tight">{doc.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-normal">{doc.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Fee Enquiry Alert Box */}
            <ScrollReveal delayClass="delay-250">
              <div className="bg-[#004d61] text-white p-6 rounded-2xl shadow-md border border-white/5 flex gap-4 items-start">
                <CreditCard className="w-6 h-6 text-[#f0ad00] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-sans font-extrabold text-white text-base">Fee Structure Enquiry</h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    To maintain transparency, we share detailed fee details directly with parents at the school administration office. <strong>Please contact us or visit the campus for the detailed fee structure.</strong>
                  </p>
                  <a href="tel:+912612899533" className="inline-flex items-center gap-1.5 text-xs text-[#f0ad00] font-bold hover:underline">
                    <PhoneCall className="w-3.5 h-3.5" /> Call Administration Now
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Working Admission Inquiry Form */}
          <div className="lg:col-span-7 w-full text-left">
            <ScrollReveal className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-150">
              <h3 className="font-sans font-extrabold text-2xl text-[#004d61] mb-1">Admission Enquiry Form</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-6 font-medium">
                Fill out this form and our admissions office will call you within 24 hours.
              </p>

              {errorMsg && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-xl text-xs sm:text-sm mb-6 flex gap-2.5 items-center">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="studentName" className="text-xs font-bold text-gray-600 block">
                      Student Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="e.g. Aarav Patel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-250 focus:border-[#004d61] focus:outline-none text-sm transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="parentName" className="text-xs font-bold text-gray-600 block">
                      Parent / Guardian Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Rajeshbhai Patel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-250 focus:border-[#004d61] focus:outline-none text-sm transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-600 block">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-250 focus:border-[#004d61] focus:outline-none text-sm transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-gray-600 block">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. parent@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-250 focus:border-[#004d61] focus:outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="classClass" className="text-xs font-bold text-gray-600 block">
                    Class Applying For <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="classClass"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-250 focus:border-[#004d61] focus:outline-none text-sm bg-white transition-colors cursor-pointer"
                    required
                  >
                    <option value="">-- Choose Class --</option>
                    {classesList.map((item, idx) => (
                      <option key={idx} value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-gray-600 block">
                    Additional Message or Queries
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter any queries, siblings in school, etc."
                    className="w-full px-4 py-3 rounded-xl border border-gray-250 focus:border-[#004d61] focus:outline-none text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f0ad00] hover:bg-[#d49a00] text-white font-extrabold py-4 rounded-xl shadow-md transition-colors duration-200 cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Success Modal Popup */}
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
            <h3 className="font-sans font-extrabold text-2xl text-[#004d61] mb-2">Inquiry Submitted!</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Dear {parentName}, we have received your inquiry for <strong>{studentName}</strong> (applying for <strong>{selectedClass}</strong>). 
              Our admissions officer will contact you on <strong>{phone}</strong> shortly.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-gray-150 mb-6 flex gap-3 text-left">
              <CalendarDays className="w-5 h-5 text-[#f0ad00] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs text-slate-700 block">Office Working Hours</span>
                <span className="text-[11px] text-gray-500 block mt-0.5 font-medium">Mon to Sat: 8:00 AM to 1:30 PM</span>
              </div>
            </div>
            <button
              onClick={handleResetForm}
              className="w-full bg-[#004d61] hover:bg-[#003847] text-white font-extrabold py-3.5 rounded-xl shadow-md transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
