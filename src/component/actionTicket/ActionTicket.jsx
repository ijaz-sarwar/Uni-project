import React from 'react';

function ActionTicket() {
  return (
    <div>
      <section className='cta-ticket bg-ticket overlay-dark'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              {/* Get ticket info */}
              <div className='content-block'>
                <h2>
                  Get Ticket <span className='alternate'>Now!</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmtempor incidi
                </p>
                <a href className='btn btn-main-md'>
                  Buy ticket
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='image-block'>
          <img
            src='images/speakers/speaker-ticket.png'
            alt=''
            className='img-fluid'
          />
        </div>
      </section>
    </div>
  );
}

export default ActionTicket;
