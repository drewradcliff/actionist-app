"use client";

import clsx from "clsx";
import Header from "../header";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={clsx("w-full", isMenuOpen && "fixed")}>
      <Header
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
        showNav={isMenuOpen}
      />
      <div className="prose mx-auto px-8 py-32 sm:py-52">
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy outlines how Actionist handles your information
          when you use our app. Please read this policy carefully to understand
          our practices.
        </p>
        <h2>1. Data Usage:</h2>
        <p>
          Actionist operates solely on your device and does not transmit any
          data to external servers. We do not track or store any usage data,
          including your task lists, completed tasks, or any interactions within
          the app.
        </p>
        <h2>2. Location Data:</h2>
        <p>
          Actionist does not access or collect any location data from your
          device. We do not use GPS or any other location-based services.
        </p>
        <h2>3. Third-Party Integrations:</h2>
        <p>
          Actionist does not integrate with any third-party services, including
          social media platforms or cloud services. Your tasks and data remain
          securely stored on your device.
        </p>
        <h2>4. Children&rsquo;s Privacy:</h2>
        <p>
          Actionist is not intended for use by individuals under the age of 13.
          We do not knowingly collect any personal information from children.
        </p>
        <h2>5. Changes to the Privacy Policy:</h2>
        <p>
          We may update our Privacy Policy to reflect changes in our practices
          or for other operational, legal, or regulatory reasons. Any updates
          will be provided within the app, and it is your responsibility to
          review the Privacy Policy periodically.
        </p>
        <h2>7. Contact Information:</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or
          the use of Actionist, please contact us at{" "}
          <a href="mailto:actionist.app@gmail.com">actionist.app@gmail.com</a>.
        </p>
      </div>
    </main>
  );
}
