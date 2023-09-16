import React from "react";
import "../style/service.css"; // You should have a corresponding CSS file

const Service = () => {
  return (
    <div className="service">
      <h1>Our Services</h1>
      <p>
        We offer a range of services to help you generate captions for your
        images. Whether you're a content creator, a business owner, or just
        looking to add captions to your personal photos, we've got you covered.
      </p>

      <div className="service-card">
        {/* <img
          src="image1.jpg"
          alt="Image Caption Service 1"
          className="service-image"
        /> */}
        <h2>Automatic Caption Generation</h2>
        <p>
          Our advanced AI algorithms can automatically generate captions for
          your images, saving you time and effort.
        </p>
      </div>

      <div className="service-card">
        {/* <img
          src="image2.jpg"
          alt="Image Caption Service 2"
          className="service-image"
        /> */}
        <h2>Custom Caption Editing</h2>
        <p>
          Need to fine-tune your captions? Our easy-to-use caption editor allows
          you to customize captions to fit your style and message perfectly.
        </p>
      </div>

      <div className="service-card">
        {/* <img
          src="image3.jpg"
          alt="Image Caption Service 3"
          className="service-image"
        /> */}
        <h2>Multiple Language Support</h2>
        <p>
          We support captions in multiple languages, making it easy for you to
          reach a global audience.
        </p>
      </div>

      <div className="service-card">
        <img
          src="image4.jpg"
          alt="Image Caption Service 4"
          className="service-image"
        />
        <h2>API Integration</h2>
        <p>
          Integrate our caption generation service into your application or
          website with our developer-friendly API.
        </p>
      </div>

      <p>
        Whether you have a single image or a large collection, our services are
        designed to meet your captioning needs efficiently and effectively. Join
        us today and make your images speak!
      </p>
    </div>
  );
};

export default Service;
