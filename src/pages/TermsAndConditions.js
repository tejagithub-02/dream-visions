import React from 'react';
import './PrivacyPolicy.css'; // Reuse Privacy Policy styles for consistent layout

const TermsAndConditions = () => {
  return (
    <div className="terms-conditions">
      <header className="privacy-header">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <p className="intro">
            Welcome to VISION DREAM ELECTRICAL AND ELECTRONICS. Please read our terms carefully before purchasing electronic appliances.
          </p>
        </div>
      </header>

      <div className="container privacy-content">
        <section className="policy-section">
          <h2>Company Information</h2>
          <address className="company-address">
            <strong>Company Name:</strong> VISION DREAM ELECTRICAL AND ELECTRONICS<br />
            <strong>Address:</strong> 1st Floor, No. 34, Hegganahalli,<br />
            2nd Cross, 2nd Main Road,<br />
            Near Government Ration Shop &amp; Opp. Drinking Water Shop,<br />
            Bengaluru – 590091,<br />
            Karnataka, India.<br />
            <strong>Contact:</strong> 8310099843
          </address>
        </section>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions ("Terms") govern the sale of electronic appliances including but not limited to televisions, refrigerators, washing machines, and other related products by Vision Dream Pvt. Ltd. ("Seller", "we", "us", "our") to the customer ("Buyer", "you"). By placing an order or purchasing from us, you agree to be bound by these Terms.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Product Information</h2>
          <ul>
            <li>All specifications, features, images, and prices of products are subject to change without prior notice.</li>
            <li>Products are sold subject to availability.</li>
            <li>Minor variations in color or design may occur due to screen settings or manufacturing updates.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Pricing and Payment</h2>
          <ul>
            <li>Prices are listed in INR and include applicable taxes unless stated otherwise.</li>
            <li>Payment must be made in full at the time of purchase unless a financing option (EMI) is agreed upon.</li>
            <li>We accept payments via credit/debit cards, UPI, net banking, EMI, cash, etc.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Shipping and Delivery</h2>
          <ul>
            <li>Delivery timelines may vary based on location and product availability.</li>
            <li>We are not responsible for delays due to courier services or unforeseen circumstances.</li>
            <li>Delivery charges (if applicable) will be informed during checkout or invoicing.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Installation and Demonstration</h2>
          <p>
            Installation is provided by the brand/manufacturer's authorized service centers in most cases. You may need to contact the respective brand’s customer support for scheduling installation or demo services.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Warranty and After-Sales Support</h2>
          <ul>
            <li>Products come with a standard manufacturer warranty, the duration of which is specified on the product or invoice.</li>
            <li>Warranty covers manufacturing defects only. It does not cover:
              <ul className="nested-list">
                <li>Physical damage</li>
                <li>Damage due to misuse, electrical surges, or unauthorized repairs</li>
                <li>Consumables or accessories</li>
              </ul>
            </li>
            <li>For warranty claims, contact the brand's service center directly.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Return, Replacement, and Refund</h2>
          <ul>
            <li>Products are eligible for replacement only if:
              <ul className="nested-list">
                <li>They are found damaged or defective at the time of delivery</li>
                <li>They are reported within 48 hours of delivery</li>
              </ul>
            </li>
            <li>Refunds are not applicable for opened or used appliances unless agreed in special cases.</li>
            <li>No returns or cancellations are accepted once the product is installed or activated.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>8. Cancellation Policy</h2>
          <ul>
            <li>Orders can be canceled before dispatch.</li>
            <li>Once dispatched, cancellation requests may not be accepted.</li>
            <li>Refunds (if applicable) will be processed within 7-10 working days via the original payment method.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>9. Limitation of Liability</h2>
          <ul>
            <li>We are not liable for indirect, incidental, or consequential damages arising from the use or inability to use the product.</li>
            <li>Our total liability shall not exceed the purchase price of the product.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>10. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts at Karnataka.
          </p>
        </section>

        <section className="policy-section contact-details-section">
          <h2>11. Contact Us</h2>
          <address className="company-address">
            <strong>Company Name:</strong> VISION DREAM ELECTRICAL AND ELECTRONICS<br />
            <strong>Address:</strong> 1st Floor, No. 34, Hegganahalli,<br />
            2nd Cross, 2nd Main Road,<br />
            Near Government Ration Shop &amp; Opp. Drinking Water Shop,<br />
            Bengaluru – 590091,<br />
            Karnataka, India.<br />
            <strong>Contact:</strong> 8310099843<br />
            <strong>Working Hours:</strong> Mon-Sat, 10 AM – 7 PM
          </address>
        </section>

        {/* Spacer at bottom */}
        <div className="bottom-spacer"></div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
