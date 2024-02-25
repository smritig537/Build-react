import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.frameBInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleFrameParent}>
            <div className={styles.rectangleFrame}>
              <div className={styles.rectangle} />
              <h1 className={styles.signUpAnd}>
                Sign up and get exclusive special deals
              </h1>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleCategoriesParent}>
                <div className={styles.rectangleCategories} />
                <div className={styles.rectangleCategoriesGroup}>
                  <div className={styles.rectangleCategories1} />
                  <div className={styles.signUpBox} />
                  <div className={styles.signUpBox1} />
                  <input
                    className={styles.signUp}
                    placeholder="Sign Up"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameDiv}>
            <div className={styles.framesignupjoinParent}>
              <div className={styles.framesignupjoin}>
                <div className={styles.categories}>Categories</div>
                <div className={styles.websitedesignertag}>
                  <div className={styles.webBuilder}>Web Builder</div>
                </div>
                <div className={styles.automationtextforrobots}>
                  <div className={styles.contactFrame} />
                </div>
                <div className={styles.imagerepresentingUSA}>
                  <div className={styles.dataCenter}>Data Center</div>
                </div>
                <div className={styles.roboticAutomation}>
                  Robotic-Automation
                </div>
              </div>
              <div className={styles.contactCategoriesFrameParent}>
                <div className={styles.contactCategoriesFrame} />
                <div className={styles.contactParent}>
                  <div className={styles.contact}>Contact</div>
                  <div className={styles.policypanelrectangleParent}>
                    <div className={styles.policypanelrectangle}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.rectangle1} />
                      </div>
                      <div className={styles.imageParent}>
                        <div className={styles.image} />
                        <div className={styles.unitedStates}>United States</div>
                      </div>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src="/image-19.svg"
                      />
                    </div>
                    <div className={styles.rectangle2} />
                  </div>
                </div>
                <div className={styles.roboAutomationSection}>
                  <div className={styles.contactFrame1}>
                    <div className={styles.rectangle3} />
                    <div className={styles.rectangle4} />
                    <div className={styles.categories1}>Categories</div>
                  </div>
                </div>
                <div className={styles.rectangle5} />
              </div>
            </div>
            <div className={styles.rectangle6} />
          </div>
          <div className={styles.rectangleFrame1}>
            <div className={styles.singleImageFrame}>
              <div className={styles.rectangle7} />
            </div>
            <img className={styles.imageIcon1} alt="" src="/image.svg" />
          </div>
          <div className={styles.rectangle8} />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
