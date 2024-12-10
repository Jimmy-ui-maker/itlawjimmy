import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <>
      <section id="about" className="  min-vh-100 pb-4">
        <div className="container shadow justify-content-center align-items-center">
          <section>
            <h1 className=" text-center">About us</h1>

            <p className="h2 my-3">1. Home Interface</p>
            <p>
              This page features a navigation bar at the top with three key
              sections: 
              <br /> 1. **Home Section**: Provides an overview of the app,
              accompanied by a hero image on the right. 
              <br /> 2. **Live Recording
              Section**: Allows users to perform live recordings for emotion
              prediction. 
              <br />3. **Demo Section (Upload Section)**: Enables users to
              upload audio files in WAV format from their computer for
              prediction.
            </p>
            <div className="col-12 ">
              <img src="/imgs/home.png" className="vid-img img-fluid" />
            </div>

            <div className="h2 my-3">2. Live Interface</div>
            <p>
              The Live Record feature provides a seamless experience. First, the
              user enters the name of the recording, then clicks the "Start
              Record" button to begin recording, which lasts for four seconds.
              Once the recording is complete, the user clicks "Stop Record" to
              save the file in the directory. Afterward, the user can click the
              "Predict" button to process the recorded file.
            </p>
            <div className="col-12 ">
              <img src="/imgs/life.png" className="vid-img img-fluid" />
            </div>
          </section>
        </div>
        <div className="container shadow-lg ">
          <section>
            <h1 className="">3. Demo Interface</h1>
            <p>
              It's straightforward, as the name suggests: the user can either
              click the "Browse Files" button to select a file for prediction or
              simply drag and drop the file for processing.
            </p>
            <div className="col-12  ">
              <img src="/imgs/demo upload.png" className="vid-img img-fluid" />
            </div>
            <h1 className="">4. Result Display</h1>

            <p>
              After completing all the above processes, the final result will be
              displayed to the user in the following format: - **Emotion
              Detected**: [Emotion Name] - **Confidence Score**: [Percentage or
              Probability] - **Analysis Summary**: A brief explanation of the
              detected emotion and its characteristics. The results will be
              presented in a clear, user-friendly layout for easy
              interpretation.
            </p>
            <div className="col-12 pb-3">
              <img src="/imgs/final result.png" className="vid-img img-fluid" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
