
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Platform Development',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`New Inquiry: ${formData.interest}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInterested In: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:hello@onecodelabs.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 bg-cetacean border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <h3 className="text-5xl font-black text-white mb-6 leading-tight">
            Let's Build Something <br />
            <span className="text-primary">Impactful</span>
          </h3>
          <p className="text-lavender/60 text-lg mb-10 max-w-md">
            Ready to transform your vision into a scalable reality? Reach out to our team of experts today.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-pearl/40 text-[10px] uppercase tracking-widest font-bold">Email Us</p>
                <p className="text-lavender text-lg font-medium">hello@onecodelabs.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-burlywood/10 flex items-center justify-center text-burlywood border border-burlywood/20">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-pearl/40 text-[10px] uppercase tracking-widest font-bold">Visit Us</p>
                <p className="text-lavender text-lg font-medium">Global Headquarters, Tech City</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-12">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all group">
               <svg className="w-5 h-5 fill-white group-hover:fill-primary transition-colors" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all group">
               <svg className="w-5 h-5 fill-white group-hover:fill-primary transition-colors" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.599 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 transition-all duration-500 group-hover:bg-primary/10"></div>
          
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-pearl/50 ml-1">Full Name</label>
                <input 
                  className="w-full bg-cetacean/60 border border-white/10 rounded-2xl px-5 py-4 text-lavender focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-lavender/20" 
                  placeholder="John Doe" 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-pearl/50 ml-1">Work Email</label>
                <input 
                  className="w-full bg-cetacean/60 border border-white/10 rounded-2xl px-5 py-4 text-lavender focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-lavender/20" 
                  placeholder="john@company.com" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-pearl/50 ml-1">Interested In</label>
              <select 
                className="w-full bg-cetacean/60 border border-white/10 rounded-2xl px-5 py-4 text-lavender focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              >
                <option className="bg-cetacean">Platform Development</option>
                <option className="bg-cetacean">Cloud Migration</option>
                <option className="bg-cetacean">Security Audit</option>
                <option className="bg-cetacean">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-pearl/50 ml-1">Message</label>
              <textarea 
                className="w-full bg-cetacean/60 border border-white/10 rounded-2xl px-5 py-4 text-lavender focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-lavender/20" 
                placeholder="Tell us about your project..." 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            
            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-2xl transition-all transform active:scale-[0.98] shadow-2xl shadow-primary/30 text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
