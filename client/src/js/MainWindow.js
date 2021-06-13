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
      <div class="container px-4 px-lg-5 text-center pb-5 mb-3 pt-5">
        <div class="row">
          <h1 class="mb-1">Dela live!</h1>
          <h2 class="mb-5"><em>Share vitals with your doctor during online consultation!</em></h2>
        </div>
        <div class="row">
          <div class="col-xs-6 separation">
            <h3>
              Doctor
            </h3>
            <ul class="fa-ul p-2 h4">
              <li><i class="fa-li fa fa-check"></i>Book meeting with your patient</li>
              <li><i class="fa-li fa fa-check"></i>Use our api to book medical equipment to patient's address</li>
              <li><i class="fa-li fa fa-check"></i>We deliver equipment to your home</li>
              <li><i class="fa-li fa fa-check"></i>Equipment are self-usabe during consultation</li>
              <li><i class="fa-li fa fa-check"></i>Data automatically streamed to the doctor</li>
              <li><i class="fa-li fa fa-check"></i>We collect equipment after use</li>
            </ul>
          </div>
          <div class="col-xs-6">
            <h3>
              Patient
            </h3>
            <ul class="fa-ul p-2 h4">
              <li><i class="fa-li fa fa-check"></i>Book your online doctor</li>
              <li><i class="fa-li fa fa-check"></i>Order equipment suggested by doctor</li>
              <li><i class="fa-li fa fa-check"></i>We deliver equipment to your home</li>
              <li><i class="fa-li fa fa-check"></i>Equipment are self-usabe during consultation</li>
              <li><i class="fa-li fa fa-check"></i>Data automatically streamed to the doctor</li>
              <li><i class="fa-li fa fa-check"></i>We collect equipment after use</li>
            </ul>
          </div>
        </div>
        <div class="row">
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
      <div class="row text-center">
        <a class="btn btn-primary btn-xl" href="#about">Order equipment</a>
      </div>
    </div>
  );
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired
};

export default MainWindow;
