import React from "react";
export default function FAQS() {
  return (
    <section
      id="faqs"
      class="section faq min-vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container">
        <div className="faqs-title">
          <h1 className=" text-center  ">FAQs</h1>
          <p className=" text-center text-uppercase">
            Frequently Ask Questions
          </p>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">
                  Bellow are some answers to your questions
                </h5>

                <div class="accordion accordion-flush" id="faq-group-1">
                  <div class="accordion-item rounded-top-2">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        data-bs-target="#faqsOne-1"
                        type="button"
                        data-bs-toggle="collapse"
                      >
                        Is the Emotion Recognition for both Hausa and English?
                      </button>
                    </h2>
                    <div
                      id="faqsOne-1"
                      class="accordion-collapse collapse"
                      data-bs-parent="#faq-group-1"
                    >
                      <div class="accordion-body">
                        The answer is no, it's mainly for Hausa Language,
                        because the datasets used are Hausa Spoken words.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        data-bs-target="#faqsOne-2"
                        type="button"
                        data-bs-toggle="collapse"
                      >
                        But i used English and it works in Live record
                      </button>
                    </h2>
                    <div
                      id="faqsOne-2"
                      class="accordion-collapse collapse"
                      data-bs-parent="#faq-group-1"
                    >
                      <div class="accordion-body">
                        Sure it will because there is no restriction on the file
                        format on which to accept and which not to accept. But
                        if you notice, the outup is indirectly propotional to
                        the record emotion right? Like i said ealier, the
                        datasets used is in Hausa meaning there will be poor
                        accuracy in English and other languages, so try to speak
                        with Hausa, there will be more accuracy. Hope this clear
                        your douth. Thanks for your experience.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        data-bs-target="#faqsOne-3"
                        type="button"
                        data-bs-toggle="collapse"
                      >
                        How can i get the sample datasets?
                      </button>
                    </h2>
                    <div
                      id="faqsOne-3"
                      class="accordion-collapse collapse"
                      data-bs-parent="#faq-group-1"
                    >
                      <div class="accordion-body">
                        I laughed... I knew this section will come, it's fine,
                        my contact number is there together with my Gmail on
                        contact section just scroll a bit bellow or use the
                        Navigation bar at the top the just a DM and await your
                        response okay?
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        data-bs-target="#faqsOne-4"
                        type="button"
                        data-bs-toggle="collapse"
                      >
                        But can i be able to learn Machine Learning?
                      </button>
                    </h2>
                    <div
                      id="faqsOne-4"
                      class="accordion-collapse collapse"
                      data-bs-parent="#faq-group-1"
                    >
                      <div class="accordion-body">
                        You just making me to laugh in Spanish, why not? It's
                        just determination, azzin yes... i can do it, by the way
                        we all have one brain with a plentifull memory storage.
                        If you could permit me, i could termed it as Infinity
                        Storage, so yes you can learn Machine Learning.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item rounded-bottom-2">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        data-bs-target="#faqsOne-5"
                        type="button"
                        data-bs-toggle="collapse"
                      >
                        But i leaned there are alot of challengies?
                      </button>
                    </h2>
                    <div
                      id="faqsOne-5"
                      class="accordion-collapse collapse"
                      data-bs-parent="#faq-group-1"
                    >
                      <div class="accordion-body">
                        WOW!!! Thumbs Up... You just took a good step for
                        knowing about the challengies, seriously, you can never
                        learn anything without challengies. That's why we'all
                        are researchers, speaking like a Nigerian, God no go
                        shame us hahahahaha...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
