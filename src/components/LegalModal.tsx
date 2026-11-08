import { X, Shield, FileText, AlertTriangle, Scale } from "lucide-react";
import React from "react";

export type LegalPage = "privacy" | "terms" | "food-safety" | "allergens" | null;

const CONTACT = {
  email: "valli@sorufoodgroup.com",
  phone: "+91 98400 00000",
  address: "Chennai, Tamil Nadu, India",
  company: "Soru Food Group Private Limited",
};

const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-2">
    <h3 className="font-bold text-white text-[14px]">{title}</h3>
    <div className="text-white/65 text-[13px] leading-relaxed space-y-2">{children}</div>
  </section>
);

/* ── PRIVACY POLICY ── */
const Privacy = () => (
  <div className="space-y-5">
    <div className="flex items-center gap-3"><Shield size={20} className="text-[#f5e3b1]" /><h2 className="text-xl font-serif font-bold text-white">Privacy Policy</h2></div>
    <p className="text-white/40 text-[11px] uppercase tracking-wide">Last updated: June 2026</p>
    <S title="1. Who We Are">
      <p><strong className="text-white/90">{CONTACT.company}</strong> is the data controller for any personal information processed in connection with this website.</p>
      <p>Registered office: {CONTACT.address}</p>
      <p>Email: <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] underline">{CONTACT.email}</a> &nbsp;|&nbsp; Phone: {CONTACT.phone}</p>
    </S>
    <S title="2. What Data We Collect and How">
      <p>This website <strong className="text-white/90">does not collect any data through forms, databases, or tracking systems.</strong></p>
      <p>The only way we receive personal information is when you choose to contact us directly by email at {CONTACT.email}. In that case, we receive whatever information you include in your message, typically your name and email address.</p>
      <p>We do not use Google Analytics, advertising pixels, or any third-party tracking scripts. No third-party data-collection widgets are embedded on this site.</p>
    </S>
    <S title="3. Cookies">
      <p>This site uses only a single essential cookie to remember your cookie consent preference (stored locally in your browser). No tracking or advertising cookies are used.</p>
    </S>
    <S title="4. How We Use Your Information">
      <p>If you email us, we use your contact details solely to respond to your enquiry. We do not add you to any mailing list without your explicit consent, and we do not share your details with third parties.</p>
    </S>
    <S title="5. Legal Basis for Processing">
      <p>When you email us, we process your personal data on the basis of <strong className="text-white/90">legitimate interest</strong>, specifically, to respond to your message. You may request deletion of your correspondence at any time by emailing us.</p>
    </S>
    <S title="6. Data Retention">
      <p>Email correspondence is retained for as long as necessary to manage the enquiry, and no longer than 3 years unless a legal obligation requires otherwise.</p>
    </S>
    <S title="7. Your Rights Under the DPDP Act 2023">
      <p>You have the right to: access your personal data, request correction or erasure, restrict or object to processing, and lodge a complaint with the <strong className="text-white/90">Ministry of Electronics and Information Technology (MeitY)</strong> under India's Digital Personal Data Protection Act 2023.</p>
      <p>To exercise any of these rights, email us at <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] underline">{CONTACT.email}</a>.</p>
    </S>
    <S title="8. Third-Party Links">
      <p>Our website contains links to third-party sites (e.g., LinkedIn, Companies House). We are not responsible for the privacy practices of those sites.</p>
    </S>
    <S title="9. Changes to This Policy">
      <p>We may update this Privacy Policy from time to time. The date at the top of this page will always reflect the most recent version.</p>
    </S>
  </div>
);

/* ── TERMS OF SERVICE ── */
const Terms = () => (
  <div className="space-y-5">
    <div className="flex items-center gap-3"><FileText size={20} className="text-[#f5e3b1]" /><h2 className="text-xl font-serif font-bold text-white">Terms of Service</h2></div>
    <p className="text-white/40 text-[11px] uppercase tracking-wide">Last updated: June 2026</p>
    <S title="1. About This Website">
      <p>This website is operated by <strong className="text-white/90">{CONTACT.company}</strong>, a company registered in India (Registered Office: {CONTACT.address}).</p>
      <p>This is a pre-launch informational website. SORU is currently in the product development phase. No products are available for purchase at this time. All product descriptions, nutritional claims, formulation details, and launch timelines published on this website reflect current development targets and are subject to change prior to commercial launch.</p>
    </S>
    <S title="2. Acceptance of Terms">
      <p>By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use this website.</p>
    </S>
    <S title="3. Intellectual Property">
      <p>All content on this website, including but not limited to the SORU brand name, logo, product names, product designs, written content, images, and graphics, is the property of {CONTACT.company} and is protected by Indian copyright and intellectual property law.</p>
      <p>You may not reproduce, distribute, modify, or use any content from this website for commercial purposes without prior written permission from {CONTACT.company}.</p>
    </S>
    <S title="4. Accuracy of Information">
      <p>SORU makes reasonable efforts to ensure the information on this website is accurate and up to date. However, as this is a pre-launch website, all product details are development-stage targets only. They do not represent the final product and may differ from what is ultimately brought to market.</p>
      <p>We do not accept liability for any decisions made in reliance on information contained on this website.</p>
    </S>
    <S title="5. No Warranty">
      <p>This website is provided on an "as is" and "as available" basis. SORU makes no warranties, express or implied, regarding the website's availability, accuracy, completeness, or fitness for any particular purpose.</p>
    </S>
    <S title="6. Limitation of Liability">
      <p>To the fullest extent permitted by law, SORU shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of, or inability to use, this website or any content on it.</p>
    </S>
    <S title="7. Third-Party Links">
      <p>This website contains links to third-party websites including LinkedIn and Companies House. These links are provided for your convenience only. SORU has no control over the content of those sites and accepts no responsibility for them.</p>
    </S>
    <S title="8. Governing Law">
      <p>These Terms of Service are governed by the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.</p>
    </S>
    <S title="9. Changes to These Terms">
      <p>We may update these Terms of Service from time to time. The date at the top of this page will reflect the most recent version. Continued use of the website following any changes constitutes your acceptance of the updated terms.</p>
    </S>
    <S title="10. Contact">
      <p>Email: <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] underline">{CONTACT.email}</a></p>
      <p>Phone: {CONTACT.phone}</p>
      <p>Registered Office: {CONTACT.address}</p>
    </S>
  </div>
);

/* ── FOOD SAFETY & REGULATIONS ── */
const FoodSafety = () => (
  <div className="space-y-5">
    <div className="flex items-center gap-3"><Scale size={20} className="text-[#f5e3b1]" /><h2 className="text-xl font-serif font-bold text-white">Food Safety &amp; Regulations</h2></div>
    <p className="text-white/40 text-[11px] uppercase tracking-wide">Last updated: June 2026</p>
    <S title="1. Our Regulatory Commitment">
      <p>SORU is committed to developing food products that fully comply with all applicable Indian food safety and labelling regulations under FSSAI. Our products are being designed from the ground up with regulatory compliance as a core requirement.</p>
      <p>The primary legislation and standards we are working to comply with include:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Food Safety and Standards Act 2006 (FSSAI)</li>
        <li>Food Safety and Standards (Labelling and Display) Regulations 2020</li>
        <li>Food Safety and Standards (Health Claims) Regulations 2018</li>
        <li>FSSAI Organic Foods Regulations 2017</li>
        <li>FSSAI guidelines on allergen labelling</li>
        <li>Codex Alimentarius standards where applicable</li>
      </ul>
    </S>
    <S title="2. Pre-Launch Status">
      <p>SORU is currently in the product development and R&D phase. No products are commercially available at this time. Our target commercial launch is Q4 2026.</p>
      <p>All product descriptions, nutritional figures, and formulation details published on this website are development-stage targets only. Full regulatory compliance documentation will be completed and verified before any product is placed on the market.</p>
    </S>
    <S title="3. Organic Certification">
      <p>We are committed to sourcing millet grains from certified organic farms. Our organic certification is currently in progress under FSSAI Organic Foods Regulations 2017.</p>
      <p>In accordance with FSSAI organic labelling regulations, the term "organic" will only appear on final product packaging once full certification has been granted.</p>
    </S>
    <S title="4. Nutritional Labelling">
      <p>Our final product packaging will include a full Nutrition Declaration in compliance with FSSAI Labelling and Display Regulations 2020. All nutritional figures currently referenced on this website are based on target formulation data and are subject to change following final production and independent laboratory testing.</p>
    </S>
    <S title="5. Health and Nutrition Claims">
      <p>Any nutrition or health claims made about our products are made in line with the requirements of retained Regulation (EC) No 1924/2006. Where claims appear on this pre-launch website, they reflect development targets and will be substantiated through verified nutritional analysis before appearing on commercial products.</p>
    </S>
    <S title="6. Food Safety Management">
      <p>SORU is committed to implementing robust food safety management practices in line with HACCP (Hazard Analysis and Critical Control Points) principles as we move towards production.</p>
    </S>
    <S title="7. Enquiries from Trade Partners">
      <p>Retail buyers, airline catering partners, and trade enquirers are welcome to contact us directly for further information about our regulatory compliance progress.</p>
      <p>Email: <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] underline">{CONTACT.email}</a> &nbsp;|&nbsp; Phone: {CONTACT.phone}</p>
    </S>
    <S title="8. Updates to This Page">
      <p>This page will be updated as our regulatory compliance documentation progresses. We aim to have full documentation published by Q4 2026.</p>
    </S>
  </div>
);

/* ── ALLERGEN INFORMATION ── */
const Allergens = () => (
  <div className="space-y-5">
    <div className="flex items-center gap-3"><AlertTriangle size={20} className="text-[#f5e3b1]" /><h2 className="text-xl font-serif font-bold text-white">Allergen Information</h2></div>
    <p className="text-white/40 text-[11px] uppercase tracking-wide">Last updated: June 2026</p>
    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
      <p className="text-yellow-200 text-[13px] font-semibold">Important Notice</p>
      <p className="text-yellow-200/80 text-[12px] mt-1">SORU is currently a pre-launch food company. No products are available for sale. The allergen information below reflects our development-stage target formulation only. It has not been verified through final manufacturing or independent allergen testing. Do not use this information to make dietary or medical decisions regarding food allergies or intolerances.</p>
    </div>
    <S title="1. Major Allergens (FSSAI)">
      <p>Under FSSAI Labelling and Display Regulations 2020, food businesses are required to declare the presence of major allergens on all product packaging. These include:</p>
      <ul className="list-disc pl-5 space-y-1 columns-2">
        <li>Cereals containing gluten</li><li>Crustaceans</li><li>Eggs</li><li>Fish</li>
        <li>Peanuts</li><li>Soybeans</li><li>Milk (incl. lactose)</li><li>Tree Nuts</li>
        <li>Celery</li><li>Mustard</li><li>Sesame seeds</li><li>Sulphur dioxide</li>
        <li>Lupin</li><li>Molluscs</li>
      </ul>
      <p>When our products are commercially launched, full allergen declarations will appear clearly on all product packaging in accordance with FSSAI Labelling and Display Regulations 2020.</p>
    </S>
    <S title="2. Our Product (Development-Stage Allergen Information)">
      <p><strong className="text-white/90">Product: Millet Cereal (Target Formulation)</strong></p>
      <p>The target formulation does not intentionally include any of the 14 major allergens. Millet grain is naturally free from gluten. However, the following important limitations apply at this pre-launch stage:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>No independent allergen testing has been carried out on our product formulation</li>
        <li>No cross-contamination risk assessment has been conducted, as manufacturing has not yet commenced</li>
        <li>We have not yet confirmed the allergen status of all supplier ingredients or the manufacturing environment</li>
        <li>Until full testing and certification is complete, we cannot make any guaranteed allergen-free claims</li>
      </ul>
    </S>
    <S title="3. Gluten and Coeliac Disease">
      <p>Millet is a naturally gluten-free grain. However, our product has not been tested to the standard required to carry a certified "Gluten-Free" claim (20 parts per million threshold). People with coeliac disease or a wheat allergy should not rely on our product being safe for consumption until independent gluten testing has been completed ahead of Q4 2026.</p>
    </S>
    <S title="4. What We Will Confirm Before Launch">
      <ul className="list-disc pl-5 space-y-1">
        <li>Complete independent laboratory allergen testing of the final product formulation</li>
        <li>Full cross-contamination risk assessment of the manufacturing environment</li>
        <li>Verified allergen declarations for all product packaging</li>
        <li>Confirmed allergen information published on this page and all product labels</li>
      </ul>
    </S>
    <S title="5. Contact for Allergen Queries">
      <p>Email: <a href={`mailto:${CONTACT.email}`} className="text-[#f5e3b1] underline">{CONTACT.email}</a></p>
      <p>Phone: {CONTACT.phone}</p>
      <p>We take allergen safety extremely seriously and are committed to providing complete and accurate allergen information before any product reaches consumers.</p>
    </S>
  </div>
);

/* ── MODAL ── */
export default function LegalModal({ page, onClose }: { page: LegalPage; onClose: () => void }) {
  if (!page) return null;

  const content = {
    privacy:       <Privacy />,
    terms:         <Terms />,
    "food-safety": <FoodSafety />,
    allergens:     <Allergens />,
  }[page];

  return (
    <div className="fixed inset-0 z-[500] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#1a0800] border border-[#f5e3b1]/15 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2px] uppercase">SORU</p>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1 rounded"><X size={18} /></button>
        </div>
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)]">{content}</div>
      </div>
    </div>
  );
}
