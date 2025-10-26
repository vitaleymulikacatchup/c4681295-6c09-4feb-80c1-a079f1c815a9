import React from 'react';
import { ExternalLink, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-delray-teal text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left - Address */}
          <div>
            <div className="mb-4">
              <div className="text-sm font-light tracking-widest mb-1">HOUSE OF</div>
              <div className="text-xl font-bold tracking-wider">DELRAY</div>
              <div className="text-sm font-light tracking-widest mt-1">TEL AVIV</div>
            </div>
            <div className="text-sm">
              <div>8 Hilel Hazaken St.</div>
              <div>Tel Aviv</div>
            </div>
            <div className="mt-4">
              <a 
                href="mailto:hello@delray.com" 
                className="text-sm hover:text-delray-gold transition-colors inline-flex items-center gap-2"
              >
                HELLO@DELRAY.COM
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Center - Links */}
          <div className="md:text-center">
            <div className="space-y-3">
              <div>
                <a href="#" className="text-sm hover:text-delray-gold transition-colors">
                  STAY WITH US
                </a>
              </div>
              <div>
                <a href="#" className="text-sm hover:text-delray-gold transition-colors">
                  RESERVE A TABLE
                </a>
              </div>
              <div>
                <a href="#" className="text-sm hover:text-delray-gold transition-colors">
                  FACEBOOK
                </a>
              </div>
              <div>
                <a href="#" className="text-sm hover:text-delray-gold transition-colors">
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>

          {/* Right - Legal */}
          <div className="md:text-right">
            <div className="space-y-3">
              <div>
                <a href="#" className="text-sm hover:text-delray-gold transition-colors">
                  PRIVACY & POLICIES
                </a>
              </div>
              <div>
                <a href="#" className="text-sm hover:text-delray-gold transition-colors">
                  TERMS & CONDITIONS
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-xs text-white/70">
            © 2024 House of Delray. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;