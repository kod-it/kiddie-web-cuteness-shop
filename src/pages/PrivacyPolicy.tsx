import { Shield, Heart, Lock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            KidsCart
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your family's privacy and security are our top priorities. Here's how we protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 16, 2025
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-xl border">
              <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Family First</h3>
              <p className="text-sm text-muted-foreground">We treat your family's data with the same care we'd want for our own children.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border">
              <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Secure & Encrypted</h3>
              <p className="text-sm text-muted-foreground">All data is encrypted and stored securely with industry-leading protection.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border">
              <Eye className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Transparent</h3>
              <p className="text-sm text-muted-foreground">Clear, simple language - no confusing legal jargon about your privacy.</p>
            </div>
          </div>

          {/* Policy Content */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">What Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Account Information:</strong> When you create an account, we collect your name, email, phone number, and delivery address to fulfill your orders.</p>
                  <p><strong>Order Information:</strong> Details about your purchases, delivery preferences, and payment information (securely processed by trusted payment providers).</p>
                  <p><strong>App Usage:</strong> How you use our app to improve your shopping experience and ensure fast, reliable delivery.</p>
                  <p><strong>Device Information:</strong> Basic device and location data to enable delivery tracking and app functionality.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Delivery Services:</strong> To process and deliver your orders quickly and safely to your family.</p>
                  <p><strong>Customer Support:</strong> To help you with questions, issues, or special requests.</p>
                  <p><strong>Safety & Security:</strong> To verify orders and prevent fraud, keeping our platform safe for all families.</p>
                  <p><strong>Service Improvement:</strong> To enhance our app, add new features, and expand our product selection.</p>
                  <p><strong>Communication:</strong> To send order updates, delivery notifications, and occasional updates about new kid-friendly products.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Special Protection for Children</h2>
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <p className="text-muted-foreground">
                    <strong>We never knowingly collect personal information from children under 13.</strong> Our service is designed for parents and guardians to purchase products for their children. If you believe we have accidentally collected information from a child, please contact us immediately at privacy@kidscart.com.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>We never sell your personal information.</strong> Your family's privacy is not for sale.</p>
                  <p><strong>Delivery Partners:</strong> We share necessary delivery information (address, contact) with our trusted delivery partners to fulfill your orders.</p>
                  <p><strong>Payment Processors:</strong> Secure payment information is handled by certified payment providers (Stripe, PayPal) - we never store credit card details.</p>
                  <p><strong>Legal Requirements:</strong> Only when required by law or to protect the safety of our users and their families.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights & Choices</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Access & Update:</strong> View and update your account information anytime in the app settings.</p>
                  <p><strong>Delete Account:</strong> Request complete account deletion by contacting support@kidscart.com.</p>
                  <p><strong>Marketing Communications:</strong> Opt out of promotional emails anytime (you'll still receive important order updates).</p>
                  <p><strong>Data Portability:</strong> Request a copy of your data in a portable format.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use industry-standard security measures including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Secure servers with regular security audits</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Regular security training for all team members</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <div className="bg-muted/50 rounded-xl p-6">
                  <p className="text-muted-foreground mb-4">
                    Have questions about our privacy practices? We're here to help!
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> privacy@kidscart.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-KIDS</p>
                    <p><strong>Mail:</strong> KidsCart Privacy Team, 123 Kids Avenue, Family City, FC 12345</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
                <p className="text-muted-foreground">
                  We may update this policy occasionally to reflect changes in our services or legal requirements. 
                  We'll notify you of significant changes via email or app notification. The latest version will always be available in our app and website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;