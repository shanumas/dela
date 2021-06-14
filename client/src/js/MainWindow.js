import React, { useState } from 'react';
import PropTypes from 'prop-types';
import img from '../img/equipment.png';

function MainWindow({ startCall, clientId }) {
  const [friendID, setFriendID] = useState(null);

  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  const callWithVideo = (video) => {
    const config = { audio: true, video };
    return () => friendID && startCall(true, friendID, config);
  };

  return (
    <div className="container-fluid main-window">
      <div class="row content-section new-section text-center super-background">
        <h1>Dela live!</h1>
        <h2><em>Share vitals with your doctor during online consultation!</em></h2>
      </div>
      <div class="row text-center new-section content-section">
        <div class="container">
        <div class="col-md-6 separation">
          <h3>
            Doctor
          </h3>
          <ul class="fa-ul p-2 h4">
            <li><i class="fa-li fa fa-check"></i>Book meeting with your patient</li>
            <li><i class="fa-li fa fa-check"></i>Use our api to book medical equipment to patient's address</li>
            <li><i class="fa-li fa fa-check"></i>We deliver equipment to patient's home</li>
            <li><i class="fa-li fa fa-check"></i>Equipment are self-usable during consultation</li>
            <li><i class="fa-li fa fa-check"></i>Data automatically streamed to the doctor</li>
            <li><i class="fa-li fa fa-check"></i>We collect equipment after use</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h3>
            Patient
          </h3>
          <ul class="fa-ul p-2 h4">
            <li><i class="fa-li fa fa-check"></i>Book your online doctor</li>
            <li><i class="fa-li fa fa-check"></i>Visit our site and Order equipment suggested by doctor</li>
            <li><i class="fa-li fa fa-check"></i>We deliver equipment to your home</li>
            <li><i class="fa-li fa fa-check"></i>Equipment are self-usable during consultation</li>
            <li><i class="fa-li fa fa-check"></i>Data automatically streamed to the doctor</li>
            <li><i class="fa-li fa fa-check"></i>We collect equipment after use</li>
          </ul>
        </div>
        </div>
      </div>
      <div class="row new-section">
        <div class="container">
        <div class="col-xs-6">
          <div class="boxed">
            <h4>Enter IDs to connect to a Patient
              <br></br>
              <input
                type="text"
                className="txt-clientId"
                spellCheck={false}
                placeholder="Doctor ID"
                onChange={(event) => setFriendID(event.target.value)}
              />
              <input
                type="text"
                className="txt-clientId"
                spellCheck={false}
                placeholder="Patient ID"
                onChange={(event) => setFriendID(event.target.value)}
              />
              <button
                type="button"
                className="btn-action fa fa-phone"
                onClick={callWithVideo(false)}
              />
            </h4>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="boxed">
            <h4>Share your id with the doctor to connect
              <br></br>
              Your id is
              <input
                type="text"
                className="txt-clientId"
                defaultValue={clientId}
                readOnly
              />
            </h4>
          </div>
        </div>
        </div>
      </div>

      <div class="row text-center new-section">
        <a class="btn btn-primary btn-xl" href="#about">Order equipment</a>
      </div>
      <div class="row content-section bg-primary text-white text-center" id="services">
        <div class="container px-4 px-lg-5">
          <div class="content-section-heading">
            <h3 class="text-secondary mb-0">Telemedicine equipment</h3>
            <h2 class="mb-5">What We Deliver</h2>
          </div>
          <div class="row gx-4 gx-lg-5">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span class="service-icon rounded-circle mx-auto mb-3"><i class="fa fa-stethoscope"></i></span>
              <h4><strong>RNK USB stethoscope</strong></h4>
              <h5 class="text-faded mb-0">European MDD and EN 13485 certified</h5>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span class="service-icon rounded-circle mx-auto mb-3"><i class="fa fa-medkit"></i></span>
              <h4><strong>12 lead ECG</strong></h4>
              <h5 class="text-faded mb-0">CE certified and EMA monitored</h5>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
              <span class="service-icon rounded-circle mx-auto mb-3"><i class="fa fa-heart"></i></span>
              <h4><strong>Blood Pressure Monitor</strong></h4>
              <h5 class="text-faded mb-0">
                OMRON
              </h5>
            </div>
            <div class="col-lg-3 col-md-6">
              <span class="service-icon rounded-circle mx-auto mb-3"><i class="fa fa-camera-retro"></i></span>
              <h4><strong>Teleconsultation camera</strong></h4>
              <h5 class="text-faded mb-0">ENT, Dermatology, Intraoral, Wound</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired
};

export default MainWindow;
