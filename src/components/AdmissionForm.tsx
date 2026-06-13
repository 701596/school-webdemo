import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface AdmissionFormProps {
  onSuccess?: () => void;
}

const AdmissionForm: React.FC<AdmissionFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.parentName && formData.phone) {
      // WhatsApp Redirection
      const phoneNumber = '916005080014'; // Sopore campus contact number
      const text = `Hello Nova Kids Playschool,\n\nI would like to enquire about admission for my child. Here are the details:\n• *Parent's Name*: ${formData.parentName}\n• *Child's Name*: ${formData.childName || 'N/A'}\n• *Child's Age*: ${formData.childAge || 'N/A'}\n• *Phone Number*: ${formData.phone}\n• *Notes*: ${formData.message || 'None'}\n\n*Source*: Website`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
      
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 1500);
      }

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ parentName: '', childName: '', childAge: '', phone: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="bg-[#FCF9F2] p-8 rounded-[32px] border border-brand-sage/40 shadow-lg soft-card-shadow">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-brand-coral animate-pulse" />
        <h3 className="text-xl font-display font-bold text-brand-forest">
          Admissions Enquiry
        </h3>
      </div>

      {submitted ? (
        <div className="bg-brand-sage/20 border border-brand-sage/40 p-6 rounded-2xl text-center space-y-3">
          <span className="block text-xl font-bold text-brand-forest font-display">Enquiry Submitted!</span>
          <p className="text-sm text-brand-forest/80">
            Thank you for registering your interest. Our Sopore campus team will contact you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-[10px] font-bold text-brand-forest/50 uppercase tracking-wider mb-1.5">Parent's Full Name *</label>
            <input
              type="text"
              required
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-brand-sage/40 bg-brand-sand/30 text-brand-forest text-sm font-semibold focus:outline-none focus:bg-[#FFFDF9] focus:ring-2 focus:ring-brand-coral/20 transition-all"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-brand-forest/50 uppercase tracking-wider mb-1.5">Child's Name</label>
              <input
                type="text"
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-brand-sage/40 bg-brand-sand/30 text-brand-forest text-sm font-semibold focus:outline-none focus:bg-[#FFFDF9] focus:ring-2 focus:ring-brand-coral/20 transition-all"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-brand-forest/50 uppercase tracking-wider mb-1.5">Child's Age</label>
              <input
                type="text"
                value={formData.childAge}
                onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-brand-sage/40 bg-brand-sand/30 text-brand-forest text-sm font-semibold focus:outline-none focus:bg-[#FFFDF9] focus:ring-2 focus:ring-brand-coral/20 transition-all"
                placeholder="e.g. 3 Years"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-brand-forest/50 uppercase tracking-wider mb-1.5">Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-brand-sage/40 bg-brand-sand/30 text-brand-forest text-sm font-semibold focus:outline-none focus:bg-[#FFFDF9] focus:ring-2 focus:ring-brand-coral/20 transition-all"
              placeholder="Mobile number"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-brand-forest/50 uppercase tracking-wider mb-1.5">Message / Notes</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-brand-sage/40 bg-brand-sand/30 text-brand-forest text-sm font-semibold focus:outline-none focus:bg-[#FFFDF9] focus:ring-2 focus:ring-brand-coral/20 transition-all resize-none"
              placeholder="Any specific queries..."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-forest hover:bg-brand-forest/90 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-brand-forest/10 hover:scale-[1.01] cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Submit Inquiry</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default AdmissionForm;
