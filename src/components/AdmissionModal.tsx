import React from 'react';
import { X } from 'lucide-react';
import AdmissionForm from './AdmissionForm';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#FCF9F2] rounded-[32px] overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto transform scale-100 transition-all duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-brand-forest/60 hover:text-brand-forest p-2 rounded-full hover:bg-brand-sage/20 transition-all z-20 cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal content */}
        <div className="p-1">
          {/* We reuse the form here, and close the modal on success */}
          <AdmissionForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;
