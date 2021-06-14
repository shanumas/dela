import React, { useState } from 'react';
import PropTypes from 'prop-types';
import steth from '../img/steth.png';
import ecg from '../img/ecg.png';
import omron from '../img/omron.png';

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
      <div class="row content-section new-section super-background bottom-padding">
        <div class="col-md-6">
          <h1  class="text-primary">Dela!</h1>
          <h3><em>Share vitals with your doctor during online consultation.  We deliver DelaBox* to your home for rental.</em></h3>
          <h4><em>*DelaBox is a box which has computer tablet and telemedicine equipment, which are ready to use. 
            Patient just needs to share their personal code on the box to the doctor during consultation.
            These telemedicine equipment are specially made for self-use, without the help of any healthcare professional.</em></h4>
          <a class="btn btn-primary btn-xl" href="#about">Order DelaBox</a>
        </div>
        <div class="col-md-6">
          <img src={steth} />
          <img src={ecg} />
          <img src={omron} />
        </div>
      </div>
      <div class="row text-center new-section content-section">
        <div class="container">
          <div class="col-md-6 separation">
            <h3 class="text-primary">
              Doctor
            </h3>
            <ul class="fa-ul p-2 h4">
              <li><i class="blue fa-li fa fa-check"></i>Book meeting with your patient.</li>
              <li><i class="blue fa-li fa fa-check"></i>Use our api to book medical equipment to patient's address.</li>
              <li><i class="blue fa-li fa fa-check"></i>We deliver equipment to patient's home.</li>
              <li><i class="blue fa-li fa fa-check"></i>Equipment are self-usable during consultation.</li>
              <li><i class="blue fa-li fa fa-check"></i>Data automatically streamed to the doctor.</li>
              <li><i class="blue fa-li fa fa-check"></i>We collect equipment after use.</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3  class="text-primary">
              Patient
            </h3>
            <ul class="fa-ul p-2 h4">
              <li><i class="blue fa-li fa fa-check"></i>Book your online doctor.</li>
              <li><i class="blue fa-li fa fa-check"></i>Visit our site and Order equipment as suggested by doctor.</li>
              <li><i class="blue fa-li fa fa-check"></i>We deliver equipment to your home.</li>
              <li><i class="blue fa-li fa fa-check"></i>Equipment are self-usable during consultation.</li>
              <li><i class="blue fa-li fa fa-check"></i>Data automatically streamed to the doctor.</li>
              <li><i class="blue fa-li fa fa-check"></i>We collect equipment after use.</li>
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
      <div class="row content-section bg-primary text-white text-center" id="services">
        <div class="container px-4 px-lg-5">
          <div class="content-section-heading">
            <h2 class="text-secondary mb-0 yellow">Telemedicine equipment</h2>
            <h3 class="mb-5">What We Deliver</h3>
          </div>
          <div class="row gx-4 gx-lg-5">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span class="service-icon rounded-circle mx-auto mb-3"><i class="fa fa-stethoscope"></i></span>
              <h4 class="yellow"><strong>RNK USB stethoscope</strong></h4>
              <h5 class="text-faded mb-0">European MDD and EN 13485 certified</h5>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span class="service-icon rounded-circle mx-auto mb-3"><i class="fa fa-medkit"></i></span>
              <h4 class="yellow"><strong>12 lead ECG</strong></h4>
              <h5 class="text-faded mb-0">CE certified and EMA monitored</h5>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
              <span class="service-icon rounded-circle mx-auto mb-3"><i class="fa fa-heart"></i></span>
              <h4 class="yellow"><strong>Blood Pressure Monitor</strong></h4>
              <h5 class="text-faded mb-0">
                Omron
              </h5>
            </div>
            <div class="col-lg-3 col-md-6">
              <span class="service-icon rounded-circle mx-auto mb-3"><i class="fa fa-camera-retro"></i></span>
              <h4 class="yellow"><strong>Teleconsultation camera</strong></h4>
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
